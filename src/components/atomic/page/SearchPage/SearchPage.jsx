import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { Logo, FilterDropdown, Search, PokemonCard } from '@atomic';
import { pokemonInfo } from '@utils';

import { regions, types, sortby } from './helper';

// import pokemonLogo from '../../../../assets/images/pokedex.png';
import pokemonLogo from '@/assets/images/pokedex.png';

const Container = styled.div`
  text-align: center;
`;

const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-around;
`;

const regionsDropdownItems = regions.map((r) => {
  return {
    ...r,
    key: r?.name,
    value: r?.name,
    label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`
  };
});

const typeDropdownItems = types.map((t) => ({
  key: t,
  value: t,
  label: t
}));

const sortbyDropdownItems = sortby.map((s) => ({
  key: s,
  value: s,
  label: s
}));

const getFetchPokemonFilters = (filters) => {
  return filters;
};

const SearchPage = () => {
  const [filters, setFilter] = useState({});

  const onFilterChange = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value
    }));
  };

  const pokemonFilter = getFetchPokemonFilters(filters);

  return (
    <Container>
      <Logo src={pokemonLogo} width={200} />
      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="REGION"
            items={regionsDropdownItems}
            onChange={(item) => onFilterChange('region', item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="TYPE"
            items={typeDropdownItems}
            onChange={(item) => onFilterChange('type', item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="SORT BY"
            items={sortbyDropdownItems}
            onChange={(item) => onFilterChange('sortby', item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Search
            label={'SEARCH'}
            placeholder={'TYPING . . .'}
            onChange={(v) => onFilterChange('search', v)}
          />
        </Col>
      </StyledRow>
      <PokemonContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
          <PokemonCard key={x} pokemon={pokemonInfo} />
        ))}
      </PokemonContainer>
    </Container>
  );
};

export default SearchPage;
