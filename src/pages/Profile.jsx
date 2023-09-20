import React from "react";
import Navbar from "../components/Navbar";
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
    const {name, sprites, moves} = pokemonData
  return(
    <>
    <Navbar hideSearch/>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p="1em"> 
            <Typography variant="h5">{name}</Typography>
            <Box display="flex" alignItens="center" width="100%" >
             <Box 
             component="img" 
             src={sprites.front_default} 
             width="50%" height="70%"
             margin="15px" 
             sx={{
              flexDirection: {
                sx: "column",
                md: "row",
               }
              }}/>
              <PokemonTable pokemonData={pokemonData}/>
            </Box>
            <Box width="100%">
              <Divider>Variacoes</Divider>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box component="img" src={sprites.front_female} width="25%" height="30%"/>
                <Box component="img" src={sprites.front_shiny} width="25%" height="30%"/>
                <Box component="img" src={sprites.front_shiny_female} width="25%" height="30%"/>
              </Box>
              <Divider>Ataques</Divider>
              <Box textAlign="center" marginTop="15px">
              {moves.map((moveData, key) => (
              <Chip key={key} sx={{m:"5px"}} label={moveData.move.name}/>
              ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}