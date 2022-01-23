import React from "react";
import "./style1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import palkia from "../assets/images/palkia.png";
// import pikachu from "../assets/images/pikachu.png";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>

      <header className="header fixed-top">

        <div className="container">

          <div className="row align-items-center justify-content-between">

            <nav className="nav">
              <a href="#about" className="navtag">Pokedex</a>
              <a href="#courses" className="navtag">Trainers</a>
            </nav>

            <div id="menu-btn" className="fas fa-bars"></div>

          </div>

        </div>

      </header>
      <section className="home" id="home">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-md-6">
              <img src={palkia} className="testimg" alt="" />
            </div>

            <div className="col-md-6 text-md-left">
              <h3>Welcome to POKEMANIA</h3>
              <h3>Start your Pokemon Journey Today!!!</h3>
              <button className="button-82-pushable" role="button">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                  <Link to='/pokedex'>
                    <i class="fas fa-search"></i>    Search For Pokemons
                  </Link>
                </span>
              </button>
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Home;
