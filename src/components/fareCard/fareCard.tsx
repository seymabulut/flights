import { FC } from "react";
import "./fareCard.scss";
import { Subcategory } from "../../interface/flight";

interface FareCardProps {
  subcategory: Subcategory;
  select: (value: string, price: string) => void;
}

const FareCard: FC<FareCardProps> = ({ subcategory, select }) => {
  return (
    <div className="fare-selector">
      <div className="fare-selector__header">
        <div>{subcategory.brandCode}</div>
        <div>
          {subcategory.price.currency} {subcategory.price.amount}
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
        >
          Uçuşu seç
        </button>
      </div>
    </div>
  );
};

export default FareCard;
