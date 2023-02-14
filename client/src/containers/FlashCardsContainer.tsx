import FlashCard from '../components/FlashCard';
import { useFlashCardContext } from '../context/FlashCardsContext';
import { flashCardType } from '../types/types';

const FlashCardsContainer = () => {
  const { flashCards } = useFlashCardContext();

  return (
    <div className="w-full p-10 border">
      {flashCards.map((flashCard: flashCardType) => (
        <FlashCard flashCard={flashCard} key={flashCard._id} />
      ))}
    </div>
  );
};

export default FlashCardsContainer;
