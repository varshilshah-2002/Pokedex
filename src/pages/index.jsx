import React from "react";
import "./style1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import palkia from "../assets/images/palkia.png";
import ash from "../assets/images/ash.png";
import ash1 from "../assets/images/ash1.jpg";
import brock from "../assets/images/brock.png";
import misti from "../assets/images/misti.png";
import {Link} from 'react-router-dom';
import footer from "../components/Footer.js"
const Home = () => {
  return (
    <>
      <nav className="stroke">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Trainers</a></li>
          <Link to='/pokedex'>
            <li><a href="#">Pokedex</a></li>
          </Link>
        </ul>
      </nav>
      <section className="home" id="home">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-md-6">
              <img src={palkia} className="testimg" alt="" />
            </div>

            <div className="col-md-6 text-md-left">
              <h2 className="headerline1">Welcome to POKEMANIA</h2>
              <h2 className="headerline1">Start your Pokemon Journey Today!!!</h2>
              <Link to='/pokedex'>
                <button class="button-36" role="button">
                  <i class="fas fa-search"></i>        Search For Pokemons
                </button>
              </Link>
            </div>

          </div>

        </div>

      </section>

      <section className="about" id="about">

        <div className="container">

          <div className="row align-items-center flex-wrap-reverse">

            <div className="col-md-6">
              <h1 className="header1">About Us</h1>
              <h3>Welcome to POKEMANIA</h3>
              <p>The full website which includes a Pokédex, information about all the Pokemons of all the regions of the series and information on the main character's of the story. Features of this website:</p>
              <ul>
                <li> <i className="far fa-check-square"></i>Fully Responsive Website. </li>
                <li> <i className="far fa-check-square"></i>800+ Pokemon Details along with their Stengths, Weaknesses and Abilities. </li>
                <li> <i className="far fa-check-square"></i>Filter options based on Region and Type of the Pokemons.</li>
                <li> <i className="far fa-check-square"></i>100% Efficient Search Bar.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src={ash} className="testimg" alt="" />
            </div>

          </div>

        </div>

      </section>
      <section className="team" id="team">
        <div className="container">

          <div className="row heading">
            <div className="col-md-6 col-md-offset-3">
              <h1 className="header1">Meet the Trainers</h1>
            </div>
          </div>

          <div className="row team-row">

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src={ash1} alt="" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <h3 className="team-title">
                        He is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master.In Pokémon the Series: Sun & Moon, he becomes the first Champion of the Alola region's Pokémon League.                    </h3>
                      <div className="socials mt-20">
                        <h3 className="team-title">Orange League Winner.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="team-title">Ash Ketchum</h3>
                <span>Designer</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src={misti} alt="" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <h3 className="team-title">
                        She gives the Cascade Badge to Trainers who defeat her in battle. She specializes in Water-type Pokémon.
                      </h3>
                      <div className="socials mt-20">
                        <h3 className="team-title">Cerulean City's Gym Leader.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="team-title">Misty</h3>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img src={brock} alt="" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <h3 className="team-title">
                        He gives the Boulder Badge to Trainers who defeat him in battle. He specializes in Rock-type Pokémon.
                      </h3>
                      <div className="socials mt-20">
                        <h3 className="team-title">Pewter City's Gym Leader.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="team-title">Brock</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
      {footer}
    </>
  );
};

export default Home;
