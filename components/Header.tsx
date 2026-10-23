import Logo from "./Logo";

const nav = ["Главная", "Каталог", "Технология монтажа", "Прайс", "Кейсы", "Контакты"];

export default function Header() {
  return (
    <header className="mx-auto max-w-[1200px] px-4 text-xs">
      <div className="flex gap-6 py-3 text-dark/70">
        <span>info@interpan.ru</span>
        <span>+7 (495) 730-55-01</span>
        <a href="#contact" className="font-semibold text-brand">ОСТАВИТЬ ЗАЯВКУ</a>
      </div>
      <div className="flex items-center justify-between py-3">
        <Logo />
        <nav className="flex gap-8 font-semibold">
          {nav.map((n) => <a key={n} href="#">{n}</a>)}
        </nav>
      </div>
    </header>
  );
}
