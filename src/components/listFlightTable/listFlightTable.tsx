import { FC } from "react";
import "./listFlightTable.scss";
import { Flight } from "../../interface/flight";
import FlightRow from "../flightRow/flightRow";

interface FlightListProps {
  flights: Flight[];
  code: boolean;
}

const ListFlightTable: FC<FlightListProps> = ({ flights, code }) => {
  return (
    <div>
      <div className="sort">
        <span className="sort__text">Sıralama Kriteri</span>
        <button className="sort__button">Ekonomi Ücreti</button>
        <button className="sort__button">Kalkış Saati</button>
      </div>
      <div className="flight-table">
        {flights.map((flight: Flight, index: number) => (
          <FlightRow key={index} flight={flight} code={code} />
        ))}
      </div>
    </div>
  );
};

export default ListFlightTable;
