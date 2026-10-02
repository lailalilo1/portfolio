import { useEffect, useRef, useState } from "react";
import { profile, skills, projects, experience, education } from "./data.js";
import HeroAnimation from "./HeroAnimation.jsx";
const Chips = ({ items }) => (
  <div className="ch">{items.map((x) => <span key={x}>{x}</span>)}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id}><div className="w"><h2 className="t">{title}</h2>{children}</div></section>
);

function Header({ theme, toggle }) {
  const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  return (
    <header><div className="w"><nav aria-label="Main">
      <b>{profile.name}</b>
      <ul>
        {links.map((l) => <li className="l" key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        <li><button onClick={toggle} aria-label="Toggle theme">{theme === "dark" ? "Light" : "Dark"}</button></li>
      </ul>
    </nav></div></header>
  );
}

function Hero() {
  return (
    <div className="w hero" id="home">
      <HeroAnimation />
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.intro}</p>
      <span className="badge">{profile.badge}</span>
      <div className="btns">
        <a className="btn m" href="#projects">View my projects</a>
        <a className="btn o" href={profile.cv} download>Download CV</a>
      </div>
      <div className="strip">{profile.strip.map((s) => <span key={s}>{s}</span>)}</div>
    </div>
  );
}

function ProjectCard({ p, onZoom }) {
  return (
    <article className="card">
      <span className="k">{p.icon} {p.kind}</span>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      {p.note && <p className="note">{p.note}</p>}
      <Chips items={p.tech} />

      {p.imgs?.length > 0 && (
        <div className="gal">
          {p.imgs.map((u, i) => (
            <img key={u} src={u} alt={`${p.title} – image ${i + 1}`} tabIndex={0}
              onClick={() => onZoom(u)} onKeyDown={(e) => e.key === "Enter" && onZoom(u)} />
          ))}
        </div>
      )}

      {p.videos?.map((v) => (
         <video key={v} src={v} controls muted playsInline preload="metadata"
          style={{ width: "100%", borderRadius: 10 }} />
        ))} 

      {(p.demo || p.video || p.code) && (
        <div className="lnk">
          {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
          {p.video && <a href={p.video} target="_blank" rel="noopener noreferrer">Video demo</a>}
          {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">Source code</a>}
        </div>
      )}

      <details>
        <summary>View project workflow</summary>
        <ol className="flow">{p.flow.map((f) => <li key={f}>{f}</li>)}</ol>
      </details>
    </article>
  );
}

function Lightbox({ src, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (src) ref.current?.showModal();
    else ref.current?.close();
  }, [src]);
  return (
    <dialog ref={ref} onClick={onClose} onClose={onClose}>
      {src && <img src={src} alt="" />}
    </dialog>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { const t = localStorage.getItem("theme"); if (t) return t; } catch {}
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Section id="about" title="About me">
          <div className="ab">
            <div>{profile.about.map((t) => <p key={t}>{t}</p>)}</div>
            <ul className="info">{profile.info.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </Section>
        <Section id="skills" title="Skills">
          <div className="sk">
            {Object.entries(skills).map(([k, v]) => <div key={k}><h3>{k}</h3><Chips items={v} /></div>)}
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <div className="pj">{projects.map((p) => <ProjectCard key={p.title} p={p} onZoom={setZoom} />)}</div>
        </Section>
        <Section id="experience" title="Experience">
          <HeroAnimation />
          <ol className="tl">
            {experience.map((e) => (
              
              <li key={e.company}>
                <HeroAnimation />
                <time>{e.year}</time><h3>{e.company}</h3><p>{e.role}</p>
                <ul>{e.missions.map((m) => <li key={m}>{m}</li>)}</ul>
                <p><small>Technologies: {e.tech}</small></p>
              </li>
            ))}
          </ol>
        </Section>
        <Section id="education" title="Education">
          <div className="edu"><h3>{education.school}</h3><p>{education.degree}</p><Chips items={education.modules} /></div>
        </Section>
        <section id="resume"><div className="w cta">
          <h2 className="t">Resume</h2><p>Interested in my profile?</p>
          <a className="btn m" href={profile.cv} download>Download my CV</a>
        </div></section>
        <Section id="contact" title="Let's work together">
          <div className="ct">
            <p>I'm currently looking for a PFE internship starting January/February 2027.</p>
            <ul>
              <li>📍 Agadir, Morocco</li>
              <li>📧 <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li>💼 <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              {profile.github && (
                <li>💻 <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              )}
            </ul>
          </div>
        </Section>
      </main>
      <footer className="f"><div className="w">
        <b>{profile.name}</b> · Data Science | Big Data | AI<br />© {new Date().getFullYear()} {profile.name}
      </div></footer>
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </>
  );
}
