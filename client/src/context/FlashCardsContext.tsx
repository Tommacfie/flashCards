import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getFlashCards } from '../services/apiService';
import { EnumTab, flashCardType } from '../types/types';

export type FlashCardContextType = {
  flashCards: flashCardType[];
  setFlashCards: Dispatch<SetStateAction<flashCardType[]>>;
  currentTab: EnumTab;
  setCurrentTab: Dispatch<SetStateAction<EnumTab>>;
};

const FlashCardContext = createContext<FlashCardContextType>({
  flashCards: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFlashCards: () => {},
  currentTab: EnumTab.LIST,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentTab: () => {},
});

export default FlashCardContext;

export const FlashCardContextProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [flashCards, setFlashCards] = useState<flashCardType[]>([]);
  const [currentTab, setCurrentTab] = useState<EnumTab>(EnumTab.LIST);

  useEffect(() => {
    const fetchItems = async () => {
      const newflashCards: flashCardType[] = await getFlashCards();
      setFlashCards(newflashCards);
    };
    fetchItems();
  }, []);

  return (
    <FlashCardContext.Provider
      value={{ flashCards, setFlashCards, currentTab, setCurrentTab }}
    >
      {children}
    </FlashCardContext.Provider>
  );
};

export const useFlashCardContext = () => {
  return useContext(FlashCardContext);
};
