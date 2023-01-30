
import React, { useState } from "react"

function CategoryFilter({ selectedId, handleSelect, categories }) {
  {
    let data = categories || []
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {data.map((item, i) => {
        return <button key={i} onClick={() => handleSelect(item)} className={item === selectedId ? "selected" : ""}>{item}</button>
      })}
    </div>
  );
}
}
export default CategoryFilter;
