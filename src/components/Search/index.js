import React from 'react';
import { Consumer } from 'src/components/Context';

import './search.scss';

const Search = () => (
  <Consumer>
    {
      context => (
        <form className="top-search">
          <i className="material-icons md-48">search</i>
          <input
            className="top-search--field"
            type="text"
            placeholder="Que recherchez-vous ?"
            aria-label="Search"
            value={context.searchTerm}
            onChange={context.actions.inputChange}
          />
        </form>
      )
    }
  </Consumer>
);

export default Search;
