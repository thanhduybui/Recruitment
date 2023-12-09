import { Footer } from "@components/layouts/footer";
import { Header } from "@components/layouts/header";
import { RegisterForm } from "@features/authentication";

export default function Register() {
  return (
    <>
      <Header></Header>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </>
  );
}
