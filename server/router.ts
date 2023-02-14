import { Router } from 'express';
import {
  createFlashCard,
  getFlashCards,
} from './controllers/flashCardController';

const router = Router({ strict: true });

// Users
router.get('/flashCards', getFlashCards);
router.post('/flashCard', createFlashCard);
// router.post('/user', getUserById);

export default router;
