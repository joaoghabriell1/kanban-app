import { useMediaQuery } from "../../hooks/useMediaQuery";
import PrimaryButton from "../PrimaryButton";
import EditButton from "../EditButton";
import NavBar from "../NavBar/index";
import { HeaderTag } from "./styles";
import Logo from "./Logo";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <HeaderTag>
      <Logo />
      <NavBar />
      <PrimaryButton text="+" disabled={true} />
      <EditButton />
    </HeaderTag>
  );
};

export default Header;
