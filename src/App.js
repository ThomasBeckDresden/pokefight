import "./css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
// import Main from "./Main";
import ChooseFighter from "./components/ChooseFighter";

const endpoint = `http://localhost:3001/pokemon`;
function App() {
  // const [isFetching, setIsFetching] = useState(true);
  const [pokemonList, setPokemonList] = useState();

  // const fetchData = useCallback(async () => {
  //   try {
  //     const retrievedPokemon = await axios.get(endpoint);
  //     setPokemon(retrievedPokemon.data);
  //     setIsFetching(false);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, []);
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        // setIsFetching(false);
        setPokemonList(data);
      })
      .catch((e) => console.log(e));
    // fetchData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        {/* <Navigation></Navigation> */}
        {/* return pokemonList.map((pokemon) => {
    return (
      <div key={pokemon.id}>
        <p>{pokemon.id}</p> */}
        {pokemonList &&
          pokemonList.map((pokemon) => {
            console.log({ p: pokemon });
            return <ChooseFighter key={pokemon.id} pokemon={pokemon} />;
          })}
      </div>
      <Switch>
        <Route path="/pokemon">
          <ChooseFighter pokemonList={pokemonList} />
        </Route>
        <Route path="/:id">{/* <FighterPreview /> */}</Route>
        <Route path="/:id/:info">{/* <FighterDetailed /> */}</Route>
        <Route path="/fight">{/* <Fight /> */}</Route>
      </Switch>
    </>
  );
}

export default App;

// example icon use <span class="material-icons">face</span>
