import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, trending } from './Constants/urls';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Trending' url={trending} />
      <RowPost title='Action' isSmall url={action} />
    </div>
  );
}

export default App;
