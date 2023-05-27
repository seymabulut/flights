import { FC, useEffect } from "react";
import "./searchFlights.scss";
import Search from "../../components/search/search";

const SearchFlights: FC = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="search-flight">
      <div className="search-flight__container">
        <div className="search-flight__header">
          <div>Merhaba</div>
          <div>Nereyi keşfetmek istersiniz?</div>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;
