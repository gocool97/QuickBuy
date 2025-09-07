import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Quick Compare
      </h1>
      <p className="text-center mt-4 text-gray-600">
        Compare Zepto prices instantly
      </p>
      <div className="max-w-md mx-auto mt-8">
        <input 
          placeholder="Search products..." 
          className="w-full p-3 border rounded-lg"
        />
        <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
