
import React, { Component } from 'react';
import './assets/css/default.min.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import ExpTitle from './components/ExpTitle';
import ExpContent from './components/ExpContent';
import ProjTitle from './components/ProjTitle';
import ProjContent from './components/ProjContent';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <section id='Name'>
        <Intro />
        </section>

        <section id='About'>
        <About />
        </section>

        <section id='Experience'>
        <ExpTitle />
        <ExpContent />
        </section>

        <section id='Projects'>
        <ProjTitle />
        <ProjContent />
        </section>

        <section id='Contact'>
        <Contact/>
        </section>
      </div>
    );
  }
}
// <button onClick={()=> this.scrolling()}>TESTER ONE TO THREE</button>
  // <Element name="myScrollToElement" id='myScrollToElement'><div id='myScrollToElement'></div>
  // <div id='myScrollToElement'></div>
export default App;
