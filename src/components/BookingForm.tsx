"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CloudDoodle, StarDoodle } from "@/components/ui/Doodles";

interface FormValues {
  name: string;
  phone: string;
  age: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  age?: string;
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Введите имя (минимум 2 символа)";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Введите корректный номер телефона";
  }

  if (!values.age) {
    errors.age = "Укажите возраст ребёнка";
  }

  return errors;
}

const inputClasses =
  "rounded-2xl border-2 border-ink bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-orange";

export function BookingForm() {
  const { booking, whatsapp } = siteContent;
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    age: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Бэкенда пока нет: имитируем отправку заявки локально.
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const resetForm = () => {
    setValues({ name: "", phone: "", age: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section
      id="booking"
      className="scroll-mt-20 relative overflow-hidden bg-purple py-20 text-cream sm:py-28"
    >
      <div className="animate-float absolute left-6 top-10 text-cream/25 sm:left-16">
        <CloudDoodle className="h-16 w-24" />
      </div>
      <div className="animate-wiggle absolute right-8 bottom-10 text-cream/25 sm:right-20">
        <StarDoodle className="h-12 w-12" />
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="-rotate-2 inline-block w-fit rounded-full border-2 border-cream/40 bg-cream/10 px-4 py-1.5 font-hand text-xl font-bold text-cream">
              Запись открыта ✨
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {booking.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg text-cream/80">
              {booking.subheading}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-sm text-cream/60">
              Останется только прийти познакомиться.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border-2 border-ink bg-paper p-7 text-ink shadow-[6px_6px_0_0_var(--color-ink)] sm:p-9">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-start gap-4 py-6"
                  role="status"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-green text-2xl text-paper"
                  >
                    ✓
                  </span>
                  <h3 className="font-heading text-2xl text-ink">
                    {booking.successTitle}
                  </h3>
                  <p className="text-ink-soft">{booking.successText}</p>
                  <Button
                    type="button"
                    variant="dark"
                    onClick={resetForm}
                    className="mt-2"
                  >
                    Отправить ещё одну заявку
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  noValidate
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="parent-name"
                      className="text-sm font-bold text-ink"
                    >
                      Имя родителя
                    </label>
                    <input
                      id="parent-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, name: e.target.value }))
                      }
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "parent-name-error" : undefined
                      }
                      className={inputClasses}
                      placeholder="Как к вам обращаться"
                    />
                    {errors.name && (
                      <p id="parent-name-error" className="text-sm font-bold text-coral">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="parent-phone"
                      className="text-sm font-bold text-ink"
                    >
                      Телефон
                    </label>
                    <input
                      id="parent-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, phone: e.target.value }))
                      }
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "parent-phone-error" : undefined
                      }
                      className={inputClasses}
                      placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && (
                      <p id="parent-phone-error" className="text-sm font-bold text-coral">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="child-age"
                      className="text-sm font-bold text-ink"
                    >
                      Возраст ребёнка
                    </label>
                    <select
                      id="child-age"
                      name="age"
                      value={values.age}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, age: e.target.value }))
                      }
                      aria-invalid={Boolean(errors.age)}
                      aria-describedby={
                        errors.age ? "child-age-error" : undefined
                      }
                      className={inputClasses}
                    >
                      <option value="">Выберите возраст</option>
                      {booking.ageOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.age && (
                      <p id="child-age-error" className="text-sm font-bold text-coral">
                        {errors.age}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "submitting"}
                    className="mt-2 w-full justify-center disabled:opacity-60"
                  >
                    {status === "submitting" ? "Отправляем…" : "Записаться"}
                  </Button>

                  <ButtonLink
                    href={whatsapp.url}
                    variant="dark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                  >
                    {whatsapp.label}
                  </ButtonLink>

                  <p className="text-xs text-ink-soft/80">{booking.note}</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
