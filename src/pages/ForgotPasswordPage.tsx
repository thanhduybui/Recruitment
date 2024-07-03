import { ForgotPasswordForm } from "@features/authentication";
import { toastContainerOptions } from "@utils/toastifyUtils";
import { ToastContainer } from "react-toastify";

export default function ForgotPassword() {
  return (
    <>
      <ToastContainer {...toastContainerOptions} />
      <ForgotPasswordForm />
    </>
  );
}
