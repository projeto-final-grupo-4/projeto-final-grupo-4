import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"
import { RegisterForm, ButtonRegister } from "./styles"
import api from "../../services/api"
import { FieldValue } from "react-hook-form"

export interface IUser {
    name: string
    photo: string
    email: string
    password: string
    confirmPassword: string
    avatar: string
    watch_later: []
    onSubmit: (data :IUserData) => void
}

export interface IUserData{
    name: string
    email: string
    password: Number
    avatar: string
    watch_later: []
}

export interface IUserContext {
    onSubmit: (data : FieldValue<IUserData>) => void
}


 const FormRegister = () => {

    const navigate = useNavigate()

    const schema = yup.object({
    
        name: yup.string().required('Nome obrigatório'),
        
        photo: yup.string().required('Avatar obrigatório'),
        
        email: yup.string().required('Email obrigatório'),
        
        password: yup.string().required('Senha obrigatória').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
            "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"),
        
        confirmPassword: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null], 'Senhas não conferem'),
    })

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm<IUser>({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: FieldValue<IUserContext>) => {
        console.log(data)
        api.post('users', data)
        .then((response) =>{
            console.log(response)
            window.localStorage.setItem("token", response.data.token)
            navigate('/login')
        })
        .catch((error) => console.error(error))
    }

    return(
        <>
            <RegisterForm onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastrar</h1>
                <input type='text' placeholder='Nome' {...register('name')}/>
                <span>{errors.email?.message}</span>
                <input type='text' placeholder='Foto' {...register('photo')} />
                <span>{errors.password?.message}</span>
                <input type='email' placeholder='Email' {...register('email')}/>
                <span>{errors.email?.message}</span>
                <input type='password' placeholder='Senha' {...register('password')} />
                <span>{errors.password?.message}</span>
                <input type='password' placeholder='Confirmar senha' {...register('confirmPassword')} />
                <span>{errors.password?.message}</span>
                <ButtonRegister type='submit'>Cadastrar</ButtonRegister>
            </RegisterForm>
        </>
    )

}

export default FormRegister