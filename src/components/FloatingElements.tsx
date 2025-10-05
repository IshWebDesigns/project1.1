import React from 'react';

export const FloatingElements = (): JSX.Element => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elementos flutuantes coloridos */}
      <div className="absolute top-[20%] left-[10%] w-8 h-8 bg-blue-500 rounded-lg animate-float-slow" />
      <div className="absolute top-[15%] right-[15%] w-6 h-6 bg-red-500 rounded-full animate-float-medium" />
      <div className="absolute top-[35%] left-[5%] w-10 h-10 bg-green-500 rounded-lg animate-float-fast" />
      <div className="absolute top-[40%] right-[8%] w-7 h-7 bg-purple-500 rounded-full animate-float-slow" />
      <div className="absolute top-[60%] left-[12%] w-9 h-9 bg-yellow-500 rounded-lg animate-float-medium" />
      <div className="absolute top-[70%] right-[20%] w-5 h-5 bg-pink-500 rounded-full animate-float-fast" />
      <div className="absolute top-[25%] left-[50%] w-6 h-6 bg-cyan-500 rounded-lg animate-float-slow" />
      <div className="absolute top-[55%] right-[45%] w-8 h-8 bg-orange-500 rounded-full animate-float-medium" />
      <div className="absolute top-[80%] left-[30%] w-7 h-7 bg-indigo-500 rounded-lg animate-float-fast" />
      <div className="absolute top-[10%] left-[70%] w-5 h-5 bg-teal-500 rounded-full animate-float-slow" />
      
      {/* Elementos de ícones/apps */}
      <div className="absolute top-[30%] right-[25%] w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float-medium">
        <div className="w-6 h-6 bg-blue-400 rounded-md" />
      </div>
      <div className="absolute top-[50%] left-[20%] w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float-fast">
        <div className="w-5 h-5 bg-green-400 rounded-full" />
      </div>
      <div className="absolute top-[75%] right-[35%] w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float-slow">
        <div className="w-6 h-6 bg-red-400 rounded-md" />
      </div>
    </div>
  );
};