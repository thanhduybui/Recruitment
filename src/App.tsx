import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Login, Register, Job, UserSetting } from "@pages";

function App() {
  return (
    <BrowserRouter basename="/jobhunt">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-job" element={<Job />} />
        <Route path="/user-setting" element={<UserSetting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
