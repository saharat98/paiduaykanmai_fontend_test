import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./Styles/Pokemon.css";
function Pokemon() {
  const [repo, setRepo] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=128")
      .then(async (res) => {
        setRepo(res.data.results);
        for (let i = 0; i <= res.data.results.length; i++) {
          await axios
            .get(
              "https://pokeapi.co/api/v2/pokemon/" + res.data.results[i].name
            )
            .then((respon) => {
              setPokemon((prev) => {
                return [...prev, respon.data];
              });
            });
        }
      });
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      
          <h1>Test fetch API</h1>
          <ui className="pokemonDetail">
            {pokemon.map((p, id) => {
              return (
                <div key={id}>
                  <div className="pokemon-Detail">
                    <img src={p.sprites.front_default} alt={""}></img>
                  </div>
                  <div>
                    <span className="pokemon-Name">{p.name}</span>
                  </div>
                </div>
              );
            })}
          </ui>
    </>
  );
}

export default Pokemon;
