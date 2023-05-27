import { FC } from "react";
import "./radioGroup.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ChangeEvent } from "react";

interface RadioGroupProps {
  options: Record<string, string>[];
  value: string;
  setValue: (value: string) => void;
}

const RadioSelect: FC<RadioGroupProps> = ({ options, value, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="cabin-select">
      <FormControl>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          defaultValue={value}
          name="radio-buttons-group"
          onChange={handleChange}
          row
        >
          {options.map((option: Record<string, string>) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
              className="cabin-select"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioSelect;
