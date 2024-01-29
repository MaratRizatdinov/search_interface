import * as S from "./Pagination.style";

export const PaginationBlock = (props) => {
  const { itemsCount, changePage, itemsInPage, page } = props;
  const pagesCount = Math.ceil(itemsCount / itemsInPage);

  return (
    <S.PaginationContainer>
      <div>Найдено {itemsCount} записей</div>

      <S.PageInfo>
        <S.PageButton>
          {page === 1 ? null : (
            <S.PageButtonLeft onClick={() => changePage("prev")}>
              &lt;&lt;
            </S.PageButtonLeft>
          )}
        </S.PageButton>
        {pagesCount === 0 ? null : (
          <div>
            Cтраницa {page} из {pagesCount}
          </div>
        )}

        <S.PageButton>
          {page === pagesCount || pagesCount === 0 ? null : (
            <S.PageButtonRight onClick={() => changePage("next")}>
              &gt;&gt;
            </S.PageButtonRight>
          )}
        </S.PageButton>
      </S.PageInfo>
    </S.PaginationContainer>
  );
};


