import React from 'react';
import Search from 'src/components/Search';
import Cards from 'src/components/Cards';

import { Provider } from 'src/components/Context';

import './app.scss';

class App extends React.Component {
  state = {
    searchTerm: '',
  }

  searchCards = searchTerm => item => item.name.toLowerCase().includes(searchTerm.toLowerCase());

  handleChange = event => (
    this.setState({
      searchTerm: event.target.value,
    })
  );


  render() {
    const { searchTerm } = this.state;
    return (
      <Provider
        value={{
          searchTerm,
          actions: {
            inputChange: this.handleChange,
            cardSearch: this.searchCards,
          },
        }}
      >
        <main>
          <Search />
          <Cards />
        </main>
      </Provider>
    );
  }
}


export default App;
