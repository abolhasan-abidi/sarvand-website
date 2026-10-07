import Image from "next/image";

const values = [
  {
    title: "گوش می‌دهیم",
    description: "از دغدغه‌ها و هدف‌های شما شروع می‌کنیم تا مسئله را دقیق بشناسیم.",
  },
  {
    title: "راه‌حل پیشنهاد می‌دهیم",
    description: "ایده‌ها را به راهکارهای روشن و متناسب با کسب‌وکار شما تبدیل می‌کنیم.",
  },
  {
    title: "اجرا می‌کنیم",
    description: "راهکار انتخاب‌شده را طراحی و پیاده‌سازی می‌کنیم تا مسئله برطرف شود.",
  },
];

const strengths = [
  { title: "تیم متخصص", icon: "team" },
  { title: "راهکار اختصاصی", icon: "custom" },
  { title: "همراهی تا نتیجه", icon: "fast" },
  { title: "امن و پایدار", icon: "secure" },
];

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-content">
          <p className="about-eyebrow">چرا سروند؟</p>
          <h2 className="about-title" id="about-title">
            راه‌حل‌های مؤثر، <span>از دل چالش‌های شما</span>
          </h2>
          <p className="about-description">
            هر کسب‌وکار چالش‌های خودش را دارد. شما از مسئله و هدفتان می‌گویید؛ ما با
            دقت گوش می‌دهیم، ریشهٔ چالش را پیدا می‌کنیم و راه‌های عملی پیش رویتان
            می‌گذاریم. بعد، راهکار مناسب را با طراحی، برنامه‌نویسی و هوش مصنوعی به
            اجرا می‌رسانیم.
          </p>

          <div className="about-values" aria-label="رویکرد سروند">
            {values.map((value) => (
              <div className="about-value" key={value.title}>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="about-link" href="#contact">
            مشاوره رایگان <span className="link-dot" aria-hidden="true" />
          </a>
        </div>

        <div className="about-visual" aria-hidden="true">
          <div className="about-visual-grid" />
          <div className="about-visual-ring about-visual-ring-outer" />
          <div className="about-visual-ring about-visual-ring-inner" />
          <div className="about-visual-mark">
            <Image src="/images/sarvand-mark.png" alt="" width={212} height={426} sizes="(max-width: 760px) 135px, 212px" />
          </div>
          <span className="about-visual-wordmark">SARVAND</span>
          <div className="about-features">
            {strengths.map((strength) => (
              <div className="about-feature" key={strength.icon}>
                <span className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {strength.icon === "team" && <><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-1.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V19zM16 5.3a3 3 0 0 1 0 5.8M17 13.2a4.4 4.4 0 0 1 3.5 4.3V19h-3" /></>}
                    {strength.icon === "custom" && <><path d="m12 3 8 9-8 9-8-9 8-9Z" /><path d="M4 12h16M12 3l3 9-3 9-3-9 3-9Z" /></>}
                    {strength.icon === "fast" && <path d="M13.2 2 5 13h6l-.5 9L19 10h-6l.2-8Z" />}
                    {strength.icon === "secure" && <><path d="M12 3 20 6v5.2c0 5-3.4 8.3-8 9.8-4.6-1.5-8-4.8-8-9.8V6l8-3Z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></>}
                  </svg>
                </span>
                <span>{strength.title}</span>
              </div>
            ))}
          </div>
          <span className="about-visual-point about-visual-point-one" />
          <span className="about-visual-point about-visual-point-two" />
        </div>
      </div>
    </section>
  );
}
