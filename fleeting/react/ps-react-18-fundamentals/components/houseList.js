import houses from "../data/houses.json" assert { type: "json" };
import HouseRow from "./houseRow";
const HouseList = () => {
  console.log(houses);

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
    </>
  );
};

export default HouseList;
