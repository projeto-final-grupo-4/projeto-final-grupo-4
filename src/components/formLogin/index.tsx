import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { ButtonEnter, ButtonRegister, LoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


export interface ILogin {
    name: string
    email: string
    password: string
    avatar: string
    watch_later: []

}



const FormLogin = () => {

    const navigate = useNavigate()

    const schema = yup.object({

        email: yup.string().required('Email obrigatório'),

        password: yup.string().required('Senha obrigatória')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(schema),
    })

    const signIn = (data: any) => {
        api.get('users', data)
            .then(response => {
                console.log(response)
                localStorage.setItem("token", response.data.token)
            })
    }

    return (
        <LoginForm>
            <h1 onSubmit={handleSubmit(signIn)}>Login</h1>
            <input type='email' placeholder='Email' {...register('email')} />
            <span>{errors.email?.message}</span>
            <input type='password' placeholder='Senha' {...register('password')} />
            <span>{errors.password?.message}</span>
            <h3>Não possui uma conta?</h3>
            <ButtonRegister onClick={() => navigate('/register')}>Cadastre-se aqui</ButtonRegister>
            <ButtonEnter>Entrar</ButtonEnter>
        </LoginForm>
    )
}

export default FormLogin