import "../styles/manifesto.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import LandingFooter from "../components/LandingFooter";
import { Link } from "react-router-dom";

export default function ManifestoPage() {
  // Restore standard 16px root for this route so rem-based reading
  // measures hit the intended ~38rem / ~600px column.
  useEffect(() => {
    document.documentElement.classList.add("manifesto-root");
    return () => {
      document.documentElement.classList.remove("manifesto-root");
    };
  }, []);

  // Scroll progress bar (indigo → lilac)
  useEffect(() => {
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      document.documentElement.style.setProperty(
        "--m-scroll",
        p.toString()
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Scroll reveal — fade + translateY on enter
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document
        .querySelectorAll(".m-reveal")
        .forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll(".m-reveal")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="manifesto-page">
      <div className="m-progress" aria-hidden="true" />

      <Navbar activePage="manifesto" />

      <main className="m-main">
        {/* ─── MASTHEAD ─────────────────────────────── */}
        <header className="m-masthead m-reveal">
          <p className="m-eyebrow">
            <span className="m-eyebrow-dot" />
            The Participant Manifesto
          </p>
          <h1 className="m-title">
            You are not a copy. You are the{" "}
            <em>participant.</em>
          </h1>
          <p className="m-dek">
            Seven years of foundational work on the missing dimension of
            computation — written plainly, for the moment the machine became
            the place we live.
          </p>
        </header>

        {/* ─── BODY (condensed) ─────────────────────── */}
        <article className="m-column">
          <p className="m-prose m-lead m-reveal">
            We have a problem with how computers think about people.
          </p>

          <p className="m-prose m-reveal">
            The machine became the place we live — and it copied us. Today
            there are about a dozen versions of you, scattered across a
            dozen databases.
          </p>

          <p className="m-statement m-reveal">
            These are not information. <em>They are Value.</em>
          </p>

          <p className="m-prose m-reveal">
            Hand an agent an API key and you hand it a copy of your
            credentials.
          </p>

          <p className="m-statement m-reveal">
            Information about authority is <em>not authority</em> — anywhere,
            ever.
          </p>

          <p className="m-prose m-reveal">
            And it is not the agent's fault. The architecture left it no
            other choice.
          </p>

          <p className="m-prose m-reveal">
            There is a different way: you exist once, on chain. Agents get
            scoped, revocable permission — only what you authorized goes
            through.
          </p>

          <p className="m-statement m-reveal">
            Authority is <span className="m-mint">consumed</span> the moment
            it is used.{" "}
            <small>Not eventually, not probabilistically.</small>
          </p>

          {/* ─── DECLARATION BLOCK ──────────────────── */}
          <div className="m-declaration m-reveal">
            <p className="m-decl-lead">
              <em>This is the participant layer.</em>
            </p>
            <p className="m-decl-line">Trust as infrastructure.</p>
            <p className="m-decl-line">Authority as a primitive.</p>
          </div>

          <p className="m-whisper m-reveal">
            We started seven years earlier.
          </p>

          {/* ─── CLOSE ──────────────────────────────── */}
          <p className="m-close-line m-reveal">
            <em>You are the participant.</em> And the machine needs to know
            that.
          </p>

          <div className="m-close-ctas m-reveal">
            <Link to="/" className="m-cta m-cta-primary">
              Become a participant <span aria-hidden="true">→</span>
            </Link>
            <a
              href="/MOILitePaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="m-cta m-cta-ghost"
            >
              Read the litepaper
            </a>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
