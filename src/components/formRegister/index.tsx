import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"
import { RegisterForm, ButtonRegister } from "./styles"

export interface IRegister {
    name: string
    photo: string
    email: string
    password: string
    confirmPassword: string
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
        
        confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password"), null], 'Senhas não conferem'),
    })

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm<IRegister>({
        resolver: yupResolver(schema),
    })

    return(
        <>
            <RegisterForm>
                <h1>Cadastrar</h1>
                <input type='email' placeholder='Nome' {...register('name')}/>
                <span>{errors.email?.message}</span>
                <input type='text' placeholder='Foto' {...register('photo')} />
                <span>{errors.password?.message}</span>
                <input type='email' placeholder='Email' {...register('email')}/>
                <span>{errors.email?.message}</span>
                <input type='password' placeholder='Senha' {...register('password')} />
                <span>{errors.password?.message}</span>
                <input type='password' placeholder='Confirmar senha' {...register('confirmPassword')} />
                <span>{errors.password?.message}</span>
                <ButtonRegister onClick={() => navigate('/login')}>Cadastrar</ButtonRegister>
            </RegisterForm>
        </>
    )

}

export default FormRegister