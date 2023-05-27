import { FC, useState } from "react";
import "./counter.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CounterProps {
  count: number;
  setCount: (value: number) => void;
}

const Counter: FC<CounterProps> = ({ count, setCount }) => {
  const buttonStyle = {
    width: "20px",
    backgroundColor: "#cfd0d1",
    color: "grey",
    borderColor: "#cfd0d1",
    borderRadius: "5px",
  };

  return (
    <div>
      <ButtonGroup>
        <Button
          aria-label="reduce"
          style={buttonStyle}
          onClick={() => {
            setCount(Math.max(count - 1, 1));
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <span className="count">{count}</span>
        <Button
          aria-label="increase"
          style={buttonStyle}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
