import { HeaderStyles } from "./styles/headerStyles";
import Title from "./title";

const Header = () => {
  return (
    <HeaderStyles>
      <Title />
      <h3 id="my-blog">Blog</h3>
    </HeaderStyles>
  );
};

export default Header;
