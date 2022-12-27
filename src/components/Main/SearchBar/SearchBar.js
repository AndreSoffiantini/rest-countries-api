import "./SearchBar.css";

const SearchBar = ({ setSearchInput }) => {
  return (
    <>
      <input onChange={(e) => setSearchInput(e.target.value.toLowerCase())} />
    </>
  );
};

export default SearchBar;
