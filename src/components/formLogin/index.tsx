import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { ButtonEnter, ButtonRegister, LoginForm } from "./styles";
import { useNavigate } from "react-router-dom";


export interface ILogin {
    email: string
    password: string
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
    
    return(
        <LoginForm>
            <h1>Login</h1>
             <input type='email' placeholder='Email' {...register('email')}/>
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