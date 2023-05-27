import { FC } from "react";
import "./fareCard.scss";
import { Subcategory } from "../../interface/flight";

interface FareCardProps {
  subcategory: Subcategory;
  fare: string;
  code: boolean;
  select: (value: string, price: string) => void;
}

const FareCard: FC<FareCardProps> = ({ subcategory, fare, code, select }) => {
  const discount = (price: number) => {
    return price / 2;
  };

  return (
    <div className="fare-selector">
      <div className="fare-selector__header">
        <div>{subcategory.brandCode}</div>
        <div>
          {subcategory.price.currency}
          {code && fare === "ECONOMY" && subcategory.brandCode === "ecoFly"
            ? discount(subcategory.price.amount)
            : subcategory.price.amount}
        </div>
      </div>
      <div className="fare-selector__content">
        <ul>
          {subcategory.rights.map((right: string, index: number) => (
            <li className="right" key={index}>
              {right}
            </li>
          ))}
        </ul>
      </div>
      <div className="fare-selector__footer">
        <button
          className="button"
          onClick={() =>
            select(
              subcategory.status,
              `${subcategory.price.currency} ${subcategory.price.amount}`
            )
          }
          disabled={
            (code &&
              fare === "ECONOMY" &&
              subcategory.brandCode !== "ecoFly") ||
            (code && fare === "BUSINESS")
          }
        >
          Uçuşu seç
        </button>
      </div>
    </div>
  );
};

export default FareCard;
