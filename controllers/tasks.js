import PokemonData from "../utils/PokemonData.js";
import { asyncWrapper } from "../middleware/async.js";

const pokemonData = new PokemonData();

export const getAllPokemons = asyncWrapper(async(req, res, next) => {
    if (pokemonData.getPokemonData().length === 0) {
        return res.status(404).json({ error: '잡은 포켓몬이 없습니다...' });
    }
    res.status(201).json({ pokemon: pokemonData.getPokemonData() });
});

export const getPokemonToID = asyncWrapper(async(req, res, next) => {
  
});

export const getAlpa = asyncWrapper(async(req, res, next) => {
    
});

export const deletePokmons = asyncWrapper(async(req, res, next) => {
   
});

export const postPokemon = asyncWrapper(async(req, res, next) => {
   
});

export const updatePokemons = asyncWrapper(async (req, res, next) => {
   
});
