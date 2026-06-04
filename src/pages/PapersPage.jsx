import { useEffect } from "react";
import Navbar from "../components/Navbar";
import LandingFooter from "../components/LandingFooter";
import "../styles/papers.css";

const PAPERS = [
  {
    key: "white",
    eyebrow: "01 / White Paper",
    title: "MOI White Paper",
    blurb:
      "The full thesis. What the Participant Layer is, why authority is the missing dimension of the internet, and how MOI gives every agent a verifiable identity onchain.",
    file: "/papers/moi-white-paper.pdf",
  },
  {
    key: "tech",
    eyebrow: "02 / Tech Paper",
    title: "MOI Tech Paper",
    blurb:
      "Contextual Compute. The paradigm that lets every participant carry its own state, scope its own authority, and act under live, revocable context — without trusting a shared global machine.",
    file: "https://zenodo.org/records/19500491",
    external: true,
  },
  {
    key: "math",
    eyebrow: "03 / Math Paper",
    title: "MOI Math Paper",
    blurb:
      "The formal layer. Cryptographic primitives, the MDAG construction, accountability proofs, and the math that makes scoped, revocable authority possible.",
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
