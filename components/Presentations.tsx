export default function Presentations() {
  return (
    <section className="grid bg-dark text-white md:grid-cols-2">
      <h2 className="px-4 py-12 text-3xl md:ml-auto md:w-[600px]">Посмотрите презентации о наших продуктах</h2>
      <div className="grid grid-cols-2 gap-6 bg-brand px-8 py-12 text-sm font-semibold">
        <a href="#"><img src="/img/1-1.svg" alt="Стеновые панели Интерпан" /></a>
        <a href="#" className="flex items-center gap-3">
          <span className="rounded bg-white/20 px-2 py-3 text-xs">PPT</span>
          Потолочные панели Интерпан
        </a>
      </div>
    </section>
  );
}
