import { Header } from "./styles";

interface Props {
  totalBoards: number;
}

const NavbarHeader = ({ totalBoards }: Props) => {
  return (
    <Header>
      <h4>all boards({totalBoards})</h4>
    </Header>
  );
};

export default NavbarHeader;
