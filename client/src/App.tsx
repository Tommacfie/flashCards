import CreateFlashCard from './components/CreateFlashCard';
import FlashCardsContainer from './containers/FlashCardsContainer';
import MainViewContainer from './containers/MainViewContainer';
import { useFlashCardContext } from './context/FlashCardsContext';
import { EnumTab } from './types/types';

const App = () => {
  const { currentTab, setCurrentTab } = useFlashCardContext();

  const getCurrentTab = () => {
    switch (currentTab) {
      case EnumTab.LIST:
        return (
          <MainViewContainer>
            <FlashCardsContainer />
          </MainViewContainer>
        );
      case EnumTab.CREATE:
        return (
          <MainViewContainer>
            <CreateFlashCard />
          </MainViewContainer>
        );
    }
  };

  return (
    <MainViewContainer>
      <div>
        <button
          onClick={() => {
            if (currentTab === EnumTab.LIST) {
              setCurrentTab(EnumTab.CREATE);
            }
            if (currentTab === EnumTab.CREATE) {
              setCurrentTab(EnumTab.LIST);
            }
          }}
        >
          Set Mode
        </button>

        {getCurrentTab()}
      </div>
    </MainViewContainer>
  );
};

export default App;
