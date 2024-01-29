import { useSelector, useDispatch } from "react-redux";
import { useGetUsersQuery } from "../../redux/reducers/usersApi";
import * as S from "./ContenBlock.style";
import { Card } from "../Card/Card";
import { PaginationBlock } from "../PaginationBlock/Pagination";
import loader from "./Воронка.gif";
import { changeParams } from "../../redux/reducers/searchSlice";

export const ContentBlock = () => {
  const dispatch = useDispatch();
  const searchObj = useSelector((state) => state.search.searchParams);
  const params = new URLSearchParams(searchObj).toString();
  const { data: users, isLoading, isError} = useGetUsersQuery(params);
  const localObj = structuredClone(searchObj);

  const changePage = (condition) => {
    condition === "next" ? ++localObj.page : --localObj.page;
    dispatch(changeParams(localObj));
  };

  if (isError) {
    return (
      <S.ContentBlock mode="load">
        <S.Title>Уупс... что то пошло не так . Попробуйте снова через пару минут</S.Title>
      </S.ContentBlock>
    );
  }

  if (isLoading) {
    return (
      <S.ContentBlock mode="load">
        <S.Title>
          {" "}
          <img src={loader} alt="Секундочку. Загружаю..." />{" "}
        </S.Title>
      </S.ContentBlock>
    );
  }
  if (users.total_count === 0) {
    return (
      <S.CardsContainer>
        <S.Title>
          К сожалению пользователей с именем <S.Span>{searchObj.q}</S.Span> не
          найдено
        </S.Title>
      </S.CardsContainer>
    );
  }

  return (
    <S.ContentBlock>
      <S.Title>Список пользователей с именем: {searchObj.q}</S.Title>
      <S.CardsContainer itemsCount={users.total_count}>
        {users.items.map((elem) => (
          <Card key={elem.id} data={elem} />
        ))}
      </S.CardsContainer>
      <PaginationBlock
        itemsCount={users.total_count}
        changePage={changePage}
        itemsInPage={searchObj.per_page}
        page={localObj.page}
      />
    </S.ContentBlock>
  );
};
