import * as S from "./Radio.style";
export const Radio = (props) => {
  const { checked, setChecked } = props;

  return (
    <>
      <S.RadioField>   
        <S.RadioTitle>Сортировать по:</S.RadioTitle>
        <div>
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={"desc" === checked ? true : false}
            onChange={setChecked}
          />
          <label htmlFor="desc">убыванию</label>
        </div>

        <div>
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={"asc" === checked ? true : false}
            onChange={setChecked}
          />
          <label htmlFor="asc">возрастанию</label>
        </div>
      </S.RadioField>
    </>
  );
};
