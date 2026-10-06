import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NAV_LINKS, PROFILE } from "../data/profile";

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  background: ${({ $scrolled }) => ($scrolled ? "rgba(11, 12, 15, 0.88)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.COLORS.BORDER : "transparent")};
  transition: background-color 0.25s ease, border-color 0.25s ease;

  .bar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
  }

  .brand {
    font-family: ${({ theme }) => theme.FONTS.HEADING};
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .brand span { color: ${({ theme }) => theme.COLORS.ACCENT}; }

  .toggle {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    background: none;
    border: 0;
    font-size: 1.5rem;
  }

  nav {
    display: none;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    padding: 0.5rem 1.25rem 1.25rem;
    background: ${({ theme }) => theme.COLORS.BG};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

    &.open { display: block; }

    a {
      display: block;
      padding: 0.85rem 0;
      color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    }

    a:hover { color: ${({ theme }) => theme.COLORS.TEXT}; }
  }

  @media (min-width: 900px) {
    .toggle { display: none; }

    nav {
      display: flex;
      position: static;
      padding: 0;
      gap: 1.75rem;
      background: none;
      border: 0;

      a { padding: 0; border: 0; font-size: 0.92rem; }
    }
  }
`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled || open}>
      <div className="container bar-content">
        <a href="#inicio" className="brand" aria-label={`${PROFILE.name} - início`}>
          Felipe<span>.</span>dev
        </a>

        <button
          className="toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <nav id="menu" aria-label="Principal" className={open ? "open" : ""}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </Bar>
  );
}
