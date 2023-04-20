import React, { useState } from "react"
import Link from "next/link"

const HeaderInner: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (  
      <div className="header-inner">
        <Link className="logo" href="/">
          Next Base
        </Link>
        <nav className="nav">
          <div className="pcNav">
            <Link href="/#a01">
              About
            </Link>
            <Link href="/#a02">
              Skills
            </Link>
            <Link href="/#a03">
              Blog
            </Link>
            <Link href="/#a04">
              Contact
            </Link>
          </div>
          <button className="mobileNavIcon" onClick={handleToggleMenu}>
            <i className="material-icons">
              {menuOpen ? "close" : "menu"}
            </i>
          </button>
          <div className={`offCanvasMenu ${menuOpen ? "open" : ""}`}>
            <div className="mobileNav">
              <Link href="/#a01" onClick={handleToggleMenu}>
                About
              </Link>
              <Link href="/#a02" onClick={handleToggleMenu}>
                Skills
              </Link>
              <Link href="/#a03" onClick={handleToggleMenu}>
                Blog
              </Link>
              <Link href="/#a04" onClick={handleToggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default HeaderInner;