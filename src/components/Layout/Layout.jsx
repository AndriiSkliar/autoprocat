import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Wrapper } from './Layout.Styled';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header/>
      <>{children}</>
      <Footer />
    </Wrapper>
  );
};

export default Layout;