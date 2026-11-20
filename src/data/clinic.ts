// All facts come from veon/client.json (ids in comments) and the client's own site texts
// (audit/screens/home-desktop-*.png). Nothing here is invented: no ratings, reviews or counters.

export const FUTURE = "Розділ у розробці";

export interface Phone { display: string; href: string; }
// company.contacts.phones — which number belongs to which address is not known (U-R003).
export const phones: Phone[] = [
  { display: "+38 067 790 89 64", href: "tel:+380677908964" },
  { display: "+38 099 325 23 50", href: "tel:+380993252350" },
];

export const email = "salamakhaoleg75@gmail.com"; // company.contacts.emails

// C-010: Sunday is not shown until the client confirms it (U-R012).
export const hours = [
  { days: "Пн–Пт", time: "8:30–20:00" },
  { days: "Сб", time: "9:00–15:00" },
];
export const hoursLine = "Пн–Пт 8:30–20:00, Сб 9:00–15:00";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// company.contacts.addresses; «Сихів» — competitors[Авіценна].reason, ux/demo-home.md §2.
export const addresses = [
  { street: "вул. В. Великого, 38", district: "", city: "Львів", map: maps("вул. В. Великого, 38, Львів") },
  { street: "вул. Угорська, 12", district: "Сихів", city: "Львів", map: maps("вул. Угорська, 12, Львів") },
];

export const socials = {
  instagram: "https://www.instagram.com/dr.salamakha.dental.clinic/",
  facebook: "https://www.facebook.com/profile.php?id=100054263151081",
};

export interface Price { label: string; value: string; }
export interface Service { name: string; text: string; prices: Price[]; }

// company.products_services; prices — C-009 (no update date on the client's price list, I-004).
export const services: Service[] = [
  { name: "Терапія", text: "Лікування карієсу, пломби та професійна гігієна.",
    prices: [{ label: "пломба", value: "від 1150 грн" }, { label: "гігієна", value: "від 1550 грн" }] },
  { name: "Хірургія", text: "Видалення зубів будь-якої складності.",
    prices: [{ label: "видалення", value: "від 500 грн" }] },
  { name: "Імплантація та кісткова пластика", text: "Імплантація зубів — прогнозовано й з контролем відновлення.",
    prices: [{ label: "імплантат", value: "від 12 500 грн" }] },
  { name: "Ортопедія", text: "Коронки та знімні конструкції: естетика і відновлення жування.",
    prices: [{ label: "коронка", value: "від 4500 грн" }] },
  { name: "Ортодонтія", text: "Брекети, елайнери та апарати — план, строки, контроль результату.",
    prices: [{ label: "брекети, щелепа", value: "від 19 000 грн" }, { label: "елайнери", value: "від 42 000 грн" }] },
  { name: "Дитяча стоматологія", text: "Дбайливе лікування та адаптація дітей — від першого зубчика до 12 років.",
    prices: [] },
  { name: "Лікування під мікроскопом", text: "Точне ендолікування під збільшенням — для складних каналів і повторного лікування.",
    prices: [] },
  { name: "Естетична стоматологія", text: "Реставрації та відбілювання для природної усмішки.",
    prices: [] },
];

export interface Doctor { name: string; role: string; years: string; img: string; alt: string; }

// C-007 (owner), C-008 (doctors). Photos — the client's own portrait session (/komanda).
export const owner: Doctor = {
  name: "Саламаха Олег Ярославович",
  role: "Ортопед, хірург-імплантолог",
  years: "25 років досвіду",
  img: "doctor-owner",
  alt: "Олег Саламаха, лікар-власник клініки, у білій сорочці на темному фоні",
};

export const doctors: Doctor[] = [
  { name: "Підгайний Роман Олегович", role: "Ендодонтист, терапевт", years: "10 років досвіду", img: "doctor-pidhainyi", alt: "Роман Підгайний, ендодонтист" },
  { name: "Маркевич Надія Петрівна", role: "Ортодонт", years: "15 років досвіду", img: "doctor-markevych", alt: "Надія Маркевич, ортодонт" },
  { name: "Рєзнік Марія Миколаївна", role: "Ендодонтист, терапевт", years: "10 років досвіду", img: "doctor-reznik", alt: "Марія Рєзнік, ендодонтист" },
  { name: "Ковб Аліна Леонідівна", role: "Ендодонтист, терапевт", years: "9 років досвіду", img: "doctor-kovb", alt: "Аліна Ковб, ендодонтист" },
  { name: "Тимецька Станіслава Володимирівна", role: "Гігієніст-терапевт", years: "8 років досвіду", img: "doctor-tymetska", alt: "Станіслава Тимецька, гігієніст" },
];

// Client's own wording (home page, block «Можна розслабитися»), C-004, C-005.
export const approach = [
  { title: "Можна розслабитися", text: "Пояснюємо кроки лікування простими словами й працюємо без поспіху." },
  { title: "Працюємо в 4 руки", text: "Щоб зробити максимум якісно за мінімальний час." },
  { title: "Індивідуальний план лікування", text: "Підбираємо оптимальний шлях під показання та бюджет." },
  { title: "Стерильність — принцип", text: "Інструменти проходять усі етапи стерилізації на 100%." },
];

// Answers: C-009, C-010, company.contacts.addresses, the client's own FAQ wording.
export const faq = [
  { q: "Скільки коштує консультація?", a: "Консультація лікаря — 500 грн. Орієнтовні ціни на послуги є вище, точну вартість визначає лікар після діагностики та плану лікування." },
  { q: "Чи лікуєте дітей?", a: "Так, працюємо з дітьми від першого зубчика до 12 років і робимо адаптацію, щоб візит проходив спокійно." },
  { q: "Де ви знаходитесь?", a: "Дві адреси у Львові: вул. В. Великого, 38 та вул. Угорська, 12 (Сихів)." },
  { q: "Який графік роботи?", a: "Понеділок — п’ятниця з 8:30 до 20:00, субота з 9:00 до 15:00." },
];
