import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <header className='gradient__bg'>
        <Navbar/>
        <Header/>
      </header>
      <main className='main'>
          <section><Brand/></section>
          <section><WhatGPT3/></section>
          <section><Features/></section>
          <section><Possibility/></section>
          <section><CTA/></section>
          <section><Blog/></section>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
