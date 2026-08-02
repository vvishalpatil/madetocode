import { useRef, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useCombobox } from "./Combobox";
import { cities } from "../../data/cities";

const ROW_HEIGHT = 40;
const MAX_VISIBLE_ROWS = 8;

export function ComboboxDemo() {
  const {
    isOpen,
    filteredItems,
    highlightedIndex,
    getLabelProps,
    getInputProps,
    getMenuProps,
    getItemProps,
  } = useCombobox({
    items: cities,
    itemToString: (item) => item,
  });

  const scrollParentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => scrollParentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 8,
  });

  // Keep the highlighted row in view when navigating by keyboard.
  useEffect(() => {
    if (isOpen) virtualizer.scrollToIndex(highlightedIndex, { align: "auto" });
  }, [highlightedIndex, isOpen, virtualizer]);

  const menuHeight = Math.min(filteredItems.length, MAX_VISIBLE_ROWS) * ROW_HEIGHT;

  return (
    <div className="not-prose">
      <label {...getLabelProps()} className="mb-2 block text-sm font-medium text-text">
        Search a city
      </label>

      <div className="relative">
        <input
          {...getInputProps()}
          placeholder="Try “san” or “berlin”…"
          className="w-full rounded-btn border border-border bg-bg px-4 py-2.5 text-[15px] text-text placeholder-text-3 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-border"
        />

        {isOpen && filteredItems.length > 0 && (
          <div
            {...getMenuProps()}
            ref={scrollParentRef}
            style={{ height: menuHeight, maxHeight: MAX_VISIBLE_ROWS * ROW_HEIGHT }}
            className="absolute z-10 mt-1.5 w-full overflow-y-auto rounded-btn border border-border bg-bg shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <div style={{ height: virtualizer.getTotalSize(), position: "relative" }}>
              {virtualizer.getVirtualItems().map((virtualRow) => {
                const item = filteredItems[virtualRow.index];
                return (
                  <div
                    key={virtualRow.key}
                    {...getItemProps({ item, index: virtualRow.index })}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: virtualRow.size,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                    className={`flex cursor-pointer items-center px-4 text-[15px] transition-colors ${
                      virtualRow.index === highlightedIndex
                        ? "bg-accent-dim text-text"
                        : "text-text-2"
                    }`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isOpen && filteredItems.length === 0 && (
          <div
            {...getMenuProps()}
            className="absolute z-10 mt-1.5 w-full rounded-btn border border-border bg-bg px-4 py-3 text-[15px] text-text-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            No cities match your search.
          </div>
        )}
      </div>
    </div>
  );
}
