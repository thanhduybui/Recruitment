import {
  // createBrowserRouter,
  // createRoutesFromElements,
  Routes,
  Route,
  // RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { Home, Login, Register } from "@pages";

function App() {
  return (
    <BrowserRouter basename="/jobhunt">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
