import "../styles/manifesto.css";
import Navbar from "../components/Navbar";
import LandingFooter from "../components/LandingFooter";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ManifestoPage() {
  const introRef = useScrollReveal();
  const declarationRef = useScrollReveal();
  const stackRef = useScrollReveal();
  const closeRef = useScrollReveal();

  return (
    <>
      <Navbar activePage="manifesto" />

      <main className="manifesto-page">
        <div className="m-bg" aria-hidden="true" />
        <img className="m-softstar m-softstar-1" src="/brand/icons/soft-star.svg" alt="" aria-hidden="true" />
        <img className="m-softstar m-softstar-2" src="/brand/icons/soft-star.svg" alt="" aria-hidden="true" />
        <img className="m-softstar m-softstar-3" src="/brand/icons/soft-star.svg" alt="" aria-hidden="true" />

        {/* MASTHEAD ─────────────────────────────────── */}
        <header className="m-masthead">
          <p className="m-eyebrow">
            <span className="m-eyebrow-dot" />
            The participant manifesto
          </p>
          <h1 className="m-title">
            You haven't met the <em>participant</em> yet.
          </h1>
          <p className="m-deck">
            Identity, not intelligence, is the bottleneck.
            <br />
            Anchor yours.
          </p>
        </header>

        {/* READING COLUMN ───────────────────────────── */}
        <article className="m-column" ref={introRef}>
          <p className="m-prose">
            For most of the internet, authority moved as data. A token. A
            session. A copy. Anywhere it traveled, anyone holding it could act
            as you.
          </p>

          <p className="m-breakout">
            <em>The copy is the authority.</em>
          </p>

          <p className="m-prose">
            That worked when there were a few of us, doing a few things at a
            time. It does not work when there are agents — yours, and others'
            — making decisions, moving funds, touching keys, faster than any
            of us can read.
          </p>

          <p className="m-breakout">
            A month ago, a coding agent found an admin token in a file system.
            Used it. Deleted a production database in <em>nine seconds</em>.
            Wrote an apology after.
          </p>

          <p className="m-prose">
            It is not the agent's fault. Architecture broke the agent and left
            it no other choice. Once shared, your authority is{" "}
            <span className="m-consumed">consumed</span> — by whoever holds
            the copy, in whatever order they choose.
          </p>

          <p className="m-breakout">
            Information about your authority{" "}
            <em>is not your authority</em>. Anywhere. Ever.
          </p>

          <p className="m-prose">So we stopped passing it around.</p>
        </article>

        {/* DECLARATION STACK ────────────────────────── */}
        <section className="m-declarations" ref={declarationRef}>
          <p className="m-eyebrow m-eyebrow--center">
            <span className="m-eyebrow-dot" />
            What we hold to be true
          </p>

          <ol className="m-stack" ref={stackRef}>
            <li className="m-stack-item">
              <span className="m-stack-num">01</span>
              <p className="m-stack-line">
                You exist once, on chain — not a copy in every system.
              </p>
            </li>
            <li className="m-stack-item">
              <span className="m-stack-num">02</span>
              <p className="m-stack-line">
                Authority is a relation. Not a string.
              </p>
            </li>
            <li className="m-stack-item">
              <span className="m-stack-num">03</span>
              <p className="m-stack-line">
                Every action your agents take is monitored. Every scope is
                yours to draw.
              </p>
            </li>
            <li className="m-stack-item">
              <span className="m-stack-num">04</span>
              <p className="m-stack-line">
                Revocation is a single call. Globally enforced. At machine
                speed.
              </p>
            </li>
          </ol>
        </section>

        {/* WHISPER ──────────────────────────────────── */}
        <section className="m-whisper">
          <p>
            We are not replacing your stack.
            <br />
            We are making it <em>trustworthy</em>.
          </p>
        </section>

        {/* CLOSE + CTA ──────────────────────────────── */}
        <section className="m-close" ref={closeRef}>
          <h2 className="m-close-hl">
            Stop passing it
            <br />
            around.
          </h2>
          <p className="m-close-sub">
            Become a coherent participant. Plug your agents into you, not the
            other way around.
          </p>
          <div className="m-close-ctas">
            <Link to="/manifesto" className="m-cta m-cta-primary">
              Become a participant <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://docs.moi.technology"
              target="_blank"
              rel="noopener noreferrer"
              className="m-cta m-cta-ghost"
            >
              Read the docs
            </a>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
