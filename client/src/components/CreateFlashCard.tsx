import React, { useState } from 'react';
import { postFlashCard } from '../services/apiService';
import { flashCardType } from '../types/types';

const initialValues = {
  title: '',
  question: '',
  answer: '',
};

const CreateFlashCard = () => {
  const [flashCard, setFlashCard] = useState<flashCardType>(initialValues);

  return (
    <div className="w-full p-10 border text-center">
      <div className="text-2xl mb-2">Create a new Flash Card</div>
      <form
        className="w-2/3 mx-auto flex flex-col"
        onSubmit={async () => {
          await postFlashCard(flashCard);
          setFlashCard(initialValues);
        }}
      >
        <input
          className="border mb-2 pl-2"
          placeholder="Flash Card Title..."
          onChange={(event) => {
            setFlashCard((prev) => {
              return { ...prev, title: event.target.value };
            });
          }}
        />
        <textarea
          className="border mb-2 pl-2"
          placeholder="Flash Card Question..."
          onChange={(event) => {
            setFlashCard((prev) => {
              return { ...prev, question: event.target.value };
            });
          }}
        />
        <textarea
          className="border mb-2 pl-2"
          placeholder="Flash Card Answer..."
          onChange={(event) => {
            setFlashCard((prev) => {
              return { ...prev, answer: event.target.value };
            });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateFlashCard;
