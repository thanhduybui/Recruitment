import { RouterProvider } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Job,
  UserSetting,
  JobDetail,
  ConfirmPage,
  CompanyPage,
} from "@pages";
import { AdminUser, AdminJob, AdminDashboard, AdminOther } from "@pages/admin";
import { createBrowserRouter } from "react-router-dom";
import { Root, AdminRoot, RecruiterRoot } from "@components/layouts";
import { NotFoundPage } from "@components/error";
import {
  RecruiterManagementPage,
  EmployerRegisterPage,
  JobApplicationPage,
} from "@pages/employer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
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
      {
        path: "confirm-account",
        element: <ConfirmPage />,
      },
      {
        path: "company",
        element: <CompanyPage />,
      },
    ],
  },
  {
    path: "/recruiter",
    element: <RecruiterRoot />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "register", element: <EmployerRegisterPage /> },
      { path: "setting", element: <RecruiterManagementPage /> },
      {
        path: "job-application/:id",
        element: <JobApplicationPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminRoot />,
    errorElement: <NotFoundPage />,
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
