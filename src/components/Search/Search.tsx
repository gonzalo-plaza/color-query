import { useForm } from "react-hook-form";

import "./search.css";
import { searchInputValidation } from "../../constants/searchConstants";
import SearchIcon from "../Icons/SearchIcon";

type SearchProps = {
  searchColorInfo: Function;
};

const Search = ({ searchColorInfo }: SearchProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    searchColorInfo(data.search);
  });

  return (
    <div className="search-container">
      <form className="search" onSubmit={onSubmit}>
        <input
          type="text"
          className="search__input"
          {...register("search", searchInputValidation)}
          placeholder="Enter Hex, e.g., #123ABC"
        />
        <button className="search__button">
          <SearchIcon className="search__icon" />
        </button>
      </form>
      {errors?.search && (
        <span className="search-container__error-message">
          {errors.search.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default Search;
