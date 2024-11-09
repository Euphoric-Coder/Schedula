import Image from 'next/image';
import React from 'react'

const Title = () => {
  return (
    <header className="text-center space-y-4 py-6 relative w-full flex flex-col items-center justify-center cursor-default">
      <div className="flex items-center justify-center gap-3 transition-transform transform duration-500 ease-in-out hover:scale-105">
        <Image
          src="/title-icon.png"
          alt="Schedulrr Icon"
          width={500}
          height={400}
          className="w-14 sm:w-16 md:w-20 lg:w-24"
        />
        <h1 className="p-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 hover:from-teal-500 hover:via-indigo-500 hover:to-pink-500">
          Schedulrr: Simplify Scheduling
        </h1>
      </div>
      <div className="relative w-full h-1 mx-auto max-w-md mt-2">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 rounded-full animate-gradient-move" />
      </div>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 opacity-90 px-4 md:px-8 lg:px-12 leading-relaxed font-mono">
        Take control of your time with Schedulrr, the ultimate scheduling
        solution for busy professionals.
      </p>
    </header>
  );
}

export default Title