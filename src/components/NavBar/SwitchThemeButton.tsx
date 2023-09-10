import { useThemeContext } from "../../context/theme/ThemeContext";
import { SwitchContainer } from "./styles";
import moonIcon from "../../assets/icon-moon.svg";
import sumIcon from "../../assets/icon-sun.svg";
import Switch from "react-switch";

const SwitchThemeButton = () => {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <SwitchContainer>
      <img src={moonIcon} alt="moon icon" />
      <Switch
        onChange={() => {
          toggleTheme();
        }}
        checked={currentTheme.title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        onColor="#6460c7"
        offColor="#2a2854"
      />
      <img src={sumIcon} alt="moon icon" />
    </SwitchContainer>
  );
};

export default SwitchThemeButton;
