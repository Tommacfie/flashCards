import { Request, Response } from 'express';
import FlashCard from '../models/flashCard';

export const getFlashCards = async (_req: Request, res: Response) => {
  try {
    const flashCards = await FlashCard.find();
    res.send(flashCards).status(200);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const createFlashCard = async (req: Request, res: Response) => {
  try {
    const newFlashCard = await FlashCard.create(req.body);
    res.send(newFlashCard).status(201);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};
