import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function Clock() {
  const [tehranTime, setTehranTime] = useState('');

  useEffect(() => {
    // Function to get the current time in Tehran timezone
    const getTehranTime = () => {
      const tehranTimezone = 'Asia/Tehran';
      const options = {
        timeZone: tehranTimezone,
        hour: '2-digit', // Set hour to '2-digit' for two-digit format
        minute: '2-digit', // Set minute to '2-digit' for two-digit format
        second: '2-digit', // Set second to '2-digit' for two-digit format
        hour12: false,
      };
      const formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
      return formattedTime;
    };

    // Update the Tehran time every second
    const intervalId = setInterval(() => {
      setTehranTime(getTehranTime());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className='flex flex-row-reverse gap-3 items-center'>
        <FontAwesomeIcon className='text-indigo-800 dark:text-indigo-400' icon={faClock} />
      <p className='mt-1 tracking-[0.2em]'>{tehranTime}</p>
    </span>
  );
}

export default Clock;
