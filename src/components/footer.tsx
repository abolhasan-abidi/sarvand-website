import Image from "next/image";

const socialNetworks = [
  { name: "لینکدین", icon: "linkedin" },
  { name: "اینستاگرام", icon: "instagram" },
  { name: "تلگرام", icon: "telegram" },
  { name: "یوتیوب", icon: "youtube" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact" aria-label="اطلاعات سروند">
      <div className="footer-inner">
        <a className="footer-brand" href="#home" aria-label="سروند، بازگشت به بالای صفحه">
          <Image src="/images/sarvand-mark.png" alt="" width={34} height={68} />
          <span>
            <strong>سروند</strong>
            <small>SARVAND</small>
          </span>
        </a>

        <span className="footer-copyright">© سروند. تمامی حقوق محفوظ است.</span>

        <div className="footer-social" role="group" aria-label="شبکه‌های اجتماعی سروند">
          <div className="footer-social-icons">
            {socialNetworks.map((network) => (
              <span className="footer-social-icon" role="img" aria-label={network.name} key={network.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {network.icon === "linkedin" && <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v7M7.5 7.4v.2M11.5 17v-7h3v1.1c.6-.8 1.3-1.2 2.3-1.2 1.7 0 2.2 1.1 2.2 2.8V17M14.5 13v4" /></>}
                  {network.icon === "instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>}
                  {network.icon === "telegram" && <><path d="M21 3 3 10.3l6.3 2.2L18 6.5l-6.8 8.2 5.5 5L21 3Z" /><path d="m9.3 12.5.4 5.7 3.3-3.7" /></>}
                  {network.icon === "youtube" && <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" /></>}
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
