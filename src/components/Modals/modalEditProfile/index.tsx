import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DivFormEditProfile,
  FormEditProfile,
  DivButtonCloseModalEditProfile,
  ButtonCloseModalEditProfile,
  InputEditProfile,
  ButtonEditProfile,
  H1EditProfile,
} from "./styles";
import { FaWindowClose } from "react-icons/fa";

import { useDashboardContext } from "../../../context/dashboardContext";

import api from "../../../services/api";
import { SubmitHandler } from "react-hook-form";


function ModalEditProfile() {
  const id = localStorage.getItem("@USERID");

  interface IUser {
    name: string;
    id?: Number;
    email: string;
    password: string;
    confirmPassword?: string;
    avatar: string;
    watch_later?: [];
    onSubmitFunction: SubmitHandler<IUser>;
  }

  const { setModalEditProfile, modalEditProfile } = useDashboardContext();

  const formSchema = yup.object().shape({
    name: yup.string(),
    password: yup.string(),
    avatar: yup.string(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: any) => {
    console.log(data);
    console.log(id);
    api
      .patch(`users/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        setModalEditProfile(false);
      })
      .catch((error) => console.error(error));
  };

  if (modalEditProfile === false) {
    return null;
  } else {
    return (
      <>
        <DivFormEditProfile>
          <FormEditProfile onSubmit={handleSubmit(onSubmitFunction)}>
            <DivButtonCloseModalEditProfile>
              <ButtonCloseModalEditProfile
                onClick={() => setModalEditProfile(false)}
              >
                <FaWindowClose size={30} />
              </ButtonCloseModalEditProfile>
            </DivButtonCloseModalEditProfile>
            <H1EditProfile>Editar Perfil</H1EditProfile>
            <InputEditProfile
              placeholder="Novo Nome"
              {...register("name")}
            ></InputEditProfile>
            <span>{errors.name?.message}</span>
            <InputEditProfile
              placeholder="Nova Foto"
              {...register("avatar")}
            ></InputEditProfile>
            <span>{errors.avatar?.message}</span>
            <InputEditProfile
              type="password"
              placeholder="Nova Senha"
              {...register("password")}
            ></InputEditProfile>
            <span>{errors.password?.message}</span>
            <InputEditProfile
              type="password"
              placeholder="Confirmar a Nova Senha"
              {...register("confirmPassword")}
            ></InputEditProfile>
            <span>{errors.confirmPassword?.message}</span>
            <ButtonEditProfile type="submit">
              Salvar Alterações
            </ButtonEditProfile>
          </FormEditProfile>
        </DivFormEditProfile>
      </>
    );
  }
}

export default ModalEditProfile;
