import { Dispatch, FC } from "react";

type Props = {
  value: number;
  setValue: Dispatch<React.SetStateAction<number>>;
};

const Buttons: FC<Props> = ({ value, setValue }) => {
  const handleClick = (num: number) => {
    console.log(value + num);
    setValue(value + num);
  };
  return (
    <div className="buttons">
      <button onClick={() => handleClick(-1)}>Prev</button>
      <button onClick={() => handleClick(1)}>Next</button>
    </div>
  );
};

export default Buttons;
