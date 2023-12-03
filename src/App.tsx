import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import { Home, Login, Register } from "@pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}
export default App;
