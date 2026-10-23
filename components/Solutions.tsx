"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const points = [
  ["Стеновые панели", "left-[30%] top-[20%]"],
  ["Потолочные плиты", "left-[50%] top-[35%]"],
  ["Отбойная доска", "left-[25%] top-[60%]"],
  ["Алюминиевый профиль", "left-[70%] top-[55%]"],
];

export default function Solutions() {
  const [view, setView] = useState<"scheme" | "list">("scheme");
  const tab = (v: typeof view) => (v === view ? "rounded-full bg-brand" : "rounded-full border-brand text-brand");

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16">
      <h2 className="max-w-md text-3xl">Интерпан — комплексные решения для вашего бизнеса</h2>
      <div className="mt-6 flex gap-3">
        <Button onClick={() => setView("scheme")} variant={view === "scheme" ? "default" : "outline"} className={tab("scheme")}>НА СХЕМЕ</Button>
        <Button onClick={() => setView("list")} variant={view === "list" ? "default" : "outline"} className={tab("list")}>СПИСКОМ</Button>
      </div>
      {view === "scheme" ? (
        <div className="relative mt-8 h-[400px] bg-soft">
          {points.map(([name, pos]) => (
            <button key={name} title={name} className={`absolute ${pos} size-7 rounded-full bg-brand text-white`}>+</button>
          ))}
        </div>
      ) : (
        <ul className="mt-8 space-y-3 text-lg">
          {points.map(([name]) => <li key={name}>{name}</li>)}
        </ul>
      )}
    </section>
  );
}
