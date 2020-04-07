import React from "react";

const SearchPanel = ({onSearchTyped}) => {
    return (
        <input type="text"
               onChange={onSearchTyped}
               className="form-control search-input"
               placeholder="type to search" />
    );
};

export default SearchPanel;
