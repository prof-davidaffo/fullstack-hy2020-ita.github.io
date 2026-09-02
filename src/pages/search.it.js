import React from 'react';
import { graphql } from 'gatsby';

import SearchPage from '../components/SearchPage';

const Search = ({ data }) => (
  <SearchPage
    localSearch={data.localSearchItalian}
    title="Cerca nel materiale"
    inputPlaceholder="Inserisci un termine di ricerca"
    lang="it"
  />
);

export const pageQuery = graphql`
  query {
    localSearchItalian {
      store
      index
    }
  }
`;

export default Search;
