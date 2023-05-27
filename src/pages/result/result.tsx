import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./result.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Result: FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const message: Record<string, string> = {
    AVAILABLE: "Kabin seçiminiz tamamlandı.",
    ERROR: "Kabin seçiminiz tamamlanamadı.",
  };

  useEffect(() => {
    setStatus(
      localStorage.getItem("status")
        ? (localStorage.getItem("status") as string)
        : ""
    );

    setPrice(
      localStorage.getItem("price")
        ? (localStorage.getItem("price") as string)
        : ""
    );
  }, []);

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="result-page">
      <div className="result-message">
        {status === "AVAILABLE" ? (
          <div>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#31af3a", marginRight: "20px" }}
            />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#f00000", marginRight: "20px" }}
            />
          </div>
        )}
        <div className="result-message__message">{message[status]}</div>
      </div>
      <div className="line"></div>
      {status === "AVAILABLE" ? (
        <div className="price-box">
          <div className="price-box__text">Toplam Tutar</div>
          <div className="price-box__price">{price}</div>
        </div>
      ) : (
        <div className="error-button">
          <button onClick={handleNavigation}>Başa Dön</button>
        </div>
      )}
    </div>
  );
};

export default Result;
