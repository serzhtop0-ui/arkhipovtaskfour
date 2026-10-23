"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-dark py-16 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl text-brand">У вас есть проект для нас или необходима консультация?</h2>
          <p className="mt-8 text-sm">Наш специалист свяжется с вами и ответит на все вопросы.</p>
        </div>
        {sent ? (
          <p className="self-center text-xl">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="grid grid-cols-2 items-end gap-8"
          >
            <Input required name="name" placeholder="Ваше имя" className="rounded-none border-0 border-b bg-transparent" />
            <Input required name="phone" type="tel" placeholder="Телефон" className="rounded-none border-0 border-b bg-transparent" />
            <Button className="w-fit rounded-full bg-brand">ОТПРАВИТЬ</Button>
          </form>
        )}
      </div>
    </section>
  );
}
