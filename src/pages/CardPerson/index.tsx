import Header from "../../components/Header";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { GET_CHARACTER } from "../../graphql/queries";
import { UserCard } from "../../types/user-card";
import "./styles.css";

const CardPerson = () => {
  const history = useNavigate();
  const { id }: { id: string; } = useParams();
  const { data, loading, error } = useQuery<UserCard>(GET_CHARACTER, {
    variables: { id },
  });

  if (error) return <h1 className='error'>Xiii! Deu erro</h1>;
  if (loading) return <h1 className='error'>Quase lá! Está carregando</h1>;
  if (!data) return <h3>Sem informações</h3>;

  const handleClick = () => {
    history("/");
  };

  const { gender, image, name, status } = data.character;
  return (
    <div className='container__person'>
      <Header />
      <div className='container__card__person'>
        <button
          className='container__card__person__button'
          onClick={handleClick}
        >
          Voltar
        </button>
        <div className='container__card__info'>
          <img
            className='container__card__person__image'
            src={image}
            alt={name}
          />
          <h2 className='container__card__person__name'>{name}</h2>
          <h3 className='container__card__person__specie'>Gênero: {gender}</h3>
          <h3 className='container__card__person__specie'>Status: {status}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;
