import { useEffect, useState } from "react";
import HouseRow from "./houseRow";
const HouseList = () => {
  const [houses, setHouses] = useState([]);
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

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const housesResponse = await response.json();
      console.log(housesResponse);
      setHouses(housesResponse);
    };
    fetchHouses();
  }, []);

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
          console.log(houses)
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
