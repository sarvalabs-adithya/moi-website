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

        {/* ─── BODY ─────────────────────────────────── */}
        <article className="m-column">
          <p className="m-prose m-lead m-reveal">
            We have a problem with how computers think about people.
          </p>

          <p className="m-prose m-dropcap m-reveal">
            Computers were built to manage information. Information is easy.
            You can copy it, replicate it, send it across the world, and the
            original stays exactly what it was. A file does not mind being in
            two places at once.
          </p>

          <p className="m-prose m-reveal">However, people do.</p>

          <p className="m-prose m-reveal">
            For seventy years we used computers as tools. We logged in, did
            our work, logged out. The machine never needed to know who we
            were because nothing inside it really belonged to us. We were
            visitors in someone else's system.
          </p>

          <p className="m-prose m-reveal">
            Then the machine became the place we live. Our money, our
            identity, our credentials, our work, our memory, our agency. All
            of it moved inside. And the machine treated us the way it had
            always treated everything else: it copied us.
          </p>

          <p className="m-statement m-reveal">
            Today there are about a dozen versions of you.{" "}
            <em>Maybe more.</em>
          </p>

          <p className="m-prose m-reveal">
            A version of you in your bank's system. A version in the
            airline's. A version in your insurance company. A version in your
            government portal. A version in your last employer's HR database.
            A version in every loyalty program you forgot you joined. Each
            one is stale and partial, which creates a small liability you
            can't see and can't recall.
          </p>

          <p className="m-prose m-reveal">
            But notice what is actually in those dozen databases. Not just
            facts about you. Your money. Your identity. Your credentials.
            Your authority to act.
          </p>

          <p className="m-statement m-reveal">
            These are not information. <em>They are Value.</em>
          </p>

          <p className="m-prose m-reveal">
            Information can be in two places at once and lose nothing. Value
            cannot. They belong to a specific person, in a specific moment,
            with specific permissions — and when you copy them, you don't
            replicate them. You leak them.
          </p>

          <p className="m-prose m-reveal">
            We have tolerated the leak for seventy years because it happened
            at human speed.
          </p>

          <p className="m-statement m-statement--right m-reveal">
            This was bad before AI agents. With AI agents, it becomes{" "}
            <em>catastrophic.</em>
          </p>

          <hr className="m-hr m-reveal" />

          <p className="m-prose m-reveal">
            An AI agent is just software that acts on your behalf at machine
            speed. To act on your behalf, it needs to know who you are and
            what you are allowed to do. So today, we hand it an API key, an
            OAuth token, a JWT. We give it a copy of our credentials and
            hope for the best.
          </p>

          <p className="m-prose m-lead m-reveal">
            A copy of your credentials is not your authority. It is
            information about your authority.
          </p>

          <p className="m-statement m-reveal">
            And information about authority is <em>not authority</em> —
            anywhere, ever, in any system.
          </p>

          <p className="m-prose m-reveal">
            Anyone holding it can use it. The system cannot tell the
            difference between you, a compromised agent, a prompt injection
            attack, and an honest mistake at 3 AM. When something goes
            wrong, your kill switch runs at human speed and the breach
            happens at machine speed.
          </p>

          <p className="m-prose m-reveal">
            Every rogue agent story you have read in the last year follows
            the same shape. A coding agent finds a token sitting in the file
            system, uses it, deletes a production database in nine seconds.
            An AI assistant in a company bypasses its own permissions, leaks
            internal documents to the wrong staff. One researcher's clever
            prompt makes three of the world's biggest AI companies hand over
            their API keys.
          </p>

          <p className="m-statement m-reveal">
            And it is not the agent's fault.{" "}
            <span className="m-dim-italic">
              The architecture broke the agent and left it no other choice.
            </span>
          </p>

          <hr className="m-hr m-reveal" />

          <p className="m-prose m-lead m-reveal">
            There is a different way to do this.
          </p>

          <p className="m-prose m-reveal">
            You exist once, on chain, as a coherent participant. Your
            assets, your credentials, your preferences, your authority, your
            delegation history — anchored to you, wherever they appear.
            Agents and applications come to you during the interaction.
            Their copies have no independent existence. They get scoped
            permission slips: this scope, this limit, this expiry, revocable
            instantly. Always current, always available, always anchored to
            you.
          </p>

          <p className="m-prose m-reveal">
            If the agent gets jailbroken, if the model gets prompt-injected,
            if anything goes wrong at all, the network simply refuses to
            commit the action. The agent can try, but only what you
            authorized goes through.
          </p>

          <p className="m-statement m-reveal">
            Authority is <span className="m-mint">consumed</span> the moment
            it is used. Immediately, definitively.{" "}
            <small>Not eventually, not probabilistically.</small>
          </p>

          {/* ─── DECLARATION BLOCK ──────────────────── */}
          <div className="m-declaration m-reveal">
            <p className="m-decl-lead">
              <em>This is the participant layer.</em>
            </p>
            <p className="m-decl-line">Trust as infrastructure.</p>
            <p className="m-decl-line">Authority as a primitive.</p>
            <p className="m-decl-line">
              You as a citizen of the machine you live inside.
            </p>
          </div>

          <hr className="m-hr m-reveal" />

          <p className="m-prose m-reveal">
            In April 2026, three of the loudest voices in technology pointed
            at the gap. Vitalik Buterin published a thesis on self-sovereign
            AI, arguing dependence on centralized AI services is a
            structural risk. Christopher Allen, who wrote the foundational
            principles of self-sovereign identity ten years ago, sounded the
            alarm on agent authority by publishing "Agency in AI" — that
            human agency must shift from agreeing to every action,
            impossible at machine speed, to agreeing to the scope of action
            and setting boundaries. And a16z crypto published "The missing
            infrastructure for AI agents," arguing that the bottleneck for
            the agent economy is identity, not intelligence, and proposing a
            know-your-agent framework of cryptographically signed
            credentials linking an agent to its principal, permissions,
            constraints, and reputation.
          </p>

          <p className="m-whisper m-reveal">
            We started seven years earlier.
          </p>

          <p className="m-prose m-reveal">
            The math is patented. The network has been live since 2025, with
            two thousand validators and real businesses generating real
            revenue on top of it. While the rest of the industry was
            launching tokens and pivoting to memes, we were quietly fixing
            the missing dimension of computation.
          </p>

          <p className="m-prose m-reveal">
            This is the moment to stop accepting that you are a row in
            someone else's database. That you are a wallet in someone else's
            contract. That you are a profile in someone else's app. That
            your AI agent has more access to your life than your closest
            human assistant ever would.
          </p>

          {/* ─── CLOSE ──────────────────────────────── */}
          <p className="m-close-line m-reveal">
            You are not a copy, a record, or a data point.{" "}
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
