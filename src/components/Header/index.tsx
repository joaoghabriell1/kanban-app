import PrimaryButton from "../PrimaryButton";
import EditButton from "../EditButton";
import NavBar from "../NavBar/index";
import { HeaderTag } from "./styles";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderTag>
      <Logo />
      <NavBar />
      <PrimaryButton width="50px" text="+" disabled={true} />
      <EditButton />
    </HeaderTag>
  );
};

export default Header;
