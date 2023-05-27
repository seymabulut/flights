import { FC, ChangeEvent } from "react";
import "./switch.scss";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

interface SwicthButtonProps {
  setValue: (value: boolean) => void;
}

const SwitchButton: FC<SwicthButtonProps> = ({ setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  return (
    <div className="swicth-button">
      <FormControlLabel
        control={<Switch onChange={handleChange} />}
        label="Promosyon Kodu"
        labelPlacement="start"
      />
    </div>
  );
};

export default SwitchButton;
