import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERES } from "../../graphql/queries";
import { User } from "../../types/user";
import "./styles.css";

const Home = () => {
  const { data, loading, error } = useQuery<User>(GET_CHARACTERES);

  if (error) return <h1 className='error'>Xiii! Deu erro</h1>;
  if (loading) return <h1 className='error'>Quase lá! Está carregando</h1>;
  if (!data) return <h3>Sem informações</h3>;

  const { results } = data.characters;
  return (
    <div className='container__home'>
      <Header />
      <div className='container__info'>
        {results.map(({ name, image, species, id }) => (
          <Link to={`/cardperson/${id}`} key={id}>
            <div className='container__card'>
              <h2 className='container__card__name'>{name}</h2>
              <img className='container__card__image' src={image} alt={name} />
              <h3 className='container__card__specie'>Espécie: {species}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
