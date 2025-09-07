import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src="./color-query-logo.webp"
        alt="ColorCompass logo: a minimalist compass with a color wheel"
        width="60"
        height="67"
      />
      <h1 className="header__title">ColorQuery</h1>
    </header>
  );
};

export default Header;
