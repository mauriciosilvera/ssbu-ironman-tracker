import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import UndoIcon from '@mui/icons-material/Undo';
import ActionButton from './components/ActionButton';
import CharactersGrid from './components/CharactersGrid';
import { characters } from './characters';
import PlayingModal from './components/PlayingModal';

function App() {
  const [charactersRemaining, setCharactersRemaining] = React.useState(characters);
  const [charactersPicked, setCharactersPicked] = React.useState([]);
  const [selectedCharacter, setSelectedCharacter] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(true);

  const selectCharacter = (id) => {
    setSelectedCharacter(charactersRemaining.find((char, index) => index === id));
  };

  const updateCharactersRemaining = (id) => {
    setCharactersRemaining(charactersRemaining.filter((char, index) => index !== id));
  };

  const updateCharactersPicked = (id) => {
    setCharactersPicked([...charactersPicked, charactersRemaining.find((char, index) => index === id)]);
  };

  const openClosePlayingModal = () => {
    setIsPlaying(!isPlaying);
  };

  const getRandomFighter = () => {
    const randomCharacterId = Math.floor(Math.random() * charactersRemaining.length);

    selectCharacter(randomCharacterId);
    updateCharactersRemaining(randomCharacterId);
    updateCharactersPicked(randomCharacterId);
    openClosePlayingModal();
  };

  return (
    <div className="h-full w-full">
      {!isPlaying ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl mt-8 font-bold font-seriff">SSBU Iron-man generator</h2>
          <div className="w-[50%] h-32 flex justify-center items-center border-solid mt-8">
            <ActionButton text="Reset run">
              <ReplayIcon fontSize="large" />
            </ActionButton>
            <ActionButton text="Play" fighters={characters}>
              <PlayArrowIcon
                fontSize="large"
                onClick={() => getRandomFighter()}
              />
            </ActionButton>
            <ActionButton text="Undo last">
              <UndoIcon fontSize="large" />
            </ActionButton>
          </div>
          <CharactersGrid
            charactersRemaining={charactersRemaining}
            charactersPicked={charactersPicked}
          />
          {console.log(selectedCharacter)}
        </div>
      ) : (
        <div className="h-full flex justify-center items-center bg-[#020205]">
          <PlayingModal
            selected={selectedCharacter}
            alreadyPicked={charactersPicked.length}
            getRandom={getRandomFighter}
            openClosePlayingModal={openClosePlayingModal}
          />
        </div>
      )}
    </div>
  );
}

export default App;
