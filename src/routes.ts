import express from 'express';

const router = express.Router();

router.post('/users', () => console.log("Criando Usuário"));
router.get('/users', () => console.log("Retornando vários Usuários"));
router.get('/users/:id', () => console.log("Retornando um Usuário"));
router.put('/users/:id', () => console.log("Atualizando Usuário"));
router.delete('/users/:id', () => console.log("Deletando Usuário"));

export default router;