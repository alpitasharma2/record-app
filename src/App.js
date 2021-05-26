
import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import TodoList from './components/TodoList';
import Footer from './Footer/Footer';
import Image from "./assests/checklist.svg";
import SocialFollow from "./SocialFollow";





function App() {
  return (
    <div className= 'todo-app'>
      <img src={Image} alt="checklistimage"/>
      <Header/>
      <TodoList /> 
      <Footer />
      <SocialFollow />
    </div>
    
  );
}

export default App;