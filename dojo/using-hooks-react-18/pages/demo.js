import { useState, useEffect } from "react";
import DemoApp from "./demoApp";

const localStateValues = [];
let localStateValueIndex = 0;

export default function Demo() {
  function useMyState(initial) {
    const localStateValueIndexLocal = localStateValueIndex;
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = initial;
    }

    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };

    localStateValueIndex++;
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];

    return retVals;
  }

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("rendering...");
  }, [count]);

  function reRenderMe() {
    setCount(count + 1);
    console.log("reRenderMe called...");
  }

  localStateValueIndex = 0;
  return <DemoApp useState={useMyState} />;
}
