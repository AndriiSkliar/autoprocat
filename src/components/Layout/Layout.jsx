import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {StyledWrapperDiv } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <StyledWrapperDiv>
      <Header/>
      <>{children}</>
      <Footer />
    </StyledWrapperDiv>
  );
};

export default Layout;