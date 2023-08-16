import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface UIContextTypes {
  showDesktopNavBar: boolean;
  addNewBoard: boolean;
  toggleDesktopNavBar: () => void;
  toggleNewBoardModal: () => void;
  hadleCloseNewBoardModal: () => void;
}

const UIContext = createContext<UIContextTypes>({
  showDesktopNavBar: true,
  addNewBoard: false,
  toggleDesktopNavBar: () => {},
  toggleNewBoardModal: () => {},
  hadleCloseNewBoardModal: () => {},
});

export const UIContextProvider = ({ children }: Props) => {
  const [showDesktopNavBar, setShowDesktopNav] = useState<boolean>(true);
  const [addNewBoard, setAddNewBoard] = useState(false);

  const toggleDesktopNavBar = () => {
    setShowDesktopNav((prev) => {
      return !prev;
    });
  };

  const hadleCloseNewBoardModal = () => {
    setAddNewBoard(false);
  };

  const toggleNewBoardModal = () => {
    setAddNewBoard((prev) => !prev);
  };

  const value = {
    toggleDesktopNavBar,
    showDesktopNavBar,
    addNewBoard,
    toggleNewBoardModal,
    hadleCloseNewBoardModal,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  return useContext(UIContext);
};
