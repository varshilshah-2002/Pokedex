import React from 'react';

class Loading extends React.Component {

    openGithub = () => {
        window.open("https://github.com/s1varam/pokedex");
    }

    render() {
        return (
            <>
                <div className="app__container">
                    <div className="loading__text">
                        Loading
                    </div>
                    <div className="gif__container">
                        <img src="https://c.tenor.com/0WkmuOC_W00AAAAj/waving-pikachu.gif" className="loading__gif noselect" alt="loading-gif"></img>
                    </div>
                </div>
            </>
        )
    }
}

export default Loading;