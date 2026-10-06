import type { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "خدمات سروند | طراحی، توسعه و راهکارهای هوشمند",
  description: "آشنایی با خدمات سروند در طراحی و توسعه وب، هوش مصنوعی، نرم‌افزار، اپلیکیشن، سئو و تولید محتوا.",
};

const services = [
  {
    id: "web",
    title: "طراحی و توسعه وب",
    image: "/images/services/web.png",
    summary: "وب‌سایت و پلتفرمی که هم برای مخاطب ساده باشد و هم با نیازهای کسب‌وکار شما رشد کند.",
    description:
      "ابتدا هدف سایت، مخاطبان و مسیرهایی را که کاربر باید طی کند مشخص می‌کنیم. سپس ساختار، ظاهر و بخش‌های فنی را متناسب با هویت برند شما طراحی و پیاده‌سازی می‌کنیم؛ با توجه به نمایش درست در موبایل، سرعت و امکان توسعه در آینده.",
    items: [
      "طراحی تجربه و رابط کاربری",
      "پیاده‌سازی وب‌سایت واکنش‌گرا",
      "توسعه قابلیت‌ها و پنل‌های اختصاصی",
      "بهینه‌سازی سرعت و ساختار فنی",
    ],
  },
  {
    id: "ai",
    title: "هوش مصنوعی و هوشمندسازی",
    image: "/images/services/ai.png",
    summary: "استفاده هدفمند از داده و هوش مصنوعی برای تصمیم‌گیری بهتر و کاهش کارهای تکراری.",
    description:
      "هوشمندسازی را از شناخت یک مسئله واقعی شروع می‌کنیم. بررسی می‌کنیم کدام فرآیندها قابلیت خودکار شدن دارند، داده‌های موجود چه کمکی می‌کنند و کجا یک ابزار هوشمند می‌تواند به تیم شما سرعت و دقت بیشتری بدهد. راهکار را متناسب با جریان کاری شما طراحی می‌کنیم.",
    items: [
      "شناسایی فرصت‌های خودکارسازی",
      "تحلیل و آماده‌سازی داده",
      "طراحی ابزارها و دستیارهای هوشمند",
      "ارزیابی و بهبود مرحله‌ای خروجی",
    ],
  },
  {
    id: "software",
    title: "نرم‌افزار و اتوماسیون سازمانی",
    image: "/images/services/data.png",
    summary: "سامانه‌های اختصاصی برای منظم کردن اطلاعات و روان‌تر شدن فرآیندهای سازمان.",
    description:
      "وقتی کارها میان ابزارهای جداگانه و مراحل دستی پراکنده می‌شوند، یک نرم‌افزار متناسب می‌تواند مسیر انجام آن‌ها را روشن‌تر کند. فرآیندهای فعلی را بررسی می‌کنیم و سامانه‌ای می‌سازیم که اطلاعات، نقش‌ها و گزارش‌ها را در یک جریان کاری منسجم کنار هم قرار دهد.",
    items: [
      "نیازسنجی و طراحی جریان کار",
      "توسعه سامانه‌های مدیریتی",
      "داشبورد و گزارش‌های کاربردی",
      "یکپارچه‌سازی داده و فرآیندها",
    ],
  },
  {
    id: "app",
    title: "طراحی و توسعه اپلیکیشن",
    image: "/images/services/software.png",
    summary: "اپلیکیشن‌هایی که نیاز واقعی کاربران را با تجربه‌ای روان و قابل اعتماد پاسخ می‌دهند.",
    description:
      "از ایده اولیه تا نسخه قابل استفاده، مسیرهای کاربر و قابلیت‌های اصلی اپلیکیشن را با دقت تعریف می‌کنیم. طراحی و توسعه بر اساس عملکرد، سادگی استفاده، امنیت و امکان اتصال به بخش‌های دیگر کسب‌وکار انجام می‌شود؛ چه محصول برای مشتریان باشد، چه ابزاری برای تیم داخلی.",
    items: [
      "طراحی مسیر و رابط کاربری",
      "توسعه اپلیکیشن موبایل و سازمانی",
      "اتصال به سرویس‌ها و پنل مدیریت",
      "توجه به عملکرد، امنیت و پایداری",
    ],
  },
  {
    id: "seo",
    title: "سئو و رشد دیجیتال",
    image: "/images/services/seo.png",
    summary: "دیده‌شدن بهتر برند با شناخت مخاطب، بهبود سایت و برنامه‌ریزی برای رشد پایدار.",
    description:
      "رشد دیجیتال فقط به جذب بازدید محدود نیست. ساختار فنی و محتوایی سایت را بررسی می‌کنیم، نیاز و رفتار مخاطب را می‌سنجیم و برای رسیدن کاربران مناسب به صفحات مناسب برنامه می‌ریزیم. نتیجه این بررسی‌ها به اقدام‌های مشخص و قابل پیگیری تبدیل می‌شود.",
    items: [
      "بررسی فنی و محتوایی وب‌سایت",
      "تحقیق موضوع و کلیدواژه",
      "تحلیل رفتار مخاطب",
      "پایش و بهبود برنامه رشد",
    ],
  },
  {
    id: "content",
    title: "تولید محتوای تخصصی",
    image: "/images/services/content.png",
    summary: "محتوایی روشن و هدفمند که پیام برند شما را به مخاطب درست می‌رساند.",
    description:
      "برای هر کانال، نوع بیان و نیاز مخاطب متفاوت است. لحن برند و هدف هر محتوا را مشخص می‌کنیم و سپس متن و ایده‌های مناسب وب‌سایت، محصول و شبکه‌های اجتماعی را می‌سازیم. در کنار خلاقیت، خوانایی، دقت و اصول سئو را هم در نظر می‌گیریم.",
    items: [
      "تدوین لحن و برنامه محتوایی",
      "محتوای وب‌سایت و صفحات محصول",
      "محتوای شبکه‌های اجتماعی",
      "ویرایش و بهینه‌سازی برای جست‌وجو",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <a className={styles.brand} href="/#home" aria-label="سروند، بازگشت به صفحه اصلی">
            <Image src="/images/sarvand-mark.png" alt="" width={34} height={68} />
            <span><strong>سروند</strong><small>SARVAND</small></span>
          </a>
          <a className={styles.backLink} href="/#services"><span aria-hidden="true">→</span> بازگشت به صفحه اصلی</a>
        </header>

        <section className={styles.intro} aria-labelledby="services-page-title">
          <p className={styles.eyebrow}>خدمات سروند</p>
          <h1 id="services-page-title">از ایده تا اجرا، همراه شما</h1>
          <p>
            هر کسب‌وکار نیازهای متفاوتی دارد. در این صفحه می‌توانید ببینید هر خدمت
            سروند چه مسئله‌ای را پاسخ می‌دهد و چه کارهایی را در بر می‌گیرد.
          </p>
          <nav className={styles.jumpNav} aria-label="فهرست خدمات">
            {services.map((service) => (
              <a href={`#${service.id}`} key={service.id}>{service.title}</a>
            ))}
          </nav>
        </section>

        <div className={styles.serviceList}>
          {services.map((service) => (
            <section className={styles.serviceCard} id={service.id} aria-labelledby={`${service.id}-title`} key={service.id}>
              <div className={styles.serviceCopy}>
                <h2 id={`${service.id}-title`}>{service.title}</h2>
                <p className={styles.summary}>{service.summary}</p>
                <p className={styles.description}>{service.description}</p>
                <h3>در این زمینه چه کار می‌کنیم؟</h3>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className={styles.artwork} style={{ backgroundImage: `url("${service.image}")` }} aria-hidden="true" />
            </section>
          ))}
        </div>

        <div className={styles.pageEnd}>
          <a href="/#services">بازگشت به خدمات صفحه اصلی <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </main>
  );
}
