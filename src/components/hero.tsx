import Image from "next/image";
import styles from "./hero.module.css";

function HeroHologram() {
  return (
    <div className={styles.hologram} aria-hidden="true">
      <div className={styles.hologramScene}>
        <svg className={styles.hologramSvg} viewBox="0 0 600 500" fill="none">
          <defs>
            <linearGradient id="holo-line" x1="180" y1="110" x2="420" y2="370" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B1FFE7" />
              <stop offset=".48" stopColor="#54DDB1" />
              <stop offset="1" stopColor="#198D72" />
            </linearGradient>
            <filter id="holo-blur" x="80" y="50" width="440" height="420" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          <ellipse cx="300" cy="407" rx="190" ry="36" fill="#28D7A2" fillOpacity=".16" filter="url(#holo-blur)" />
          <ellipse className={styles.holoOrbitBack} cx="300" cy="246" rx="192" ry="83" stroke="#62E8C1" strokeOpacity=".34" />
          <ellipse className={styles.holoOrbitBack} cx="300" cy="246" rx="145" ry="66" stroke="#A4F5DC" strokeOpacity=".24" />

          <ellipse className={styles.holoBeam} cx="300" cy="220" rx="76" ry="136" fill="#35DDA9" fillOpacity=".08" filter="url(#holo-blur)" />
          <path className={styles.holoBeam} d="M300 350V82M252 344V116M348 344V116" stroke="#7FF4CF" strokeOpacity=".32" strokeDasharray="3 8" />
          <ellipse cx="300" cy="336" rx="70" ry="23" stroke="#A7FFE3" strokeOpacity=".48" />

          <g className={styles.holoOrbitFront}>
            <ellipse cx="300" cy="238" rx="190" ry="62" transform="rotate(-17 300 238)" stroke="url(#holo-line)" strokeOpacity=".8" />
            <circle cx="121" cy="293" r="5" fill="#B5FFE9" />
            <circle cx="478" cy="182" r="4" fill="#6AF0BF" />
          </g>
          <g className={styles.holoOrbitCounter}>
            <ellipse cx="300" cy="238" rx="160" ry="112" transform="rotate(34 300 238)" stroke="#7FEFD0" strokeOpacity=".48" strokeDasharray="4 8" />
            <circle cx="300" cy="126" r="4" fill="#B5FFE9" />
            <circle cx="300" cy="350" r="3" fill="#6AF0BF" />
          </g>

          <path d="m169 359 131-45 131 45-131 48-131-48Z" fill="#173C3A" fillOpacity=".62" stroke="#8AF4D0" strokeOpacity=".78" />
          <path d="m169 359 131 48v20l-131-49v-19ZM431 359l-131 48v20l131-49v-19Z" fill="#0D2929" fillOpacity=".82" stroke="#55DDB1" strokeOpacity=".52" />
          <path d="m189 360 111-38 110 38-110 40-111-40Z" stroke="#A7FFE3" strokeOpacity=".36" />
          <path className={styles.holoScan} d="M197 366h206" stroke="#A7FFE3" strokeOpacity=".7" />
          <circle cx="300" cy="407" r="3" fill="#B7FFE8" />
        </svg>
        <Image
          className={styles.holoLogo}
          src="/images/sarvand-hologram-logo.png"
          alt=""
          width={220}
          height={330}
          unoptimized
          priority
        />

        <div className={`${styles.holoCard} ${styles.holoCardTop}`}>
          <span className={styles.holoCardMark} aria-hidden="true">✳</span>
          <span><strong>هوش مصنوعی</strong><small>راهکارهای هوشمند مقیاس‌پذیر</small></span>
        </div>
        <div className={`${styles.holoCard} ${styles.holoCardUpperLeft}`}>
          <span className={styles.holoBars} aria-hidden="true"><i /><i /><i /><i /></span>
          <span><strong>تحلیل داده</strong><small>بینش دقیق برای تصمیم‌گیری</small></span>
        </div>
        <div className={`${styles.holoCard} ${styles.holoCardBottom}`}>
          <span className={styles.holoCardMark} aria-hidden="true">✎</span>
          <span><strong>تولید محتوای تخصصی</strong><small>محتوای خلاقانه و هدفمند</small></span>
        </div>
        <div className={`${styles.holoCard} ${styles.holoCardLowerRight}`}>
          <span className={styles.holoCodeMark} aria-hidden="true">‹/›</span>
          <span><strong>توسعه نرم‌افزار</strong><small>ایده تا محصول</small></span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.mainRow}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowAccent} aria-hidden="true" />
              <span className={styles.eyebrowText}>فناوری در خدمت رشد هوشمند کسب‌وکار</span>
            </p>
            <h1 className={styles.title} id="hero-title">
              <span className={styles.titleLine}>راهکارهای هوشمند</span>
              <span className={`${styles.titleLine} ${styles.accentTitle}`}>برای رشد پایدار</span>
              <span className={styles.titleLine}>کسب‌وکار شما</span>
            </h1>
            <p className={styles.description}>
              سروند با تکیه بر تخصص در توسعه نرم‌افزار، هوش مصنوعی و طراحی محصولات دیجیتال، راهکارهایی مقیاس‌پذیر، امن و نتیجه‌محور برای رشد و تحول کسب‌وکارهای شما ارائه می‌دهد.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#services">مشاهده خدمات <span aria-hidden="true">←</span></a>
            </div>
          </div>
          <div className={styles.visual}>
            <HeroHologram />
          </div>
        </div>

      </div>
    </section>
  );
}
