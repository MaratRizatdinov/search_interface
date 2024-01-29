import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import * as S from "./Search.style";
import { useInput } from "../../hooks/useInput";
import { Radio } from "../Radio/Radio";
import { changeParams } from "../../redux/reducers/searchSlice";
import { safeInput } from "./Helpers/safeInput";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const searchObj = useSelector((state) => state.search.searchParams);
  const localObj = structuredClone(searchObj);
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useInput("desc");

  useEffect(() => {
    value.trim() === "" ? setDisabled(true) : setDisabled(false);
  }, [value]);

  const handleClickToSearch = () => {
    localObj.q = safeInput(value);
    localObj.order = checked;
    localObj.page = 1;
    dispatch(changeParams(localObj));
    navigate("/");
  };
  const handleClickToClear = () => {
    setValue("");
    localObj.q = "";
    localObj.order = checked;
    localObj.page = 1;
    dispatch(changeParams(localObj));
    navigate("/");
  };

  return (
    <S.Search>
      <S.InputsField>
        <Input
          placeholder="Введите имя для поиска"
          type="text"
          value={value}
          setValue={setValue}
        />
        <Radio checked={checked} setChecked={setChecked} />
      </S.InputsField>
      <Button action={handleClickToSearch} disabled={disabled}>
        Поиск
      </Button>
      <Button action={handleClickToClear} disabled={disabled}>
        Очистить
      </Button>
    </S.Search>
  );
};
