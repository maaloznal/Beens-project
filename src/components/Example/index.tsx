import { FC, useRef } from "react";

const Example: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Example;
