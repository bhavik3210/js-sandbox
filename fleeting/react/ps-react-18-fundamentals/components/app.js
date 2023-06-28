import Banner from "./banner";
import HouseList from "./houseList";

const App = ({ children }) => {
  const jsx = <div>Hello from Jsx</div>;

  return (
    <div>
      <Banner headerText="Providing houses all over the world | via Custom Prop">
        Providing houses all over the world | via 'children' Prop
      </Banner>
      {jsx}
      <HouseList />
    </div>
  );
};

export default App;
