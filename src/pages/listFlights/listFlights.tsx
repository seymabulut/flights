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
    setFlights(location.state.flights.sort(sortListPrice));
  }, [location.state.flights]);

  const findEcoFly = (subcategories: Subcategory[]) => {
    return subcategories.find(
      (subcategory: Subcategory) => subcategory.brandCode === "ecoFly"
    )?.price?.amount;
  };

  const sortListPrice = (a: Flight, b: Flight) => {
    const price_a = findEcoFly(a.fareCategories["ECONOMY"].subcategories);
    const price_b = findEcoFly(b.fareCategories["ECONOMY"].subcategories);
    if (price_a && price_b) {
      if (price_a < price_b) return -1;
      if (price_a > price_b) return 1;
      return 0;
    } else return 0;
  };

  const sortListTime = (a: Flight, b: Flight) => {
    const time_a = a.departureDateTimeDisplay;
    const time_b = b.departureDateTimeDisplay;
    if (time_a && time_b) {
      if (time_a < time_b) return -1;
      if (time_a > time_b) return 1;
      return 0;
    } else return 0;
  };

  const handleTimeSort = () => {
    let temp_flights = [...flights];
    const sorted_flights = temp_flights.sort(sortListTime);
    setFlights(sorted_flights);
  };

  const handlePriceSort = () => {
    let temp_flights = [...flights];
    const sorted_flights = temp_flights.sort(sortListPrice);
    setFlights(sorted_flights);
  };

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
          <div className="code_message">
            Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini
            %50 indirim ile satın alabilirsiniz!
          </div>
          <div className="code_message">
            Promosyon Kodu seçeneği aktifken Eco FLy paketi haricinde seçim
            yapılamamaktadır.
          </div>
        </div>
        <ListFlightTable
          flights={flights}
          code={code}
          timeSort={handleTimeSort}
          priceSort={handlePriceSort}
        />
      </div>
    </div>
  );
};

export default ListFlights;
