import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name="filter" type="radio" value="Alphabetically" checked={null} onChange={() => props.sortChange('Alphabetically')}/>
        Alphabetically
      </label>
      <label>
        <input name="filter" type="radio" value="Price" checked={null} onChange={() => props.sortChange('Price')}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterChange}>
          <option value="">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
