import './reset.css'
import { useDashboardContext } from "../../../context/dashboardContext";
import { BsXSquare, BsPlusCircle, BsChatLeft } from 'react-icons/bs'
import { DivModalMovieInformations, DivScreenMovie, DivCloseModal, DivPlay, DivInformationsMovie, DivInformations, DivFuncionalities, ButtonSeeReviews, DivTitleAndRate } from './styles'
import { useNavigate } from "react-router-dom";

function ModalMovieInformations() {

    const navigate = useNavigate()

    const {
        setModalMovieInformations,
        modalMovieInformations,
        selectMovie,
        sinopse,
        setModalAddReview,
        rate,
        video
    } = useDashboardContext();

    if (modalMovieInformations === false) {
        return (
            null
        )
    }

    else {
        return (
            <>
                <DivModalMovieInformations>
                    <DivScreenMovie>
                        <DivCloseModal>
                            <button onClick={() => setModalMovieInformations(false)}>
                                <BsXSquare color='#C01818' size={20} />
                            </button>
                        </DivCloseModal>
                        <DivPlay>
                            <iframe src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </DivPlay>
                    </DivScreenMovie>
                    <DivInformationsMovie>
                        <DivInformations>
                            <DivTitleAndRate>
                                <h1>{selectMovie}</h1>
                                <h2><span>Nota &nbsp; </span>{rate}</h2>
                            </DivTitleAndRate>
                            <p>{sinopse}</p>
                        </DivInformations>
                        <DivFuncionalities>
                            <label><span>Selecionar Nota -</span>
                                <select>
                                    <option value="5">&#9733; &#9733; &#9733; &#9733; &#9733;</option>
                                    <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
                                    <option value="3">&#9733; &#9733; &#9733;</option>
                                    <option value="2">&#9733; &#9733;</option>
                                    <option value="1">&#9733;</option>
                                </select>
                            </label>
                            <button><BsPlusCircle color='#FFC124' size={20} /></button>
                            <button onClick={() => {
                                setModalMovieInformations(false);
                                setModalAddReview(true);
                            }}><BsChatLeft color='#FFC124' size={20} /></button>
                            <ButtonSeeReviews onClick={() => navigate('/community')}>Ver Reviews</ButtonSeeReviews>
                        </DivFuncionalities>
                    </DivInformationsMovie>
                </DivModalMovieInformations>
            </>
        )
    }
}

export default ModalMovieInformations