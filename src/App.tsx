import { RouterProvider } from "react-router-dom";
import { Home, Login, Register, Job, UserSetting, JobDetail } from "@pages";
import { AdminUser, AdminJob, AdminDashboard, AdminOther } from "@pages/admin";
import { createBrowserRouter } from "react-router-dom";
import { Root, AdminRoot } from "@components/layouts";

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
    children: [
      { path: "", element: <AdminDashboard /> },
      {
        path: "jobs",
        element: <AdminJob />,
      },
      { path: "users", element: <AdminUser /> },
      { path: "others", element: <AdminOther /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
