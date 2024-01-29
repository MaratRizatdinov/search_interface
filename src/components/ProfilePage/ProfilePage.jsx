import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../redux/reducers/usersApi";
import * as S from "./ProfilePage.style";
import { prepareDate } from "./Helpers/prepareDate";
import { Repositories } from "../Repositories/Repositories";
import loader from "./Воронка.gif";

export const ProfilePage = () => {
  const login = useSelector(
    (state) => state.search.searchParams.selectedUserUrl
  );

  const { data: user, isLoading: userLoading } = useGetUserQuery(login);

  if (userLoading)
    return (
      <S.ProfileLoading>
        {" "}
        <img src={loader} alt="Секундочку. Загружаю..." />
      </S.ProfileLoading>
    );

  return (
    <S.ProfileContainer>
      <S.ProfileContent>
        <S.ProfileSettings>
          <S.ProfileLeft>
            <S.ProfileImgContainer>
              <S.ProfileImg src={user.avatar_url} alt="user" />
            </S.ProfileImgContainer>
            <S.UserName>Логин: {user.login}</S.UserName>
          </S.ProfileLeft>
          <S.ProfileRight>
            {/* <S.UserName>Логин: {user.login}</S.UserName> */}
            <S.UserInfo>Имя: {user.name || "Не указан"}</S.UserInfo>
            <S.UserInfo>Блог: {user.blog || "Не указан"}</S.UserInfo>
            <S.UserInfo>
              Местоположение: {user.location || "Не указан"}
            </S.UserInfo>
            <S.UserInfo>Компания: {user.company || "Не указан"}</S.UserInfo>
            <S.UserInfo>Почта: {user.email || "Не указан"}</S.UserInfo>
            <S.UserInfo>Подписавшихся: {user.followers || "Нет"}</S.UserInfo>
            <S.UserInfo>Подписан(а) на: {user.following || "Нет"}</S.UserInfo>
            <S.UserInfo>
              Дата регистрации: {prepareDate(user.created_at) || "Нет"}
            </S.UserInfo>
          </S.ProfileRight>
        </S.ProfileSettings>
      </S.ProfileContent>
      <S.ProfileTitle>
        Открытые репозитории : {user.public_repos}
      </S.ProfileTitle>
      <Repositories login={login} count={user.public_repos} />
    </S.ProfileContainer>
  );
};
