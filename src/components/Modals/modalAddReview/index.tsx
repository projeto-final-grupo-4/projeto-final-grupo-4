import './reset.css'
import { useDashboardContext } from "../../../context/dashboardContext";
/*import { CommunityContext } from "../../context/CommunityContext";*/
import { BsXSquare } from 'react-icons/bs'
import api from '../../../services/api';
import { useContext } from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivModalAddReview, DivMovieInformation, DivSecondPartModalAddReview, FormAddReview } from './styles'

interface IOpinion {
    content: string;
    rate: number;
}
function ModalAddReview() {

    const formSchema = yup.object().shape({
        content: yup.string().required("Opinião obrigatória"),
        rate: yup.number().required("Nota obrigatória"),
    });

    const {
        register,
        handleSubmit,
    } = useForm<IOpinion>({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data: any) => {
        console.log('chguei')
        api.post('opinions', data)
            .then((response) => {
                console.log(response);
                setModalAddReview(false)

            })
            .catch((err) => {
                console.log(err)
            });
    }

    /*const {
        opinions,
        setOpinions
    } = useContext(CommunityContext);*/

    const {
        setModalAddReview,
        modalAddReview,
        selectMovie,
        rate,
        poster
    } = useDashboardContext();

    if (modalAddReview === false) {
        return (
            null
        )
    }

    else {
        return (
            <>
                <DivModalAddReview>
                    <DivMovieInformation>
                        <img src={poster} alt="Poster"></img>
                        <h1>{selectMovie}</h1>
                        <h2>Nota &nbsp;{rate}</h2>
                    </DivMovieInformation>
                    <DivSecondPartModalAddReview>
                        <div>
                            <h2>Deixe sua opinião:</h2>
                            <button onClick={() => setModalAddReview(false)}><BsXSquare color='#FFC124' size={25} /></button>
                        </div>
                        <FormAddReview onSubmit={handleSubmit(onSubmitFunction)}>
                            <input {...register("content")}></input>
                            <label>Qual a sua nota para essa obra?
                                <select {...register("rate")}>
                                    <option value="5">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
                                    <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
                                    <option value="3">&#9733; &#9733; &#9733;</option>
                                    <option value="2">&#9733; &#9733;</option>
                                    <option value="1">&#9733;</option>
                                </select>
                            </label>
                            <button type="submit">Enviar</button>
                        </FormAddReview>
                    </DivSecondPartModalAddReview>
                </DivModalAddReview>
            </>
        )
    }
}

export default ModalAddReview