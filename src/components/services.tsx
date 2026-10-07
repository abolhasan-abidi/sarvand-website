"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

const services = [
  {
    id: "web",
    title: "طراحی و توسعه وب",
    description:
      "طراحی و توسعه وب‌سایت‌ها و پلتفرم‌های حرفه‌ای، سریع و مقیاس‌پذیر؛ متناسب با اهداف، نیازها و هویت هر کسب‌وکار.",
    icon: "web",
    image: "/images/services/web.png",
  },
  {
    id: "ai",
    title: "هوش مصنوعی و هوشمندسازی",
    description:
      "طراحی و پیاده‌سازی راهکارهای هوشمند برای خودکارسازی فرآیندها، تحلیل داده و ارتقای عملکرد کسب‌وکار با استفاده از هوش مصنوعی.",
    icon: "ai",
    image: "/images/services/ai.png",
  },
  {
    id: "software",
    title: "نرم‌افزار و اتوماسیون سازمانی",
    description:
      "توسعه نرم‌افزارهای اختصاصی، سیستم‌های مدیریتی و راهکارهای اتوماسیون برای یکپارچه‌سازی و بهینه‌سازی فرآیندهای سازمانی.",
    icon: "code",
    image: "/images/services/data.png",
  },
  {
    id: "app",
    title: "طراحی و توسعه اپلیکیشن",
    description:
      "طراحی و توسعه اپلیکیشن‌های موبایل و سازمانی با تمرکز بر عملکرد، تجربه کاربری، امنیت و نیازهای واقعی کسب‌وکار.",
    icon: "app",
    image: "/images/services/software.png",
  },
  {
    id: "seo",
    title: "سئو و رشد دیجیتال",
    description:
      "افزایش دیده‌شدن برند، جذب هدفمند کاربران و بهبود عملکرد دیجیتال با استفاده از سئو، تحلیل رفتار مخاطب و استراتژی‌های رشد.",
    icon: "seo",
    image: "/images/services/seo.png",
  },
  {
    id: "content",
    title: "تولید محتوای تخصصی",
    description:
      "تولید محتوای حرفه‌ای و هدفمند برای وب‌سایت، شبکه‌های اجتماعی و محصولات؛ هماهنگ با هویت برند و اهداف بازاریابی.",
    icon: "content",
    image: "/images/services/content.png",
  },
];
const loopedServices = [...services, ...services, ...services];

function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>(".service-card");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollLeft = -(card.getBoundingClientRect().width + gap) * services.length;
  }, []);

  const advanceServices = useCallback(() => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>(".service-card");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const position = Math.abs(carousel.scrollLeft);
    const loopLength = step * services.length;

    if (position >= loopLength * 2 - step * 0.55) {
      carousel.scrollTo({ left: -loopLength, behavior: "auto" });
      return;
    }

    carousel.scrollBy({
      left: -step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, []);

  function moveServices(direction: "previous" | "next") {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>(".service-card");
    if (!carousel || !card) return;

    if (direction === "next") {
      advanceServices();
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const position = Math.abs(carousel.scrollLeft);
    const loopLength = step * services.length;
    if (position < 2) {
      carousel.scrollTo({
        left: -(loopLength - step),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      return;
    }
    carousel.scrollBy({
      left: step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(() => {
      if (!document.hidden) advanceServices();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [advanceServices]);

  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-inner">
        <div className="services-heading">
          <div>
            <p className="services-eyebrow">خدمات </p>
            <h2 className="services-title" id="services-title">از ایده تا اجرا</h2>
          </div>
          <p className="services-intro">
            سروند با طراحی و توسعهٔ نرم‌افزار و راهکارهای هوشمند، مسیر رشد کسب‌وکار شما را سریع‌تر، دقیق‌تر و حرفه‌ای‌تر می‌کند.
          </p>
        </div>

        <div className="services-carousel">
          <div
            className="services-grid"
            ref={carouselRef}
          >
            {loopedServices.map((service, index) => (
              <article
                className="service-card"
                key={`${service.icon}-${index}`}
                aria-hidden={index >= services.length ? true : undefined}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5, 17, 18, .88) 0%, rgba(5, 17, 18, .7) 46%, rgba(5, 17, 18, .18) 100%), url("${service.image}")`,
                }}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <svg viewBox="0 0 48 48" aria-hidden="true">
                      {service.icon === "ai" && (
                        <>
                          <path d="M24 7v34M24 13c-2.6-5.2-10.6-4.5-11.2 1.7-5 .1-7.5 6-4.3 9.4-3.5 4.5-.4 10.4 4.9 9.8.8 5.2 7.7 6.5 10.6 2.1M24 13c2.6-5.2 10.6-4.5 11.2 1.7 5 .1 7.5 6 4.3 9.4 3.5 4.5.4 10.4-4.9 9.8-.8 5.2-7.7 6.5-10.6 2.1" />
                          <path d="M14 19h5m-5 7h5m-5 7h5m15-14h-5m5 7h-5m5 7h-5" />
                          <circle cx="19" cy="19" r="1" /><circle cx="19" cy="26" r="1" /><circle cx="19" cy="33" r="1" />
                          <circle cx="29" cy="19" r="1" /><circle cx="29" cy="26" r="1" /><circle cx="29" cy="33" r="1" />
                        </>
                      )}
                      {service.icon === "code" && (
                        <>
                          <path d="m15 13-10 11 10 11m18-22 10 11-10 11M28 7 20 41" />
                          <path d="M19 17h4m-5 7h3m2 7h4" />
                        </>
                      )}
                      {service.icon === "web" && (
                        <>
                          <path d="m24 6 19 10-19 10L5 16 24 6Z" />
                          <path d="m5 24 19 10 19-10M5 32l19 10 19-10" />
                          <path d="m13 16 19 10m-19 8 19 10" opacity=".55" />
                        </>
                      )}
                      {service.icon === "app" && (
                        <>
                          <rect x="12" y="5" width="24" height="38" rx="5" />
                          <path d="M19 10h10m-14 7h18v17H15z" />
                          <path d="M19 21h4v4h-4zm7 0h4v4h-4zm-7 7h4v3h-4zm7 0h4v3h-4zM21 38h6" />
                        </>
                      )}
                      {service.icon === "seo" && (
                        <>
                          <circle cx="21" cy="21" r="13" />
                          <path d="m30.5 30.5 9 9M13 25l5-6 4 3 7-9m-6 0h6v6" />
                        </>
                      )}
                      {service.icon === "content" && (
                        <>
                          <path d="M11 6h18l8 8v18M11 6v36h14" />
                          <path d="M29 6v9h9M17 21h14M17 27h11" />
                          <path d="m25 37 12-12 5 5-12 12-7 2 2-7Z" />
                        </>
                      )}
                    </svg>
                  </span>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a className="service-more" href={`/services#${service.id}`} tabIndex={index >= services.length ? -1 : undefined} aria-label={`اطلاعات بیشتر درباره ${service.title}`}>
                  اطلاعات بیشتر <span className="link-dot" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <nav className="services-controls" aria-label="پیمایش خدمات">
            <button className="services-arrow services-arrow-forward" type="button" onClick={() => moveServices("next")} aria-label="خدمت بعدی">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
            </button>
            <button className="services-arrow" type="button" onClick={() => moveServices("previous")} aria-label="خدمت قبلی">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Services;
