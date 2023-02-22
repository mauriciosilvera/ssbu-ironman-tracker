import React from 'react';

export default function CharactersGrid(props) {
  const { charactersRemaining, charactersPicked } = props;

  return (
    <>
      <h3 className="text-2xl m-6 font-medium font-seriff">
        {`Characters remaining: ${charactersRemaining?.length}`}
      </h3>
      <div className="flex w-10/12 flex-wrap items-center justify-center">
        {charactersRemaining.map((character) => (
          <div key={character?.id} className="w-[100px] h-[100px] flex flex-col items-center justify-center m-2 hover:bg-slate-200" role="button" tabIndex={character?.id}>
            <img src={character?.img} alt={character.name} className="w-full h-full" />
          </div>
        ))}
      </div>
      <h3 className="text-2xl m-6 font-medium font-seriff">
        {`Characters picked: ${charactersPicked?.length}`}
      </h3>
      <div className="flex w-10/12 flex-wrap items-center justify-center">
        {charactersPicked.map((character) => (
          <div key={character?.id} className="w-[100px] h-[100px] flex flex-col items-center justify-center m-2 hover:bg-slate-200">
            <img src={character?.img} alt={character?.name} className="w-full h-full" />
          </div>
        ))}
      </div>
    </>
  );
}
