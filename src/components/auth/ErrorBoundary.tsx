import { useRouteError } from "react-router-dom";
import { NotFoundPage } from ".";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  // Uncaught ReferenceError: path is not defined
  return <NotFoundPage />;
}
