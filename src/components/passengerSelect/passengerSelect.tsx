import { FC, useState } from "react";
import "./passengerSelect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Counter from "../counter/counter";
import RadioSelect from "../radioGroup/radioGroup";

interface PassengerSelectProps {
  setCount: (value: number) => void;
}

const PassengerSelect: FC<PassengerSelectProps> = ({ setCount }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cabin, setCabin] = useState<string>("economy");
  const [passengerCount, setPassengerCount] = useState<number>(1);

  const fontStyle = {
    width: "20px",
    height: "20px",
    color: "white",
  };

  const cabinSelectOptions = [
    { value: "economy", label: "Economy Class" },
    { value: "business", label: "Business Class" },
  ];

  const handlePassengerCount = (value: number) => {
    setPassengerCount(value);
    setCount(value);
  };

  return (
    <div className="passenger-select">
      <button
        className="passenger-select__button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {passengerCount > 1 ? (
          <FontAwesomeIcon icon={faPeopleGroup} style={fontStyle} />
        ) : (
          <FontAwesomeIcon icon={faPerson} style={fontStyle} />
        )}
        <span className="passenger-select__count">{passengerCount}</span>
      </button>
      {isVisible && (
        <div className="select-menu">
          <div>
            <span className="select-menu__header">Kabin ve yolcu seçimi</span>
            <RadioSelect
              options={cabinSelectOptions}
              value={cabin}
              setValue={(value: string) => setCabin(value)}
            />
          </div>
          <div className="select-menu__counter">
            <span className="select-menu__header">Yolcu</span>
            <Counter count={passengerCount} setCount={handlePassengerCount} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelect;
