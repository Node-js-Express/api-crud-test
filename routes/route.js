import express from 'express'
import { getAllPokemons } from '../controllers/tasks.js'

export const router = express.Router();

router.route('/').get(getAllPokemons)

/**
1. Create (포켓몬 추가):
    - POST  `/api/pokemons`
2. Read (포켓몬 조회):
    - 전체 조회: GET  `/api/pokemons`
    - ID로 조회: GET  `/api/pokemons/:id` 
    - 알파 조회: GET  `/api/pokemons/alpa`
3. Update (포켓몬 이름 변경 및 타이틀 업데이트):
    - 이름 변경: POST, PUT  `/api/pokemons/:id`
4. Delete (포켓몬 삭제):
    - DELETE  `/api/pokemons/:id`
 */


