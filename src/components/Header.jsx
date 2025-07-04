import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link 
          to="/" 
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">API</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/info" className="nav-link active" aria-current="page">
              Información
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              oño
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contáctanos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-link">
              Profe Piedad
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
