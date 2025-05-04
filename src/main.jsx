import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Props from "./component/props";
// import ProductList from "./component/productList";
// import Card1 from "./component/card1";
// import props from "./component/props";
// import Great from "./component/great";
// import Product from "./component/Prodact";
// import Array from "./component/array";
// import Card from "./component/card";
// import Header from "./component/header";
import App from "../app";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />

    <Header />
    <Card1 />
    <Card1 />
    <Card1 />
    <Card1 />
    <Card1 />
    <Card1 />
    <Card1 />
    <Card1 />
    <Great />
    <Product />
   
    <ProductList />
        <Array />
  */}
    <App />
  </div>
);
export default card1;
