import React from 'react';

export default function ActionButton(props) {
  const { text, children } = props;
  return (
    <div className={`${text === 'Play' ? 'w-[25%] h-full' : 'w-[20%] h-[70%]'} flex flex-col items-center justify-center m-2 bg-buttons rounded-lg cursor-pointer`}>
      {children}
      <p className="text-xl font-sans">{text}</p>
    </div>
  );
}
