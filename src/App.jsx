import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Surround from './components/Surround';
import Slots from './components/Slots';
import Intervene from './components/Intervene';
import List from './components/List';
import EventButtons from './components/EventButtons';

function App() {
  const itms = [{name: "aaron", email:"aaron@mail.com"}, {name: "oli", email:"oli@mail.com"}, {name: "nikki", email:"nikki@mail.com"}]
  return (
    <div className="App">
        {/* <Intervene message="intervening message" />
        <List items={itms} /> */}
        <EventButtons />
    </div>
  );
}

export default App;
