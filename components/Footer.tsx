const menu = ["Главная", "Каталог", "Технология монтажа", "Прайс", "Кейсы", "Контакты"];

export default function Footer() {
  return (
    <footer className="bg-soft py-12 text-xs">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-[2fr_1fr_1fr]">
        <img src="/img/company.svg" alt="Интерпан" className="max-w-sm" />
        <div>
          <h4 className="mb-4 text-sm font-semibold">Меню</h4>
          <ul className="space-y-2">{menu.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Связаться с нами</h4>
          <p className="flex items-center gap-2"><img src="/img/phone.svg" alt="" />+7 (495) 730-55-01</p>
          <p className="mt-2 flex items-center gap-2"><img src="/img/mail.svg" alt="" />info@interpan.ru</p>
          <div className="mt-6 flex gap-3">
            {["facebook", "vk", "youtube"].map((s) => <img key={s} src={`/img/${s}.svg`} alt={s} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}
