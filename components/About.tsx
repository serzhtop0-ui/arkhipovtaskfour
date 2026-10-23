const services = [
  "Производство и декорирование огнестойких стеновых панелей",
  "Изготовление водо- и огнестойких потолочных плит",
  "Декорирование любых оснований: ГСП, СМЛ, ГКЛ",
  "Огнестойкая отбойная доска для стен",
  "Производство и декорирование алюминиевого профиля",
  "Изготовление продукции по индивидуальным размерам",
  "Производство противопожарных строительных материалов",
  "Осуществление доставки и монтаж продукции компании",
];

export default function About() {
  return (
    <section className="bg-soft py-14">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl">О компании</h2>
          <p className="mt-6 text-xs leading-relaxed text-dark/70">
            Завод по производству огнестойких декоративных стеновых панелей «Интерпан» начал свою деятельность в 2003 году.
            Более десяти лет компания не стояла на месте: она развивалась, разрабатывала новые решения в области декора.
          </p>
        </div>
        <div className="grid grid-cols-2 border-l border-t md:grid-cols-4">
          {services.map((s, i) => (
            <div key={s} className="h-40 border-b border-r bg-white p-4 text-xs font-semibold">
              <img src={`/img/icon-${i + 1}.svg`} alt="" className="mb-6 size-8" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
