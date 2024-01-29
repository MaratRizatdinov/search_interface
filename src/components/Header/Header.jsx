import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
import * as S from "./Header.style";
import logotype from "./logotype.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LogoField>
        <img alt="logo" src={logotype} onClick={() => navigate("/")} />
      </S.LogoField>
      <Search />
      <Button action={() => navigate("/")}>На главную</Button>
    </S.Header>
  );
};
