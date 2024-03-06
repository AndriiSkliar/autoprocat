import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;