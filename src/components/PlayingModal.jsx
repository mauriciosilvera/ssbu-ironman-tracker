import React from 'react';

function PlayingModal(props) {
  const {
    selected, getRandom, alreadyPicked, openClosePlayingModal,
  } = props;
  const ALL_CHARACTERS_QUANTITY = 86;

  return (
    <div className="flex flex-col items-center justify-center bg-[#F7F7F7] w-[40%] h-[50%]">
      {console.log(alreadyPicked)}
      <img src={selected?.img} alt={selected?.name} className="h-[35%] w-[35%]" />
      <p className="text-3xl font-medium font-sans mt-2">{selected?.name}</p>
      <p className="text-xl font-normal font-sans mt-2">{`${alreadyPicked}/${ALL_CHARACTERS_QUANTITY} (${Math.round((alreadyPicked * 100) / ALL_CHARACTERS_QUANTITY)}%)`}</p>
      <div className="mt-2">
        <button type="button" className="p-3 bg-[#3A98B9] rounded-xl m-2 text-white text-lg font-medium"> Reset </button>
        <button type="button" className="p-3 bg-[#FFBF00] rounded-xl m-2 text-white text-lg font-medium" onClick={() => getRandom()}> Continue </button>
        <button type="button" className="p-3 bg-[#F55050] rounded-xl m-2 text-white text-lg font-medium" onClick={() => openClosePlayingModal()}> Close </button>
      </div>
    </div>
  );
}

export default PlayingModal;
