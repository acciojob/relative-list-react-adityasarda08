import React from "react";

const RelativeList = () => {
  const relatives = [
    { id: "relativeListItem1", name: "Uncle Raj" },
    { id: "relativeListItem2", name: "Aunt Priya" },
    { id: "relativeListItem3", name: "Cousin Arjun" },
    { id: "relativeListItem4", name: "Grandmother" },
    { id: "relativeListItem5", name: "Brother Rohit" }
  ];

  return (
    <div>
      <h2>Relatives to Visit This Diwali 🎉</h2>
      <ol key="relativeList">
        {relatives.map((relative) => (
          <li key={relative.id}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default RelativeList;