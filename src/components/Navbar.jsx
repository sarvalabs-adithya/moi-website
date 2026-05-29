import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (page) =>
    `text-[12px] tracking-[0.04em] font-semibold transition-colors duration-300 rounded-full px-[14px] py-[6px] ${
      activePage === page
        ? "text-[#4B17E5] bg-[#4B17E5]/10"
        : "text-[#0A051A]/75 hover:text-[#4B17E5]"
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
        {/* Logo — MOI planetoid mark */}
        <Link
          to="/"
          aria-label="MOI — home"
          className="nav-logo flex items-center no-underline shrink-0"
        >
          <img
            src="/brand/logos/SVG/default-light.svg"
            alt="MOI"
            className="w-auto"
            style={{ height: "36px" }}
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
            className="nav-cta text-[12px] tracking-[-0.005em] font-semibold text-white bg-[#4B17E5] hover:bg-[#320F99] rounded-full px-5 py-[9px] transition-colors duration-200"
            style={{ boxShadow: "0 4px 14px rgba(75, 23, 229, 0.28)" }}
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
            className="nav-cta text-[12px] font-semibold text-white bg-[#4B17E5] hover:bg-[#320F99] rounded-full px-5 py-2.5 text-center transition-colors duration-200"
            style={{ boxShadow: "0 4px 14px rgba(75, 23, 229, 0.28)" }}
            onClick={() => setMenuOpen(false)}
          >
            Become a participant
          </Link>
        </div>
      )}
    </nav>
  );
}
