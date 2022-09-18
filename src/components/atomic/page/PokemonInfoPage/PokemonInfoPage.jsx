import { useSearchParams } from 'react-router-dom';

const PokemonInfoPage = () => {
  let [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  return <div>Pokemon info page: {id}</div>;
};

export default PokemonInfoPage;
