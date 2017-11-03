import React from 'react';

import FruitBasket from './FruitBasket';

import Filter from './Filter';

import FilteredFruitList from './FilteredFruitList'

export default class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(json => {
        this.setState({filters: json})
      });
  }

  fetchFruit = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(items => this.setState({ fruit: items }));
    }

  handleFilterChange = event => {
    this.setState({
      currentFilter: event.target.value
    });
  }


  render(){
    return(
      <div>
        <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter}updateFilterCallback={this.handleFilterChange}/>
      </div>
    )
  }
}
