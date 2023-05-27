import { FC } from "react";
import "./input.scss";
import { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  setValue: (value: string) => void;
}

const Input: FC<Props> = ({ placeholder, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        className="search-input"
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue=""
      />
    </div>
  );
};

export default Input;
