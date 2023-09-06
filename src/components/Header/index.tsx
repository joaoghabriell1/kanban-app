import PrimaryButton from "../PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import EditButton from "../EditButton";
import NavBar from "../NavBar/index";
import { HeaderTag } from "./styles";
import Logo from "./Logo";
const Header = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const addNewTaskHankder = () => {
    navigate(`/${boardId ? boardId : "-"}/addnewtask`);
  };

  const isHomePage = !boardId || boardId == "-";
  return (
    <HeaderTag>
      <Logo />
      <NavBar />
      {!isHomePage && (
        <>
          <PrimaryButton
            onClick={addNewTaskHankder}
            width="50px"
            text="Add new Task"
            mobileText="+"
            disabled={true}
          />
          <EditButton />
        </>
      )}
    </HeaderTag>
  );
};

export default Header;
