import React from 'react';
import { MatrixRain } from './matrix-rain';

export const WhenISayAI: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass p-8 rounded-lg max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            When I Say AI
          </h1>
          <p className="text-xl text-white/90">
            I'm talking about the invisible threads of intelligence
            <br />
            that weave through our digital landscape
          </p>
        </div>
      </div>
    </div>
  );
}; 