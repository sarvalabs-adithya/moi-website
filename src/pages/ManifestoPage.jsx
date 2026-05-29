import "../styles/manifesto.css";

export default function ManifestoPage() {
  return (
    <main className="manifesto">
      <div className="manifesto-bg" aria-hidden="true" />

      <div className="manifesto-content">
        <header className="m-topbar">
          <span className="m-watermark">@MOI_Tech</span>
          <a className="m-url" href="https://moi.technology">moi.technology</a>
        </header>

        {/* HERO ────────────────────────────────────────── */}
        <section className="m-hero">
          <div className="m-orb m-orb-1" aria-hidden="true" />

          <div className="m-hero-copy">
            <span className="m-chip">
              <span className="m-chip-dot" />
              Official statement
            </span>

            <h1 className="m-headline">
              You haven't met the <em>participant</em> yet.
            </h1>

            <div className="m-rule">
              <span className="m-rule-dot" />
              <span className="m-rule-line" />
            </div>

            <p className="m-sub">
              {/* TODO: replace with final manifesto sub-line */}
              Placeholder. Short, declarative, second-person. Set up a fact, hit return, name the consequence.
            </p>

            <div className="m-ctas">
              <a className="m-btn m-btn-primary" href="#steps">Read the manifesto</a>
              <a className="m-btn m-btn-ghost" href="/">Back home</a>
            </div>
          </div>

          <div className="m-hero-mascot">
            <img
              className="m-softstar tr"
              src="/brand/icons/soft-star.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className="m-pip"
              src="/brand/mascot/pip-large.png"
              alt="Pip — the MOI participant mascot"
            />
            <img
              className="m-softstar bl"
              src="/brand/icons/soft-star.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </section>

        {/* DECLARATION ─────────────────────────────────── */}
        <section className="m-declaration">
          <div className="m-declaration-eyebrow">The premise</div>
          <p className="m-declaration-body">
            {/* TODO: replace with the manifesto's central declaration */}
            Your credentials are not information. They are <span>value</span>.
            Anyone holding the copy can use it.
          </p>
        </section>

        {/* FOUR STEPS ──────────────────────────────────── */}
        <section className="m-steps" id="steps">
          <div className="m-orb m-orb-2" aria-hidden="true" />

          <div className="m-steps-head">
            <h2 className="m-steps-title">Your authority, four ways.</h2>
            <div className="m-steps-flow">
              Exist <span>→</span> Monitor <span>→</span> Scope <span>→</span> Revoke
            </div>
          </div>

          <div className="m-step-grid">
            <article className="m-step">
              <div className="m-step-num">01</div>
              <h3 className="m-step-name">Exist</h3>
              <p className="m-step-body">
                {/* TODO */}
                One coherent participant, on chain. Your authority anchored to you.
              </p>
            </article>
            <article className="m-step">
              <div className="m-step-num">02</div>
              <h3 className="m-step-name">Monitor</h3>
              <p className="m-step-body">
                {/* TODO */}
                See every action your agents take. In real time.
              </p>
            </article>
            <article className="m-step">
              <div className="m-step-num">03</div>
              <h3 className="m-step-name">Scope</h3>
              <p className="m-step-body">
                {/* TODO */}
                Choose what each agent can touch. Nothing more.
              </p>
            </article>
            <article className="m-step">
              <div className="m-step-num">04</div>
              <h3 className="m-step-name">Revoke</h3>
              <p className="m-step-body">
                {/* TODO */}
                Cut access at machine speed.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
