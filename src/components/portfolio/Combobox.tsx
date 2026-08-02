import { useId, useMemo, useState } from "react";
import type { KeyboardEvent } from "react";

export type UseComboboxOptions<T> = {
  items: T[];
  itemToString: (item: T) => string;
  onSelect?: (item: T) => void;
};

export type UseComboboxReturn<T> = {
  isOpen: boolean;
  inputValue: string;
  selectedItem: T | null;
  highlightedIndex: number;
  filteredItems: T[];
  getLabelProps: () => { id: string; htmlFor: string };
  getToggleButtonProps: () => {
    id: string;
    type: "button";
    tabIndex: -1;
    "aria-label": string;
    onClick: () => void;
  };
  getInputProps: () => {
    id: string;
    role: "combobox";
    value: string;
    autoComplete: "off";
    "aria-autocomplete": "list";
    "aria-expanded": boolean;
    "aria-controls": string;
    "aria-labelledby": string;
    "aria-activedescendant": string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
  };
  getMenuProps: () => {
    id: string;
    role: "listbox";
    "aria-label": string;
    onMouseDown: (e: React.MouseEvent) => void;
  };
  getItemProps: (args: { item: T; index: number }) => {
    id: string;
    role: "option";
    "aria-selected": boolean;
    onClick: () => void;
    onMouseEnter: () => void;
  };
  getOptionId: (index: number) => string;
};

/**
 * Headless combobox hook. Owns state and WAI-ARIA wiring via prop-getters;
 * has no opinion on markup or styling. Consumers spread the returned props
 * onto their own elements (see ComboboxDemo.tsx).
 */
export function useCombobox<T>({
  items,
  itemToString,
  onSelect,
}: UseComboboxOptions<T>): UseComboboxReturn<T> {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const filteredItems = useMemo(() => {
    const query = inputValue.trim().toLowerCase();
    if (!query) return items;
    return items.filter((item) => itemToString(item).toLowerCase().includes(query));
  }, [items, itemToString, inputValue]);

  const getOptionId = (index: number) => `${id}-option-${index}`;

  function open() {
    if (!isOpen) setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setHighlightedIndex(0);
  }

  function selectByIndex(index: number) {
    const item = filteredItems[index];
    if (!item) return;
    setSelectedItem(item);
    setInputValue(itemToString(item));
    onSelect?.(item);
    close();
  }

  function moveHighlight(delta: number) {
    if (filteredItems.length === 0) return;
    setHighlightedIndex((current) => {
      const next = (current + delta + filteredItems.length) % filteredItems.length;
      return next;
    });
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          open();
        } else {
          moveHighlight(1);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!isOpen) {
          open();
        } else {
          moveHighlight(-1);
        }
        break;
      case "Home":
        if (isOpen) {
          e.preventDefault();
          setHighlightedIndex(0);
        }
        break;
      case "End":
        if (isOpen) {
          e.preventDefault();
          setHighlightedIndex(Math.max(filteredItems.length - 1, 0));
        }
        break;
      case "Enter":
        if (isOpen) {
          e.preventDefault();
          selectByIndex(highlightedIndex);
        }
        break;
      case "Escape":
        if (isOpen) {
          e.preventDefault();
          close();
        }
        break;
      default:
        break;
    }
  }

  return {
    isOpen,
    inputValue,
    selectedItem,
    highlightedIndex,
    filteredItems,
    getOptionId,
    getLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: `${id}-input`,
    }),
    getToggleButtonProps: () => ({
      id: `${id}-toggle`,
      type: "button",
      tabIndex: -1,
      "aria-label": isOpen ? "Close options" : "Open options",
      onClick: () => (isOpen ? close() : open()),
    }),
    getInputProps: () => ({
      id: `${id}-input`,
      role: "combobox",
      value: inputValue,
      autoComplete: "off",
      "aria-autocomplete": "list",
      "aria-expanded": isOpen,
      "aria-controls": `${id}-menu`,
      "aria-labelledby": `${id}-label`,
      "aria-activedescendant":
        isOpen && filteredItems.length > 0 ? getOptionId(highlightedIndex) : undefined,
      onChange: (e) => {
        setInputValue(e.target.value);
        setHighlightedIndex(0);
        open();
      },
      onKeyDown: handleKeyDown,
      onFocus: open,
      onBlur: close,
    }),
    getMenuProps: () => ({
      id: `${id}-menu`,
      role: "listbox",
      "aria-label": "Suggestions",
      // Prevent the input from blurring (and the menu closing) before a
      // click on an option registers.
      onMouseDown: (e) => e.preventDefault(),
    }),
    getItemProps: ({ index }) => ({
      id: getOptionId(index),
      role: "option",
      "aria-selected": index === highlightedIndex,
      onClick: () => selectByIndex(index),
      onMouseEnter: () => setHighlightedIndex(index),
    }),
  };
}
