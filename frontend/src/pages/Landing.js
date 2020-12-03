import logo from '../imgs_svgs/logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/button'
import Dot from '../components/dot'

import React from 'react';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'


const Landing = () => {

let picture = <img class = "parent" id = "rest" alt="stack overflow" src="https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg"></img>

const maintext = useSpring({
    delay: 500,
    opacity: 1,
    from: { opacity: 0 },
  })

  const buttonone = useSpring({
    delay: 1500,
    opacity: 1,
    from: { opacity: 0 },
  })

  const buttontwo = useSpring({
    delay: 1500,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <div class="grid-container">
      
      <section class="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </section>

      <section class="button">
      <Link to="/SignIn"><Button text= "Sign In"/></Link>
      <Link to="/Register"><Button text= "Register"/></Link>
      </section>

      <section class="image">
       {picture}
        <div  class = "child" id = "grey"></div>
      </section>

      <section class="mainn">
              <animated.h1 style={maintext} class = "maintxt">Forget about deciding where to eat, let us handle it.</animated.h1>
      </section>

      <section class="bowl">
          <Dot />
          <span class="dot"></span>
      </section>

    </div>
  );
}

export default Landing;




