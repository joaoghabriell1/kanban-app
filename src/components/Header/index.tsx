import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { useParams } from "react-router-dom";
import EditCard from "../EditComponentCard";
import EditButton from "../EditButton";
import NavBar from "../NavBar/index";
import { HeaderTag } from "./styles";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [showEditCard, setShowEditCard] = useState<boolean>(false);
  const { boardId } = useParams();
  const navigate = useNavigate();
  const addNewTaskHankder = () => {
    navigate(`/${boardId ? boardId : "-"}/addnewtask`);
  };

  const isHomePage = !boardId || boardId == "-";

  const handleEditCard = () => {
    setShowEditCard((prev) => !prev);
  };
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
          <EditButton onClick={handleEditCard} />
        </>
      )}
      {showEditCard && <EditCard top="7rem" right="1rem" />}
    </HeaderTag>
  );
};

export default Header;
