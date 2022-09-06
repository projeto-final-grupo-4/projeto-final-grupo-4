import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonEnter, ButtonRegister, LoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { toast } from "react-toastify";

export interface ILogin {
  name: string;
  email: string;
  password: string;
  avatar: string;
  watch_later: [];
}

const FormLogin = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required("Email obrigatório"),

    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  const signIn = async () => {
    const data: any[] = [];
    await api
      .get("users")
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("@user-auth", "true");
        data.push(...response.data);
      })
      .catch((error) => console.error(error));

    return data;
  };

  const authLogin = async (data: any) => {
    const users: any[] | null[] = await signIn();
    console.log(users.length);
    const obj = users.find(
      (item: { email: string; password: string }) =>
        item.email === data.email && item.password === data.password
    );
    if (obj !== undefined) {
      localStorage.setItem("@USERID", `${obj.id}`);
      toast.success("Bem Vindo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/dashboard");
    } else {
      toast.error("Usuário ou senha incorretos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("deu ruim");
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit(authLogin)}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" {...register("email")} />
      <span>{errors.email?.message}</span>
      <input type="password" placeholder="Senha" {...register("password")} />
      <span>{errors.password?.message}</span>
      <h3>Não possui uma conta?</h3>
      <ButtonRegister onClick={() => navigate("/register")}>
        Cadastre-se aqui
      </ButtonRegister>
      <ButtonEnter type="submit">Entrar</ButtonEnter>
    </LoginForm>
  );
};

export default FormLogin;
