import { Route, RouterProvider } from "react-router-dom";
import { Home, Login, Register, Job, UserSetting, JobDetail } from "@pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Root } from "@components/layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/home" element={<Home />} />
      <Route path="/find-job" element={<Job />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-setting" element={<UserSetting />}></Route>
      <Route path="/job-detail" element={<JobDetail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
