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
import { Root } from "@components/layouts";
import { ErrorBoundary, ProtectedRoute } from "@components/auth";
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
import tokenLoader from "@services/tokenLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      id="root"
      loader={tokenLoader}
      errorElement={<ErrorBoundary />}
    >
      {/* general routes */}
      <Route path="" element={<Home />} index />
      <Route
        path="find-job"
        element={<Job />}
        id="findJob"
        loader={findJobPageLoader}
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="confirm-account" element={<ConfirmPage />} />

      <Route path="job-detail" element={<JobDetail />} />
      <Route path="company" element={<CompanyPage />} />
      <Route path="company/:id" element={<CompanyDetailPage />} />
      {/* candidate routes */}
      <Route element={<ProtectedRoute allowRole="CANDIDATE" />}>
        <Route path="setting" element={<UserSetting />} />
      </Route>
      {/*recruiter routes  */}
      <Route path="/recruiter">
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
      {/* admin routes */}
      <Route path="/admin" element={<Root />}>
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
