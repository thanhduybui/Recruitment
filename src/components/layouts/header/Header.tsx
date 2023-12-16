import { HeaderUserNav, HeaderWrapper } from "@components/layouts/header";

import { LogoButton } from "@components/ui/button";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoButton />
      <HeaderUserNav />
    </HeaderWrapper>
  );
};
export default Header;
