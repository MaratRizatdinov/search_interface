import * as S from "./input.style";

export const Input = (props) => {
  const { placeholder = "", value, setValue, type = "text" } = props;

  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(event)=>setValue(event.target.value)}
    />
  );
};
