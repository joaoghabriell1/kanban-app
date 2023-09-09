import { actions } from "../../consts/actions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HeaderTag } from "./styles";
import { useState } from "react";

import useOutsideClick from "../../hooks/useOutsideClick";
import PrimaryButton from "../PrimaryButton";
import EditCard from "../EditComponentCard";
import EditButton from "../EditButton";
import NavBar from "../NavBar/index";
import Logo from "./Logo";

const Header = () => {
  const [showEditCard, setShowEditCard] = useState<boolean>(false);
  const { boardId } = useParams();
  const navigate = useNavigate();
  const ref = useOutsideClick({ callback: handleOutsideClick });

  const addNewTaskHankder = () => {
    navigate(`/${boardId ? boardId : "-"}/${actions.ADD_NEW_TASK}`);
  };

  const isHomePage = !boardId || boardId == "-";

  const toggleEditCard = () => {
    setShowEditCard((prev) => !prev);
  };

  function handleOutsideClick() {
    setShowEditCard(false);
  }

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
          <EditButton onClick={toggleEditCard} />
        </>
      )}
      {showEditCard && (
        <div ref={ref}>
          <EditCard top="7rem" right="1rem" />
        </div>
      )}
    </HeaderTag>
  );
};

export default Header;
