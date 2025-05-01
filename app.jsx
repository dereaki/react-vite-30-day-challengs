import { FaCartArrowDown } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import React from "react";
// import PropsExercies from "./src/component/propsExercies";
import Weather from "./src/components/Weather";
import UserState from "./src/components/userState";
import Exersise from "./src/components/exersise";
import Inline from "./src/components/styling.jsx/inline";
import JavascriptObject from "./src/components/styling.jsx/javascriptObject";
import ExersiseApp from "./Exerecise/ExersiseApp";
import Buttun from "./src/component/Buttun";
import UseState from "./src/component/UseState";

// import Props from "./src/component/props";

const App = () => {
  return (
    // <Props
    //   img="./src/assets/dere.jpg"
    //   name="dereje t"
    //   id="1"
    //   age={21}
    //   hobbies={["coding", " ,", "reading", " ,", "wathing movie rate"]}
    // />
    // <PropsExercies name="Dereje Tesfaye" location="wollo" age={21} />
    // <Weather />
    // <UserState LOggedIn={true} isAdmin={true} />
    // <Exersise />
    // <Inline />
    <div>
      {/* <Buttun /> */}
      {/* <UseState /> */}
      <ExersiseApp />

      {/*<JavascriptObject />
      <FaCartArrowDown size={40} color="green" />
      <DiAndroid size={50} color="black" /> */}
    </div>
  );
};

export default App;
