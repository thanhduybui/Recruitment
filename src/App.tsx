import { RouterProvider } from "react-router-dom";
import { Home, Login, Register, Job, UserSetting, JobDetail } from "@pages";
import { AdminHome } from "@pages/admin";
import { createBrowserRouter } from "react-router-dom";
import { Root, AdminRoot } from "@components/layouts";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />} />
//       <Route path="/find-job" element={<Job />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/user-setting" element={<UserSetting />}></Route>
//       <Route path="/job-detail" element={<JobDetail />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,

    children: [
      { index: true, path: "home", element: <Home /> },
      { path: "find-job", element: <Job /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user-setting",
        element: <UserSetting />,
      },
      {
        path: "job-detail",
        element: <JobDetail />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminRoot />,
    children: [{ path: "", element: <AdminHome /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
