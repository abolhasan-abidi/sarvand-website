export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <header className="projects-heading">
          <div>
            <p className="projects-eyebrow">نمونه‌کارها</p>
            <h2 className="projects-title" id="projects-title">نمونه‌پروژه‌های سروند</h2>
          </div>
          <p className="projects-intro">پروژه‌های سروند به‌زودی در این بخش معرفی می‌شوند.</p>
        </header>

        <article className="project-coming-soon" aria-label="نمونه‌پروژه‌ها به‌زودی منتشر می‌شوند">
          <span className="project-coming-soon-orbit" aria-hidden="true" />
          <h3>Coming Soon</h3>
        </article>
      </div>
    </section>
  );
}
