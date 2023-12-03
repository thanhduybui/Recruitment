import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import { HomePage } from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={<HomePage />} />
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
