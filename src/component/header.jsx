import react from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="text">My First React Class</h1>
      <div>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
