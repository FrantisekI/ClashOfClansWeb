'use client';
import React, { useState, useEffect } from 'react';

interface ClanWarResponse {
  war: {
    endTime: string;
  };
}

const ClanWarEndTime: React.FC = () => {
  const [warEndTime, setWarEndTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchClanWarEndTime = async () => {
      const clanTag = process.env.CLAN_TAG;
      const apiToken = process.env.API_TOKEN;

      const response = await fetch(`https://api.clashofclans.com/v1/clans/${clanTag}/currentwar`, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ClanWarResponse = await response.json();
      const endTime = new Date(data.war.endTime);
      setWarEndTime(endTime.toLocaleString());
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