const small = [2, 3, 4, 5];

export default function News() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16">
      <h2 className="text-3xl">Новости компании</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <img src="/img/photo.svg" alt="Открытие представительства в Крыму" className="w-full" />
        <div className="grid grid-cols-2 gap-4">
          {small.map((n) => <img key={n} src={`/img/news-${n}.svg`} alt="" className="w-full" />)}
        </div>
      </div>
    </section>
  );
}
