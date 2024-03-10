import { ReactComponent as IconCat } from 'assets/icons/cat.svg'

import { LogoAccent, LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink to="/">
        auto<LogoAccent>PRO</LogoAccent><IconCat/>
    </LogoLink>
  );
};

export default Logo;