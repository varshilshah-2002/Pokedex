import React from "react";
import "./style1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import palkia from "../assets/images/palkia.png";
// import pikachu from "../assets/images/pikachu.png";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    
      <section className="home" id="home">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-md-6">
              <img src={palkia} className="testimg" alt="" />
            </div>

            <div className="col-md-6 text-md-left">
              <h3 className="headerline">Welcome to POKEMANIA</h3>
              <h3 className="headerline">Start your Pokemon Journey Today!!!</h3>
              <Link to='/pokedex'>
              <button class="button-36" role="button">
                <i class="fas fa-search"></i>        Search For Pokemons
              </button>
              </Link>
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Home;
