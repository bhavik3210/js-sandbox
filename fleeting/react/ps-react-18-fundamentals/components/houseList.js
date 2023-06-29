import { useState } from "react";
import housesArray from "../data/houses.json" assert { type: "json" };
import HouseRow from "./houseRow";
const HouseList = () => {
  const [houses, setHouses] = useState(housesArray);
  // const [counter, setCounter] = useState(0);
  // setCounter((current) => counter + 1);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 5,
        address: "1122 Kings, Tokyo",
        country: "Japan",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          House currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
          {/* {houses.map((h) => {
            return <HouseRow key={h.id} house={h} />;
          })} */}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
