import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (page) =>
    `text-[11px] tracking-[0.12em] uppercase font-semibold transition-colors duration-300 ${
      activePage === page
        ? "text-[#0A051A] bg-[#4B17E5]/10 rounded-full px-[14px] py-[6px]"
        : "text-[#0A051A]/55 hover:text-[#0A051A] px-[14px] py-[6px]"
    }`;

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      <div
        className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full px-5 h-[56px]"
        style={{
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(217,204,255,0.5)",
          boxShadow: "0 2px 12px rgba(50,15,153,0.06)",
        }}
      >
        {/* Logo lockup — planetoid + MOI wordmark side-by-side */}
        <Link to="/" className="flex items-center gap-3 no-underline shrink-0">
          <img
            src="/brand/logos/SVG/default-dark.svg"
            alt="MOI"
            className="h-7 w-auto"
          />
        </Link>

        {/* Center links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className={linkClass("home")}>Participants</Link>
          <Link to="/why-moi" className={linkClass("why-moi")}>Validators</Link>
          <a
            href="https://docs.moi.technology"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass("docs")}
          >
            Docs
          </a>
          <Link to="/manifesto" className={linkClass("manifesto")}>Manifesto</Link>
        </div>

        {/* Right CTA — desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            to="/manifesto"
            className="text-[11px] tracking-[0.04em] font-semibold text-[#0A051A] bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] rounded-full px-5 py-2 transition-all duration-300"
            style={{ boxShadow: "inset 0 1.45px 33px rgba(255,255,255,0.25)" }}
          >
            Become a participant
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[1.5px] bg-[#0A051A] transition-transform duration-300"
            style={menuOpen ? { transform: "rotate(45deg) translate(2px, 2px)" } : {}}
          />
          <span
            className="block w-5 h-[1.5px] bg-[#0A051A] transition-opacity duration-300"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-5 h-[1.5px] bg-[#0A051A] transition-transform duration-300"
            style={menuOpen ? { transform: "rotate(-45deg) translate(2px, -2px)" } : {}}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-auto max-w-[1200px] rounded-2xl p-6 flex flex-col gap-4"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(217,204,255,0.5)",
            boxShadow: "0 4px 24px rgba(50,15,153,0.08)",
          }}
        >
          <Link to="/" className={linkClass("home")} onClick={() => setMenuOpen(false)}>Participants</Link>
          <Link to="/why-moi" className={linkClass("why-moi")} onClick={() => setMenuOpen(false)}>Validators</Link>
          <a href="https://docs.moi.technology" target="_blank" rel="noopener noreferrer" className={linkClass("docs")}>Docs</a>
          <Link to="/manifesto" className={linkClass("manifesto")} onClick={() => setMenuOpen(false)}>Manifesto</Link>
          <hr className="border-[#0A051A]/8" />
          <Link
            to="/manifesto"
            className="text-[11px] font-semibold text-[#0A051A] bg-white rounded-full px-5 py-2.5 text-center"
            style={{ boxShadow: "inset 0 1.45px 33px rgba(255,255,255,0.25)" }}
            onClick={() => setMenuOpen(false)}
          >
            Become a participant
          </Link>
        </div>
      )}
    </nav>
  );
}
