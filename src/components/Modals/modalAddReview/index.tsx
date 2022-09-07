import { useDashboardContext } from "../../../context/dashboardContext";
import { FaWindowClose } from "react-icons/fa";
import api from "../../../services/api";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BackgroundModal,
  DivModalAddReview,
  DivMovieInformation,
  DivSecondPartModalAddReview,
  FormAddReview,
} from "./styles";
import { CommunityContext } from "../../../context/CommunityContext";

interface IOpinion {
  content: string;
  id?: number | string;
  rate: number;
  moviesId: number;
  seriesId: number;
  usersId: number;
}
function ModalAddReview() {
  const formSchema = yup.object().shape({
    content: yup.string().required("Opinião obrigatória"),
    rate: yup.number().required("Nota obrigatória"),
  });

  const { register, handleSubmit, setValue } = useForm<IOpinion>({
    resolver: yupResolver(formSchema),
  });

  const getMovies = async () => {
    await api
      .get("movies")
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
  };
  const getOpinions = async () => {
    await api
      .get("opinions")
      .then((response) => {
        console.log(response.data);
        setOpinionsAll(response.data);
      })
      .catch((err) => console.log(err));
  };
  const getSeries = async () => {
    await api
      .get("series")
      .then((response) => setSeries(response.data))
      .catch((err) => console.log(err));
  };
  const getUsers = async () => {
    await api
      .get("users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  };

  const onSubmitFunction = async (data: any) => {
    await api
      .post("opinions", data)
      .then((response) => {
        setModalAddReview(false);
      })
      .catch((err) => {
        console.log(err);
      });

    await getMovies();
    await getOpinions();
    await getSeries();
    getUsers();
  };
  const { movies, series, setOpinionsAll, setUsers } =
    useContext(CommunityContext);

  const {
    setModalAddReview,
    modalAddReview,
    selectMovie,
    rate,
    poster,
    setMovies,
    setSeries,
  } = useDashboardContext();
  const moviesFind: any = movies.find((item) => item.title === selectMovie);
  console.log(moviesFind);
  console.log(selectMovie);
  if (modalAddReview === false) {
    return null;
  } else {
    return (
      <BackgroundModal>
        <DivModalAddReview>
          <DivMovieInformation>
            <img src={poster} alt="Poster"></img>
            <h4>{selectMovie}</h4>

            <h5>Nota &nbsp;{rate}</h5>
          </DivMovieInformation>
          <DivSecondPartModalAddReview>
            <div>
              <h2>Deixe sua opinião:</h2>
              <button onClick={() => setModalAddReview(false)}>
                <FaWindowClose size={25} />
              </button>
            </div>
            <FormAddReview onSubmit={handleSubmit(onSubmitFunction)}>
              <input {...register("content")}></input>
              <label>
                Qual a sua nota para essa obra?
                <select {...register("rate")}>
                  <option value="5">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </option>
                  <option value="4">&#9733; &#9733; &#9733; &#9733;</option>
                  <option value="3">&#9733; &#9733; &#9733;</option>
                  <option value="2">&#9733; &#9733;</option>
                  <option value="1">&#9733;</option>
                </select>
              </label>
              <button
                onClick={(e) => {
                  if (moviesFind !== undefined) {
                    setValue(
                      "usersId",
                      parseInt(localStorage.getItem("@USERID") || "")
                    );
                    setValue("moviesId", moviesFind.id);
                    setValue("seriesId", 0);
                  } else {
                    const getSeries: any = series.find(
                      (item) => item.title === selectMovie
                    );
                    setValue(
                      "usersId",
                      parseInt(localStorage.getItem("@USERID") || "")
                    );
                    setValue("moviesId", 0);
                    setValue("seriesId", getSeries.id);
                  }
                }}
                type="submit"
              >
                Enviar
              </button>
            </FormAddReview>
          </DivSecondPartModalAddReview>
        </DivModalAddReview>
      </BackgroundModal>
    );
  }
}

export default ModalAddReview;
