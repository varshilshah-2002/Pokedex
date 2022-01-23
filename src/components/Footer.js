import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

class Footer extends React.Component {
  openGithub = () => {
    window.open("https://github.com/s1varam/pokedex");
  };

  render() {
    return (
      <>
        <footer>
          <div className="text-center">
            <p>
              Built using HTML, CSS, React JS and PokeAPI.<i className="fa fa-copyright" aria-hidden="true"></i>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
