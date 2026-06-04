import { useEffect } from "react";
import Navbar from "../components/Navbar";
import LandingFooter from "../components/LandingFooter";
import "../styles/papers.css";

const PAPERS = [
  {
    key: "white",
    eyebrow: "01 / White Paper",
    title: "The Participant Layer of the Internet",
    blurb:
      "TCP made messaging a network primitive. HTTP made resources a network primitive. MOI makes participants a network primitive. Three domains — agents, business, tokens — share one root cause: WHO does not exist in the machine. The protocol that puts participants natively inside computation.",
    file: "/papers/moi-white-paper.pdf",
  },
  {
    key: "tech",
    eyebrow: "02 / Tech Paper",
    title: "Contextual Compute: The General Theory of Computation",
    blurb:
      "Introduces the K-Machine — a Turing Machine extended with one primitive dimension, WHO, alongside WHAT, WHERE, and HOW. Classical computation is recovered when the participant dimension collapses to the trivial unit, and is strictly subsumed by participant-indexed computation.",
    file: "https://zenodo.org/records/19500491",
    external: true,
  },
  {
    key: "math",
    eyebrow: "03 / Math Paper",
    title: "Value, Information, and the Cartesian Degeneracy",
    blurb:
      "Establishes the categorical distinction between value and information, proves no structure-preserving embedding can map value into information, and identifies the Cartesian Degeneracy: the parametric collapse of value into information when the participant dimension reduces to the trivial unit.",
    file: "https://zenodo.org/records/19194877",
    external: true,
  },
];

export default function PapersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Navbar activePage="papers" />
      <main className="papers-page">
        <section className="papers-hero">
          <span className="papers-eyebrow">Papers</span>
          <h1 className="papers-hl">
            Read the work behind <em>MOI</em>.
          </h1>
          <p className="papers-sub">
            Three documents. The thesis, the vision, the math — everything that
            grounds the Participant Layer of the internet.
          </p>
        </section>

        <section className="papers-grid">
          {PAPERS.map((p) => (
            <article key={p.key} className="paper-card">
              <span className="paper-eyebrow">{p.eyebrow}</span>
              <h2 className="paper-title">{p.title}</h2>
              <p className="paper-blurb">{p.blurb}</p>
              <a
                href={p.file}
                {...(p.external ? {} : { download: true })}
                className="paper-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.external ? (
                  <>
                    Read on Zenodo <span aria-hidden="true">↗</span>
                  </>
                ) : (
                  <>
                    Download PDF <span aria-hidden="true">↓</span>
                  </>
                )}
              </a>
            </article>
          ))}
        </section>

        <LandingFooter />
      </main>
    </>
  );
}
