// components/Header.jsx

export default function Header() {
  return (
    <>
      <div className="navigation d-flex">

        <div className="logo">
        <a className="sk__mobile-main-logo" href="#">
          <img src="/assets/images/logo.png" alt="Logo" />
        </a>

        </div>
       
        <nav>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact-us">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
