import { ChangeEventHandler, Dispatch, FC, useState } from "react";
import style from "./style.module.css";

type Props = {
  setFilterValue: Dispatch<React.SetStateAction<string>>
}

const Search: FC<Props> = ({setFilterValue}) => {
  const [valueInput, setValueInput] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValueInput(event.target.value);
  };

  const handleClick = () => {
    setFilterValue(valueInput)
  };
  return (
    <div className={style.container}>
      <input
        value={valueInput}
        type="text"
        onChange={(event) => handleChange(event)}
      />
      <button onClick={handleClick}>Найти</button>
    </div>
  );
};

export default Search;
