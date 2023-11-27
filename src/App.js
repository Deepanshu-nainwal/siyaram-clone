import React, { useState } from "react";
import HomePage from "./components/pages/HomePage";
import Router from "./components/Router/Router";
import TopWear from "./components/Categorys/TopWear";
import BottomWear from "./components/Categorys/BottomWear";
import ShopByBrand from "./components/Categorys/ShopByBrand";
import ShopByTrend from "./components/Categorys/ShopByTrend";
import NewArrivals from "./components/Categorys/NewArrivals";
import Chartpage from "./components/pages/ChartPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/siyaram/41", element: <NewArrivals /> },
      { path: "/siyaram/50", element: <BottomWear /> },
      { path: "/siyaram/49", element: <TopWear /> },
      { path: "/siyaram/38", element: <ShopByBrand /> },
      { path: "/siyaram/54", element: <ShopByTrend /> },
      { path: "siyaram/49/siyaram/topwear/chartpage", element: <Chartpage /> },
      {
        path: "siyaram/38/siyaram/ShopByBrand/chartpage",
        element: <Chartpage />,
      },
      {
        path: "siyaram/50/siyaram/bottomwear/chartpage",
        element: <Chartpage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
