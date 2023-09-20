import Navbar from "../components/Navbar";
import { Box, Container, Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";

export const Home = ({setPokemonData}) => {
      const [pokemons, setPokemons] = useState([]);

      const navigate = useNavigate();

    useEffect(() => {
      getPokemons();
    }, []);

    const getPokemons = () => {
      var endpoints = []
      for(var i = 1; i < 151; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

      const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if(name==="") {
          getPokemons();
        }
        for (var i in pokemons) {
          if(pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
          }
        }
        setPokemons(filteredPokemons);
      }

      const PokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/Profile");
      }

    return (
      <div>
        <Navbar pokemonFilter={pokemonFilter}/>
        <Container maxWidth="false">
         <Grid container spacing={3}>
              {pokemons.length === 0 ? (<Skeletons/>) : (
                pokemons.map((pokemon, key) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                    <Box onClick={()=>PokemonPickHandler(pokemon.data)  }>
                      <PokemonCard name={pokemon.data.name} image={pokemon.
                    data.sprites.front_default} types={pokemon.data.types}/>
                    </Box>
                  </Grid>
                ))
              )}  
         </Grid>
        </Container>
      </div>
    )
}