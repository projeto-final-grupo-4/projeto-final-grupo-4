import React from "react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { DivFormEditProfile, FormEditProfile, DivButtonCloseModalEditProfile, ButtonCloseModalEditProfile, InputEditProfile, ButtonEditProfile, H1EditProfile } from './styles';
import { BsFileX } from 'react-icons/bs'
import './reset.css'
import { useDashboardContext } from "../../../context/dashboardContext"
import { IUserData } from "../../formRegister";
import api from "../../../services/api";
import { FieldValue } from "react-hook-form"

function ModalEditProfile() {

    const token = localStorage.getItem("token")

    interface IUser {
        name: string
        id?: Number
        email: string
        password: string
        confirmPassword?: string
        avatar: string
        watch_later?: []
    }

    const {
        setModalEditProfile,
        modalEditProfile
    } = useDashboardContext();

    interface IUserContext {
        onSubmitFunction: (data: FieldValue<IUser>) => void
    }

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        password: yup.string().required("Senha obrigatória").matches((/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), "Senha inválida. Deve conter conter no mínimo uma letra minúscula, uma maiúscula, um número, um caractere especial e com o comprimento mínimo de oito caracteres"),
        avatar: yup.string().required("Foto obrigatória"),
        confirmPassword: yup.string().required("Confirmação obrigatória").oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        resolver: yupResolver(formSchema),
    })

    const onSubmitFunction = (data: FieldValue<IUserContext>, id: number) => {
        console.log(data)
        api.patch(`users/${id}`, data, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.error(error))
    }


    if (modalEditProfile === false) {
        return (
            null
        )
    }

    else {
        return (
            <>
                <DivFormEditProfile>
                    <FormEditProfile onSubmit={handleSubmit(onSubmitFunction)}>
                        <DivButtonCloseModalEditProfile>
                            <ButtonCloseModalEditProfile onClick={() => setModalEditProfile(false)}>
                                <BsFileX color="#FFC124" size={30} />
                            </ButtonCloseModalEditProfile>
                        </DivButtonCloseModalEditProfile>
                        <H1EditProfile>Editar Perfil</H1EditProfile>
                        <InputEditProfile placeholder="Novo Nome" {...register("name")}></InputEditProfile>
                        <span>{errors.name?.message}</span>
                        <InputEditProfile placeholder="Nova Foto" {...register("avatar")}></InputEditProfile>
                        <span>{errors.avatar?.message}</span>
                        <InputEditProfile type="password" placeholder="Nova Senha" {...register("password")}></InputEditProfile>
                        <span>{errors.password?.message}</span>
                        <InputEditProfile type="password" placeholder="Confirmar a Nova Senha" {...register("confirmPassword")}></InputEditProfile>
                        <span>{errors.confirmPassword?.message}</span>
                        <ButtonEditProfile type="submit">Salvar Alterações</ButtonEditProfile>
                    </FormEditProfile>
                </DivFormEditProfile>
            </>
        )
    }
}

export default ModalEditProfile