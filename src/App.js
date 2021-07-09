import "./css/App.css";
import { useState, useCallback, useEffect, Fragment } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";

import axios from "axios";

import Main from "./Main";
import Navigation from "./Navigation";
const backendEntryPoint = `https://pokefight-group4.herokuapp.com/pokemon/`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [pokemonList, setPokemonList] = useState();

  // const [fightResult, setFightResult] = useState();
  // const [loser, setLoser] = useState();
  // const [winner, setWinner] = useState();

  // const determineWinner = (player1, player2) => {
  //   // console.log(contenders);
  //   // const userPokemon = contenders[0];
  //   // const opponentPokemon = contenders[1];

  //   let powerPlayer1 =
  //     (player1.base.HP +
  //       player1.base.Attack +
  //       player1.base.Defense +
  //       player1.base.Speed) *
  //     Math.random();
  //   let powerPlayer2 =
  //     (player2.base.HP +
  //       player2.base.Attack +
  //       player2.base.Defense +
  //       player2.base.Speed) *
  //     Math.random();

  //   // if (powerA > powerB) {
  //   //   return setFightResult("You won!");
  //   // } else if (powerB > powerA) {
  //   //   return setFightResult("You lost!");
  //   // } else {
  //   //   return null;
  //   // }

  //   setWinner(Math.max(powerPlayer1, powerPlayer2));
  //   setLoser(Math.min(powerPlayer1, powerPlayer2));
  // };

  const fetchData = useCallback(async () => {
    try {
      const retrievedPokemons = await axios.get(backendEntryPoint);
      setPokemonList(retrievedPokemons.data);
      setIsFetching(false);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Navigation />
        {isFetching && (
          <div className="sweet-loading">
            <FadeLoader
              color="maroon"
              loading={true}
              css={override}
              size={150}
            />
          </div>
        )}
        {!isFetching && (
          <Main
            backendEntryPoint={backendEntryPoint}
            pokemonList={pokemonList}
            // setContenders={setContenders}
            // contenders={contenders}
            // determineWinner={determineWinner}
            // fightResult={fightResult}
          ></Main>
        )}
      </Container>
    </Fragment>
  );
}

export default App;

// example icon use <span class="material-icons">face</span>
