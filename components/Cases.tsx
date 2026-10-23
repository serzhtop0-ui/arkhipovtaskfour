"use client";

import { useState } from "react";
import Arrows from "./Arrows";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const lists = {
  ПРОДУКЦИЯ: [
    "Панели эконом — Pixel", "Панели окрашенные — Econom", "Панели эконом — Econom Loft",
    "Панели Practic — HPL пластик", "Панели с натуральным шпоном — Elite", "Панели с ПВХ пленкой — InTerior",
    "Декоративный профиль для панелей", "Отбойная доска — Design", "Потолочные панели — INTERPAN Mercury",
    "Фасадные и цокольные панели", "Панели антибактериальные — Farma", "Плита без покрытия",
  ],
  КЛИЕНТЫ: ["Volmix", "Gefest", "X5 Retail Group", "Дикси", "Интертестстрой"],
};

export default function Cases() {
  const [tab, setTab] = useState<keyof typeof lists>("ПРОДУКЦИЯ");

  return (
    <Carousel className="mx-auto max-w-[1200px] px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">Кейсы Интерпан</h2>
        <Arrows />
      </div>
      <div className="mt-6 flex gap-3">
        {(Object.keys(lists) as (keyof typeof lists)[]).map((t) => (
          <Button
            key={t}
            variant={t === tab ? "default" : "outline"}
            onClick={() => setTab(t)}
            className={t === tab ? "rounded-full bg-brand" : "rounded-full border-brand text-brand"}
          >
            {t}
          </Button>
        ))}
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.6fr]">
        <ul className="space-y-3 text-sm">
          {lists[tab].map((p) => <li key={p}>{p}</li>)}
        </ul>
        <CarouselContent>
          {[1, 2].map((slide) => (
            <CarouselItem key={slide} className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => <div key={i} className="aspect-square border bg-soft" />)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
