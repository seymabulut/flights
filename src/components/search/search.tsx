import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./search.scss";

import Input from "../input/input";
import PassengerSelect from "../passengerSelect/passengerSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Flight } from "../../interface/flight";
import flights from "./flights.json";
import { routes } from "../../routing";

const Search: FC = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [flightList, setFlightList] = useState<Flight[]>([]);

  useEffect(() => {
    setFlightList(flights.flights);
  }, [flights]);

  const search = () => {
    const searchFlights = flightList.filter(
      (fligth: Flight) =>
        fligth.originAirport.city.name === from &&
        fligth.destinationAirport.city.name === to
    );

    if (searchFlights.length > 0) {
      localStorage.setItem("from", from);
      localStorage.setItem("to", to);
      localStorage.setItem("count", String(passengerCount));
      navigate(routes.listFlights, { state: { flights: searchFlights } });
    }
  };

  return (
    <div className="search">
      <div className="search__container">
        <Input
          placeholder="Nereden"
          setValue={(value: string) => setFrom(value)}
        />
        <Input
          placeholder="Nereye"
          setValue={(value: string) => setTo(value)}
        />
        <div className="search__date">
          <span style={{ marginRight: "10px" }}>Tarih</span>
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <PassengerSelect
          setCount={(value: number) => setPassengerCount(value)}
        />
        <button className="button" onClick={search}>
          <span className="button__arrow right"></span>
        </button>
      </div>
    </div>
  );
};

export default Search;
