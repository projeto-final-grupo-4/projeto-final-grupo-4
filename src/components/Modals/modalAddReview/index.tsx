import './reset.css'
import { useContext } from "react";
import { useDashboardContext } from "../../../context/dashboardContext";
import React from "react";
import { BsXSquare } from 'react-icons/bs'
import { DivModalAddReview, DivMovieInformation, DivSecondPartModalAddReview, FormAddReview } from './styles'

function ModalAddReview() {
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
                        <img src={poster}></img>
                        <h1>{selectMovie}</h1>
                        <h2>Nota &nbsp;{rate}</h2>
                    </DivMovieInformation>
                    <DivSecondPartModalAddReview>
                        <div>
                            <h2>Deixe sua opinião:</h2>
                            <button onClick={() => setModalAddReview(false)}><BsXSquare color='#FFC124' size={25} /></button>
                        </div>
                        <FormAddReview>
                            <input></input>
                            <label>Qual a sua nota para essa obra?
                                <select>
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