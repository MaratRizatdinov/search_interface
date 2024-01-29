import { useDispatch } from "react-redux";
import * as S from "./Card.style";
import { selectUser } from "../../redux/reducers/searchSlice";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const dispatch=useDispatch()
  const navigate =useNavigate()

  const { data } = props;  
  
  const handleClick =()=>{
    dispatch(selectUser(data.login))
    navigate('/profile')
  }
  return (
    <S.Card onClick={handleClick}>
      <S.CardAvatar> <S.CardImg src={data.avatar_url} alt={data.login} /></S.CardAvatar>
      <S.CardTitle>{data.login}</S.CardTitle>
    </S.Card>
  );
};
