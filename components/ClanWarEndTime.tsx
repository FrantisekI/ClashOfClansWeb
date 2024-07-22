'use client';
import React, { useState, useEffect } from 'react';


const ClanWarEndTime: React.FC = () => {
  const [warEndTime, setWarEndTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchClanWarEndTime = async () => {
      try {
        const response = await fetch('/api/currentwar', { method: 'GET' });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const endTime = new Date(data.data.EndTime);
        setWarEndTime(endTime.toLocaleString());
      } catch (error) {
        console.error('Error fetching clan war end time:', error);
        setWarEndTime('Failed to load');
      }
    };

    fetchClanWarEndTime();
  }, []);

  return (
    <div>
      {warEndTime ? (
        <p>The Clan War will end on {warEndTime}</p>
      ) : (
        <p>Loading Clan War end time...</p>
      )}
    </div>
  );
};

export default ClanWarEndTime;