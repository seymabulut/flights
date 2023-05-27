import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routing";
import "./flightRow.scss";
import { Flight, Subcategory } from "../../interface/flight";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FareCard from "../fareCard/fareCard";

interface FlightRowProps {
  flight: Flight;
}

const FlightRow: FC<FlightRowProps> = ({ flight }) => {
  const navigate = useNavigate();
  const [fare, setFare] = useState<string>("");

  const getDisplayPrice = (subcategories: Subcategory[]) => {
    const display_price = subcategories.find(
      (subcategory: Subcategory) => subcategory.brandCode === "ecoFly"
    )?.price;
    return `${display_price?.currency} ${display_price?.amount}`;
  };

  const handleFareChange = (event: any) => {
    setFare(event.target.value);
  };

  const handleSelect = (status: string, price: string) => {
    localStorage.setItem("status", status);
    localStorage.setItem("price", price);
    navigate(routes.result);
  };

  return (
    <div className="flight-select">
      <div className="flight-row">
        <div className="airport">
          <div className="airport__flight_times">
            <div className="airport__info">
              <div>{flight.departureDateTimeDisplay}</div>
              <div>{flight.originAirport.code}</div>
              <div>{flight.originAirport.city.name}</div>
            </div>
            <div className="line"></div>
            <div className="airport__info">
              <div>{flight.arrivalDateTimeDisplay}</div>
              <div>{flight.destinationAirport.code}</div>
              <div>{flight.destinationAirport.city.name}</div>
            </div>
          </div>
          <div className="flight-duration">
            <div>Uçuş Süresi</div>
            <div>{flight.flightDuration}</div>
          </div>
        </div>
        {Object.keys(flight.fareCategories).map(
          (key: string, index: number) => (
            <div className="flight-row__fare" key={index}>
              <FormControlLabel
                value={key}
                control={<Radio />}
                label={key}
                className="fare-radio"
                checked={fare === key}
                onClick={handleFareChange}
              />
              <div className="fare-price">
                <span className="fare-price__text">Yolcu Başına</span>
                <span className="fare-price__price">
                  {getDisplayPrice(flight.fareCategories[key].subcategories)}
                </span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="fare-category">
        {fare &&
          flight.fareCategories[fare].subcategories.map((item: Subcategory) => (
            <FareCard subcategory={item} select={handleSelect} />
          ))}
      </div>
    </div>
  );
};

export default FlightRow;
