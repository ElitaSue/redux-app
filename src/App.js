import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);

export default App;
