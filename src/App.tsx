import React, { useState } from "react";

const App: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(parseFloat(calculatedBmi.toFixed(2)));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">BMI Calculator</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Weight (kg): {weight}</label>
          <input
            type="range"
            min="30"
            max="200"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Height (cm): {height}</label>
          <input
            type="range"
            min="100"
            max="250"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Calculate BMI
        </button>

        {bmi !== null && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">Your BMI: <span className="font-bold">{bmi}</span></p>
            <p className="text-sm text-gray-600">
              {bmi < 18.5
                ? "Underweight"
                : bmi < 24.9
                ? "Normal weight"
                : bmi < 29.9
                ? "Overweight"
                : "Obesity"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;