import React, { useState } from 'react';
import { flashCardType } from '../types/types';

const FlashCard = ({ flashCard }: { flashCard: flashCardType }) => {
  const [revealAnswer, setRevealAnswer] = useState(false);
  return (
    <div className="w-2/3 mx-auto flex flex-col text-center border min-h-min p-2 m-2">
      <div className="underline text-xl mb-2">{flashCard.title}</div>
      {!revealAnswer ? (
        <div>Q: {flashCard.question}</div>
      ) : (
        <div>A: {flashCard.answer}</div>
      )}
      <button
        onClick={() => setRevealAnswer(!revealAnswer)}
        className="1/3 ml-auto"
      >
        Reveal Answer
      </button>
    </div>
  );
};

export default FlashCard;
