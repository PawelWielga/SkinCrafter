import './nbar.css';

function NBar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        {/* <a href="#" className="nav-link">Help</a>
        <a href="#" className="nav-coffee-btn">Buy me a coffee</a> */}
      </div>
    </div>
  );
}

export default NBar;
