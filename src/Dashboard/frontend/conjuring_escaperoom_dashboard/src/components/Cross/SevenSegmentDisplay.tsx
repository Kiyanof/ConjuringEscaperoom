import React from 'react';


const SevenSegmentDisplay: React.FC<{ value: number, digits?:number}> = ({ value, digits = 1 }) => {

  const segments = [
    [1, 1, 1, 1, 1, 1, 0], // 0
    [0, 1, 1, 0, 0, 0, 0], // 1
    [1, 1, 0, 1, 1, 0, 1], // 2
    [1, 1, 1, 1, 0, 0, 1], // 3
    [0, 1, 1, 0, 0, 1, 1], // 4
    [1, 0, 1, 1, 0, 1, 1], // 5
    [1, 0, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 0, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1], // 9
  ];

  const countDigits = (num: number): number => {
    const absoluteNum = Math.abs(num);
    const numString = absoluteNum.toString();
    const numDigits = numString.length;
    return numDigits;
  };

  const length = countDigits(value)

  const getDigit = (index: number): number => {
    const absoluteNum = Math.abs(value);
    const numString = absoluteNum.toString();
    let digit = 0
    if(index < length) {
      digit = +numString[length - 1 - index];
    }
    return digit;
  };

  return (
    <div className='flex flex-row-reverse gap-2 justify-center '>
    {
        Array.from({length: digits > length ? digits : length}, (v, k) => (
            <div className='container relative w-6 h-[41px] bg-transparent' key={k}>
                <div className={`${segments[getDigit(k)][0] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute top-0 left-[4px] h-[5px] w-[16px] border-x-2 rounded-3xl `} />
                <div className={`${segments[getDigit(k)][1] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute top-[2px] right-0 h-[18px] w-[2px] border-x-2 rounded-3xl`} />
                <div className={`${segments[getDigit(k)][2] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute top-[21px] right-0 h-[18px] w-[2px] border-x-2 rounded-3xl`} />
                <div className={`${segments[getDigit(k)][3] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute bottom-0 left-[4px] h-[5px] w-[16px] border-x-2 rounded-3xl`} />
                <div className={`${segments[getDigit(k)][4] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute top-[21px] left-0 h-[18px] w-[2px] border-x-2 rounded-3xl`} />
                <div className={`${segments[getDigit(k)][5] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute top-[2px] left-0 h-[18px] w-[2px] border-x-2 rounded-3xl`} />
                <div className={`${segments[getDigit(k)][6] === 1 ? 'border-red-600  bg-red-600' : 'border-gray-800  bg-gray-800'} absolute top-[18px] left-[4px] h-[5px] w-[16px] border-x-2 rounded-3xl`} />
            </div>
        ))
    }
    </div>
  );
};

export default SevenSegmentDisplay;
