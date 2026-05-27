import Navbar from "../components/Navbar";
import LandingFooter from "../components/LandingFooter";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ────────────────────────────────────────────────
   Manifesto Page — /manifesto
   ──────────────────────────────────────────────── */

function PullQuote({ children }) {
  return (
    <blockquote
      className="my-14 md:my-20 text-center font-serif italic text-[#1A1A1A] leading-[1.15] tracking-[-0.025em]"
      style={{
        fontSize: "clamp(1.75rem, 4.2vw, 2.85rem)",
      }}
    >
      <span className="block text-[#7B5EA7] font-mono not-italic text-[10px] tracking-[0.25em] uppercase mb-4 opacity-70">
        ⸻
      </span>
      {children}
    </blockquote>
  );
}

export default function ManifestoPage() {
  const heroRef = useScrollReveal();
  const bodyRef = useScrollReveal();

  return (
    <>
      <Navbar activePage="manifesto" />

      <div style={{ background: "var(--cream)" }}>
        {/* Hero */}
        <section
          className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6"
          style={{
            background:
              "radial-gradient(ellipse at 25% 20%, rgba(184,212,227,.3), transparent 55%)," +
              "radial-gradient(ellipse at 75% 70%, rgba(247,209,186,.35), transparent 55%)," +
              "radial-gradient(ellipse at 50% 45%, rgba(213,199,232,.2), transparent 60%)," +
              "var(--cream)",
          }}
        >
          <div ref={heroRef} className="fade-slide-up max-w-[720px] mx-auto text-center">
            <p
              className="font-mono text-[11px] font-medium uppercase mb-6"
              style={{ letterSpacing: "0.15em", color: "var(--purple)" }}
            >
              Manifesto
            </p>
            <h1
              className="font-serif text-[#1A1A1A] mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              The Participant Manifesto
            </h1>
            <p
              className="font-serif italic"
              style={{
                fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
                color: "rgba(26,26,26,.55)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
              }}
            >
              On why the machine needs to know who you are — and why your authority
              cannot be a copy.
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 pb-24">
          <article
            ref={bodyRef}
            className="fade-slide-up mx-auto"
            style={{
              maxWidth: "680px",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.125rem, 1.55vw, 1.25rem)",
              lineHeight: 1.75,
              color: "rgba(26,26,26,.85)",
              letterSpacing: "-0.005em",
            }}
          >
            <p className="mb-6">
              We have a problem with how computers think about people.
            </p>
            <p className="mb-6">
              Computers were built to manage information. Information is easy. You can
              copy it, replicate it, send it across the world, and the original stays
              exactly what it was. A file does not mind being in two places at once.
            </p>
            <p className="mb-6">However, people do.</p>
            <p className="mb-6">
              For seventy years we used computers as tools. We logged in, did our work,
              logged out. The machine never needed to know who we were because nothing
              inside it really belonged to us. We were visitors in someone else's
              system.
            </p>
            <p className="mb-6">
              Then the machine became the place we live. Our money, our identity, our
              credentials, our work, our memory, our agency. All of it moved inside.
              And the machine treated us the way it had always treated everything else:
              it copied us.
            </p>

            <h2
              className="font-serif text-[#1A1A1A] mt-16 mb-6"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              A dozen versions of you
            </h2>
            <p className="mb-6">
              Today there are about a dozen versions of you. Maybe more.
            </p>
            <p className="mb-6">
              A version of you in your bank's system. A version in the airline's. A
              version in your insurance company. A version in your government portal. A
              version in your last employer's HR database. A version in every loyalty
              program you forgot you joined. Each one is stale and partial, which
              creates a small liability you can't see and can't recall.
            </p>
            <p className="mb-6">
              But notice what is actually in those dozen databases. Not just facts
              about you. Your money. Your identity. Your credentials. Your authority to
              act. These are not information. They are <em>Value</em>. Information can
              be in two places at once and lose nothing. Value cannot. They belong to a
              specific person, in a specific moment, with specific permissions — and
              when you copy them, you don't replicate them. You leak them.
            </p>
            <p className="mb-6">
              We have tolerated the leak for seventy years because it happened at human
              speed.
            </p>
            <p className="mb-6">This was bad before AI agents.</p>
            <p className="mb-6">With AI agents, it becomes catastrophic.</p>

            <h2
              className="font-serif text-[#1A1A1A] mt-16 mb-6"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              A copy of your credentials is not your authority
            </h2>
            <p className="mb-6">
              An AI agent is just software that acts on your behalf at machine speed.
              To act on your behalf, it needs to know who you are and what you are
              allowed to do. So today, we hand it an API key, an OAuth token, a JWT. We
              give it a copy of our credentials and hope for the best.
            </p>
            <p className="mb-6">
              A copy of your credentials is not your authority. It is information about
              your authority. And information about authority is not authority —
              anywhere, ever, in any system. Anyone holding it can use it. The system
              cannot tell the difference between you, a compromised agent, a prompt
              injection attack, and an honest mistake at 3 AM. When something goes
              wrong, your kill switch runs at human speed and the breach happens at
              machine speed.
            </p>

            {/* Rogue agent callout */}
            <div
              className="my-12 rounded-2xl p-7 md:p-8"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(123,94,167,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <p
                className="font-mono uppercase mb-5"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "var(--purple)",
                }}
              >
                Every rogue agent story, same shape
              </p>
              <ul
                className="space-y-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: "rgba(26,26,26,.82)",
                }}
              >
                <li className="flex gap-3">
                  <span style={{ color: "var(--purple)" }}>—</span>
                  <span>
                    A coding agent finds a token sitting in the file system, uses it,
                    deletes a production database in nine seconds.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "var(--purple)" }}>—</span>
                  <span>
                    An AI assistant in a company bypasses its own permissions, leaks
                    internal documents to the wrong staff.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "var(--purple)" }}>—</span>
                  <span>
                    One researcher's clever prompt makes three of the world's biggest
                    AI companies hand over their API keys.
                  </span>
                </li>
              </ul>
            </div>

            <p className="mb-6">And it is not the agent's fault.</p>
            <p className="mb-6">
              The architecture broke the agent and left it no other choice.
            </p>

            <h2
              className="font-serif text-[#1A1A1A] mt-16 mb-6"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              There is a different way to do this
            </h2>
            <p className="mb-6">
              You exist once, on chain, as a coherent participant. Your assets, your
              credentials, your preferences, your authority, your delegation history —
              anchored to you, wherever they appear. Agents and applications come to
              you during the interaction. Their copies have no independent existence.
              They get scoped permission slips: this scope, this limit, this expiry,
              revocable instantly. Always current, always available, always anchored to
              you. If the agent gets jailbroken, if the model gets prompt-injected, if
              anything goes wrong at all, the network simply refuses to commit the
              action. The agent can try, but only what you authorized goes through.
            </p>
            <p className="mb-6">
              Authority is consumed the moment it is used. Immediately, definitively.
              Not eventually, not probabilistically.
            </p>
            <p className="mb-6">This is the participant layer.</p>

            <PullQuote>Trust as infrastructure. Authority as a primitive.</PullQuote>
            <PullQuote>You as a citizen of the machine you live inside.</PullQuote>

            {/* Credibility section */}
            <div
              className="my-14 rounded-2xl p-7 md:p-9"
              style={{
                background:
                  "linear-gradient(135deg, rgba(213,199,232,0.22), rgba(184,212,227,0.18))",
                border: "1px solid rgba(26,26,26,0.06)",
              }}
            >
              <p
                className="font-mono uppercase mb-5"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "var(--purple)",
                }}
              >
                April 2026 — the field catches up
              </p>
              <p className="mb-5">
                Three of the loudest voices in technology pointed at the gap.
              </p>
              <ul
                className="space-y-4 mb-6"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "rgba(26,26,26,.82)",
                }}
              >
                <li>
                  <strong className="font-serif" style={{ color: "var(--ink)" }}>
                    Vitalik Buterin
                  </strong>{" "}
                  published a thesis on self-sovereign AI, arguing dependence on
                  centralized AI services is a structural risk.
                </li>
                <li>
                  <strong className="font-serif" style={{ color: "var(--ink)" }}>
                    Christopher Allen
                  </strong>
                  , who wrote the foundational principles of self-sovereign identity
                  ten years ago, sounded the alarm on agent authority in{" "}
                  <em>Agency in AI</em>: human agency must shift from agreeing to every
                  action (impossible at machine speed) to agreeing to the{" "}
                  <em>scope</em> of action and setting boundaries.
                </li>
                <li>
                  <strong className="font-serif" style={{ color: "var(--ink)" }}>
                    a16z crypto
                  </strong>{" "}
                  published <em>The missing infrastructure for AI agents</em>, arguing
                  the bottleneck for the agent economy is identity, not intelligence —
                  and proposed a "know your agent" framework using cryptographically
                  signed credentials linking an agent to its principal, permissions,
                  constraints, and reputation.
                </li>
              </ul>

              <div
                className="pt-6 mt-6 border-t flex flex-col sm:flex-row gap-6"
                style={{ borderColor: "rgba(26,26,26,0.08)" }}
              >
                <div className="flex-1">
                  <div
                    className="font-mono uppercase mb-1"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "rgba(26,26,26,.5)",
                    }}
                  >
                    We started
                  </div>
                  <div
                    className="font-serif"
                    style={{ fontSize: "1.5rem", color: "var(--ink)" }}
                  >
                    7 years earlier
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="font-mono uppercase mb-1"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "rgba(26,26,26,.5)",
                    }}
                  >
                    Live since
                  </div>
                  <div
                    className="font-serif"
                    style={{ fontSize: "1.5rem", color: "var(--ink)" }}
                  >
                    2025 · 2,000 validators
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="font-mono uppercase mb-1"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "rgba(26,26,26,.5)",
                    }}
                  >
                    Foundations
                  </div>
                  <div
                    className="font-serif"
                    style={{ fontSize: "1.5rem", color: "var(--ink)" }}
                  >
                    Patented math
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-6">
              While the rest of the industry was launching tokens and pivoting to
              memes, we were quietly fixing the missing dimension of computation.
            </p>

            <h2
              className="font-serif text-[#1A1A1A] mt-16 mb-6"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              This is the moment
            </h2>
            <p className="mb-6">
              To stop accepting that you are a row in someone else's database. That you
              are a wallet in someone else's contract. That you are a profile in
              someone else's app.
            </p>
            <p className="mb-6">
              That your AI agent has more access to your life than your closest human
              assistant ever would.
            </p>

            <PullQuote>
              You are not a copy, a record, or a data point.
              <br />
              You are the participant.
            </PullQuote>

            <p
              className="text-center font-serif italic mt-8"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                color: "rgba(26,26,26,.55)",
              }}
            >
              And the machine needs to know that.
            </p>
          </article>
        </section>

        <LandingFooter />
      </div>
    </>
  );
}
