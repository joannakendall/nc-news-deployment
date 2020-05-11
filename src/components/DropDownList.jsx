import React from 'react';


const DropDownList = ({value, handleSortBy}) => {
    return (
        <div>
            <label>Sort Articles By:
          <select value={value} onChange={handleSortBy}>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
            <option value="created_at">Date</option>
          </select>
          </label>
        </div>
    );
};

export default DropDownList;