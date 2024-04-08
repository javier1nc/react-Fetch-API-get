import React, { useState, useEffect } from "react";

function Data() {
  const [items, setItems] = useState([]);

  const loadData = () => {
    fetch("https://dummy.restapiexample.com/api/v1/employees", {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((dataJson) => {
        setItems(dataJson.data);
        console.log(dataJson.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.employee_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
