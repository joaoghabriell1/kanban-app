import { HeaderTag } from "./styles";
import NavBar from "../NavBar/NavBar";
import Logo from "./Logo";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import PrimaryButton from "../PrimaryButton";
import EditButton from "../EditButton";

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
