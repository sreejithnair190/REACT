import "../style/searchBox.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
