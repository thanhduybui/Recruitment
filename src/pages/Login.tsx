import { Header } from "@components/layouts/header";
import { LoginForm } from "@features/authentication";
import { Footer } from "@components/layouts/footer";

export default function Login() {
  return (
    <>
      <Header></Header>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </>
  );
}
