import { ReactNode, createContext, useContext, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { RefObject } from "react";

interface Props {
  children: ReactNode;
}

interface UIContextTypes {
  showDesktopNavBar: boolean;
  toggleDesktopNavBar: () => void;
  openEditCard: () => void;
  showEditComponentCard: boolean;
  ref: RefObject<HTMLDivElement> | null;
  showCurrentTaskModal: null | string;
  toggleCurrentTaskModal: (action: null | string) => void;
}

const UIContext = createContext<UIContextTypes>({
  showDesktopNavBar: true,
  toggleDesktopNavBar: () => {},
  openEditCard: () => {},
  showEditComponentCard: false,
  showCurrentTaskModal: null,
  toggleCurrentTaskModal: () => {},
  ref: null,
});

export const UIContextProvider = ({ children }: Props) => {
  const [showCurrentTaskModal, setShowCurrentTaskModal] = useState<
    null | string
  >(null);
  const [showDesktopNavBar, setShowDesktopNav] = useState<boolean>(true);
  const [showEditComponentCard, setShowEditComponentCard] =
    useState<boolean>(false);

  const handleClickOutside = () => {
    setShowEditComponentCard(false);
  };

  const ref = useOutsideClick({ callback: handleClickOutside });

  const toggleCurrentTaskModal = (action: null | string) => {
    console.log(action);
    setShowCurrentTaskModal(action);
  };

  const toggleDesktopNavBar = () => {
    setShowDesktopNav((prev) => {
      return !prev;
    });
  };

  const openEditCard = () => {
    setShowEditComponentCard(true);
  };

  const value = {
    toggleDesktopNavBar,
    showDesktopNavBar,
    openEditCard,
    showEditComponentCard,
    showCurrentTaskModal,
    toggleCurrentTaskModal,
    ref,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  return useContext(UIContext);
};
