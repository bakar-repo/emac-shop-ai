import React, { useState, useEffect, useRef, useCallback } from 'react';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, value, onChange }) => {
  const [minVal, setMinVal] = useState(value.min);
  const [maxVal, setMaxVal] = useState(value.max);
  const minValRef = useRef(minVal);
  const maxValRef = useRef(maxVal);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  
  useEffect(() => {
    setMinVal(value.min);
    setMaxVal(value.max);
  }, [value]);

  useEffect(() => {
    minValRef.current = minVal;
    maxValRef.current = maxVal;
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);
  
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(value);
  };

  const handleMouseUp = () => {
    onChange({ min: minValRef.current, max: maxValRef.current });
  };

  return (
    <div className="pt-2">
      <div className="relative h-4 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="absolute w-full h-1"
          style={{ zIndex: minVal > maxVal - 10 ? 5 : 3 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="absolute w-full h-1"
          style={{ zIndex: 4 }}
        />

        <div className="relative w-full h-1 rounded-md bg-gray-300">
            <div ref={range} className="absolute h-1 rounded-md bg-blue-600"></div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">${minVal}</span>
        <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">${maxVal}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;