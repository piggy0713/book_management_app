import React from "react";

const SearchBook = ({ onChange, value }) => {
  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="Enter a search term"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchBook;
