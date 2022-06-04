import React, {Component} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';


class App extends Component{
  render(){
    return (
      <React.Fragment>
           <Header />
           <Nav />
           <About />
           <Experience />
           <Skills />
           
           <Contact />
      </React.Fragment>
    )
  }
}

export default App