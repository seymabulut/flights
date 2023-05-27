import { FC } from "react";
import "./searchFlights.scss";
import Search from "../../components/search/search";

const SearchFlights: FC = () => {
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
