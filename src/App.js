import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeleteItem from './DeleteItem.js';
import AddItem from './PossibleSolution/AddItem';
import ShoppingList from './ShoppingList';


class App extends React.Component {
  state = {
    // value: '',
    items: []
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) })); //-1 means offset from end of string (ie the last element)
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem 
        onAdd={this.addItem}
        />
        <DeleteItem 
        deleteLast={this.deleteLastItem}
        noItems={this.noItemsFound}
        />
        <ShoppingList 
        items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
