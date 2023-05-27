import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./listFlights.scss";
import ListFlightTable from "../../components/listFlightTable/listFlightTable";
import SwitchButton from "../../components/switch/switch";
import { Flight, Subcategory } from "../../interface/flight";

const ListFlights: FC = () => {
  const location = useLocation();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [code, setCode] = useState<boolean>(false);
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    setFrom(
      localStorage.getItem("from")
        ? (localStorage.getItem("from") as string)
        : ""
    );
    setTo(
      localStorage.getItem("to") ? (localStorage.getItem("to") as string) : ""
    );
    setCount(
      localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 1
    );
    setFlights(location.state.flights);
  }, [location.state.flights]);

  return (
    <div className="list-flight">
      <div className="list-flight__table">
        <span className="list-flight__header">Uçuş</span>
        <div className="flight-info">
          <span>
            {from} - {to},{" "}
          </span>
          <span>{count} Yolcu</span>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <SwitchButton setValue={(value: boolean) => setCode(value)} />
        </div>
        <ListFlightTable flights={flights} />
      </div>
    </div>
  );
};

export default ListFlights;
