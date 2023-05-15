import AppContext from "./AppContext";

import { useState } from "react";
import StayData from "../Data/Data";
const AppState = (props) => {
  const [location, setLocation] = useState("Location");
  const [count, setCount] = useState(0);
  const [navExpand, setNavExpand] = useState(false);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let filterData = StayData.filter((item) => {
    return item.city;
  });
  return (
    <AppContext.Provider
      value={{
        StayData,
        filterData,
        location,
        setLocation,
        count,
        setCount,
        navExpand,
        setNavExpand,
        adult,
        setAdult,
        child,
        setChild,
        isOpen,
        setIsOpen
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
