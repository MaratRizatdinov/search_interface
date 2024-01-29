import { useGetReposQuery } from "../../redux/reducers/usersApi";
import { useState } from "react";
import { PaginationBlock } from "../PaginationBlock/Pagination";
import * as S from "./repositories.style";
import loader from "./Воронка.gif";
import { createContent } from "./createContent";

export const Repositories = ({ login, count }) => {
  const [page, setPage] = useState(1);

  const repoParams = {
    page: page,
    per_page: 5,
    sort: "created",
    direction: "desc",
  };
  const changePage = (condition) => {
    condition === "next"
      ? setPage((prev) => prev + 1)
      : setPage((prev) => prev - 1);
  };

  const params = new URLSearchParams(repoParams).toString();

  const { data: repos, isLoading: repoLoading } = useGetReposQuery({
    login,
    params,
  });

  if (repoLoading)
    return (
      <S.RepoLoading>
        <img src={loader} alt="Секундочку. Загружаю..." />
      </S.RepoLoading>
    );
  
  return (
    <>
      <S.ReposTable>
        <S.ReposTableHead>Name</S.ReposTableHead>
        <S.ReposTableHead>Description</S.ReposTableHead>
        <S.ReposTableHead>Link</S.ReposTableHead>
        {createContent(repos)}
      </S.ReposTable>
      <PaginationBlock
        itemsCount={count}
        itemsInPage={repoParams.per_page}
        changePage={changePage}
        page={page}
      />
    </>
  );
};
