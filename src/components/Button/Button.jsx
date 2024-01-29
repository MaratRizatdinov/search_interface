import * as S from './Button.style'

export const Button = (props) => {
  const {action,disabled} =props
  return( 
  <S.Button onClick={action} disabled={disabled}>{props.children}</S.Button>
    );
};
