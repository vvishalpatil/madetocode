function K({ children }: { children: string }) {
  return <span className="text-[#C586C0]">{children}</span>;
}

function Fn({ children }: { children: string }) {
  return <span className="text-[#DCDCAA]">{children}</span>;
}

function Str({ children }: { children: string }) {
  return <span className="text-[#CE9178]">{children}</span>;
}

function Cm({ children }: { children: string }) {
  return <span className="italic text-[#6A9955]">{children}</span>;
}

function Ty({ children }: { children: string }) {
  return <span className="text-[#4EC9B0]">{children}</span>;
}

export function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-card border border-black/10 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-3">
        <span className="size-3 rounded-full bg-[#FF5F57]" />
        <span className="size-3 rounded-full bg-[#FFBD2E]" />
        <span className="size-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-xs text-[#555555]">
          useDebounce.ts — Machine Coding #01
        </span>
      </div>

      <pre className="overflow-x-auto bg-[#111111] p-6 font-mono text-[13px] leading-6 text-[#D4D4D4]">
        <code>
          <Cm>{"// Problem: Build a debounced search input"}</Cm>
          {"\n"}
          <Cm>{"// What interviewers actually check:"}</Cm>
          {"\n"}
          <Cm>{"// cleanup, generics, loading state"}</Cm>
          {"\n\n"}
          <K>import</K> {"{ useState, useEffect } "}
          <K>from</K> <Str>'react'</Str>
          {"\n\n"}
          <K>function</K> <Fn>useDebounce</Fn>
          {"<"}
          <Ty>T</Ty>
          {">("}
          {"\n"}
          {"  value: "}
          <Ty>T</Ty>
          {","}
          {"\n"}
          {"  delay: "}
          <Ty>number</Ty>
          {" = 300"}
          {"\n"}
          {"): "}
          <Ty>T</Ty>
          {" {"}
          {"\n"}
          {"  "}
          <K>const</K>
          {" [debounced, setDebounced] ="}
          {"\n"}
          {"    "}
          <Fn>useState</Fn>
          {"<"}
          <Ty>T</Ty>
          {">(value)"}
          {"\n\n"}
          {"  "}
          <Fn>useEffect</Fn>
          {"(() => {"}
          {"\n"}
          {"    "}
          <K>const</K>
          {" timer = "}
          <Fn>setTimeout</Fn>
          {"(() => {"}
          {"\n"}
          {"      setDebounced(value)"}
          {"\n"}
          {"    }, delay)"}
          {"\n\n"}
          {"    "}
          <Cm>{"// cleanup prevents stale updates"}</Cm>
          {"\n"}
          {"    "}
          <K>return</K>
          {" () => "}
          <Fn>clearTimeout</Fn>
          {"(timer)"}
          {"\n"}
          {"  }, [value, delay])"}
          {"\n\n"}
          {"  "}
          <K>return</K>
          {" debounced"}
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}
