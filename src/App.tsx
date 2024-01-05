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
import { Root, AdminRoot } from "@components/layouts";
import { NotFoundPage, ProtectedRoute } from "@components/auth";
import {
  RecruiterManagementPage,
  EmployerRegisterPage,
  JobApplicationPage,
} from "@pages/employer";
import { Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  findJobPageLoader,
  positionLoader,
  recruiterInfoLoader,
} from "@services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
        <Route path="home" element={<Home />} />
        <Route
          path="find-job"
          element={<Job />}
          id="findJob"
          loader={findJobPageLoader}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="confirm-account" element={<ConfirmPage />} />
        <Route element={<ProtectedRoute allowRole="CANDIDATE" />}>
          <Route path="setting" element={<UserSetting />} />
        </Route>
        <Route path="job-detail" element={<JobDetail />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="company/:id" element={<CompanyDetailPage />} />
      </Route>

      <Route path="/recruiter" element={<Root />}>
        <Route
          path="register"
          element={<EmployerRegisterPage />}
          id="recruiterRegister"
          loader={positionLoader}
        />
        <Route element={<ProtectedRoute allowRole="RECRUITER" />}>
          <Route
            path="setting"
            element={<RecruiterManagementPage />}
            id="recruiterInfo"
            loader={recruiterInfoLoader}
          />
          <Route path="job-application/:id" element={<JobApplicationPage />} />
        </Route>
      </Route>

      <Route path="/admin" element={<AdminRoot />}>
        <Route element={<ProtectedRoute allowRole="ADMIN" />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="jobs" element={<AdminJob />} />
          <Route path="users" element={<AdminUser />} />
          <Route path="others" element={<AdminOther />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
