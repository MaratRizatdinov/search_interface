import { ContentBlock } from "../ContentBlock/ContentBlock";
import { useSelector } from "react-redux";
import * as S from '../ContentBlock/ContenBlock.style'

export const MainPage = () => {
  const searchObj = useSelector((state) => state.search.searchParams);
  return (
    <>
      {searchObj.q === "" ? (
        <S.CardsContainer>
          <S.Title>Привет! Кого будем искать?</S.Title>
        </S.CardsContainer>
      ) : (
        <ContentBlock />
      )}
    </>
  );
};
