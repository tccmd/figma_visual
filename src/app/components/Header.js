export default function Header() {

  const links = ['About', 'Work', 'Contact'];
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">Logo</div>
        <ul className="nav__links">
          { 
            links.map((link, index) => (
              <li key={index} className="nav__link">{link}</li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}