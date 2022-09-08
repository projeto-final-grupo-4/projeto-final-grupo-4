import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { RegisterForm, ButtonRegister } from "./styles";
import api from "../../services/api";
import { FieldValue } from "react-hook-form";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";


export interface IUser {
  name: string;
  photo: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
  watch_later: [];
  onSubmit: (data: IUserData) => void;
}

export interface IUserData {
  name: string;
  email: string;
  password: Number;
  avatar: string;
  watch_later: [];
}

export interface IUserContext {
  onSubmit: (data: FieldValue<IUserData>) => void;
}

const FormRegister = () => {

  const [typePassword, setTypePassword] = useState<string>("password");

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Nome obrigatório"),

    photo: yup.string().required("Avatar obrigatório"),

    email: yup.string().required("Email obrigatório"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),

    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FieldValue<IUserContext>) => {

    api
      .post("users", data)
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("token", response.data.accessToken);
        
        

        toast.success("Usuário criado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Falha ao registrar, tente novamente mais tarde!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error(error);
      });
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
    <>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastrar</h1>
        <input type="text" placeholder="Nome" {...register("name")} />
        <span>{errors.email?.message}</span>
        <input type="text" placeholder="Foto" {...register("photo")} />
        <span>{errors.password?.message}</span>
        <input type="email" placeholder="Email" {...register("email")} />
        <span>{errors.email?.message}</span>
        <input type={typePassword} placeholder="Senha" {...register("password")} />
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
        <input
          type={typePassword}

          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        <span>{errors.password?.message}</span>
        <Link to={"/login"} className="linkLogin">
          Já possui uma conta?
        </Link>
        <ButtonRegister onClick={()=>{
          setValue("watch_later",[])
        }} type="submit">Cadastrar</ButtonRegister>

      </RegisterForm>
    </>
  );
};

export default FormRegister;
