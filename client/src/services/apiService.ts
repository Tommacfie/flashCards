import { server } from '../config';
import { FlashCardType } from '../types/types';

export const getFlashCards = async () => {
  try {
    const response = await fetch(server + '/flashCards');
    const flashCards = await response.json();
    console.log(flashCards);

    return flashCards;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const postFlashCard = async (flashCard: FlashCardType) => {
  try {
    const response = await fetch(server + '/flashCard', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(flashCard),
    });
    const newFlashCard = await response.json();
    console.log(newFlashCard);

    return newFlashCard;
  } catch (error) {
    console.log('Error:', error);
  }
};
