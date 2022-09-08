import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonEnter, ButtonRegister, LoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";


export interface ILogin {
  name: string;
  email: string;
  password: string;
  avatar: string;
  confirmPassword: string;
  watch_later: [];
}

const FormLogin = () => {
  const [typePassword, setTypePassword] = useState("password")
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
      (item: { email: string; confirmPassword: string; password: string }) =>
        item.email === data.email && item.confirmPassword === data.password
        ||   item.email === data.email && item.password === data.password
    );
    if (obj !== undefined) {
      localStorage.setItem("@USERID", `${obj.id}`);
      toast.success("Bem vindo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
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
    }
  };

   const showPassword = (e: any) => {
    e.preventDefault();
    setTypePassword("text");
  };

  const hidePassword = (e: any) => {
    e.preventDefault();
    setTypePassword("password");
  };

  return (
    <LoginForm onSubmit={handleSubmit(authLogin)}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" {...register("email")} />
      <span>{errors.email?.message}</span>
      <input
        type={typePassword}
        placeholder="Senha"
        {...register("password")}
      />
      {typePassword === "password" ? (
        <button onClick={showPassword} className="eyeButton">
          <AiFillEye />
        </button>
      ) : (
        <button onClick={hidePassword} className="eyeButton">
          <AiFillEyeInvisible />
        </button>
      )}
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
