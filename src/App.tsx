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
  CompanyDetailPage,
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
import { checkAuthLoader } from "@utils/authUtils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    id: "root",
    loader: checkAuthLoader,
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
        loader: checkAuthLoader,
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
      {
        path: "company/:id",
        element: <CompanyDetailPage />,
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
