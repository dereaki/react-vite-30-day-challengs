import React from "react";
import Exercise1 from "./Exercise1";
import Exersise2 from "./Exersise2";
import Exersise3 from "./Exersise3";
import { BiSolidCartAdd } from "react-icons/bi";

const ExersiseApp = () => {
  return (
    <div>
      {/* <Exercise1 Product="phone" price={200} Quality={1} />
      <Exersise2 /> */}
      <BiSolidCartAdd
        color="oklch(55% .271 123.308)"
        fontSize={70}
        style={{ float: "right" }}
      />
      <Exersise3 />
    </div>
  );
};

export default ExersiseApp;
