const perks = [
  ["perk-1", "Более 15 лет на рынке", "Большой опыт в производстве панелей под любые задачи"],
  ["perk-2", "Собственное производство", "Мы контролируем стоимость и качество нашей продукции"],
  ["perk-3", "Индивидуальный подход", "Изготавливаем панели индивидуальных размеров"],
  ["icon-8", "Доставка и монтаж", "Выполняем работы под ключ от производства до установки"],
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4">
      <div className="grid gap-4 md:grid-cols-[2.3fr_1fr]">
        <img src="/img/slider.svg" alt="" className="size-full object-cover" />
        <div className="grid gap-4">
          <img src="/img/banner-1.svg" alt="Распродажа отбойной доски Интерпан" className="size-full object-cover" />
          <div className="bg-dark p-6 text-white">Калькулятор — расчитать количество панелей для помещения</div>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-6 py-10 text-xs md:grid-cols-4">
        {perks.map(([icon, title, text]) => (
          <li key={title} className="flex gap-3">
            <img src={`/img/${icon}.svg`} alt="" className="size-8" />
            <div>
              <b>{title}</b>
              <p className="text-dark/70">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
