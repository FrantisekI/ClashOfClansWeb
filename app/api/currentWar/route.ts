// app/api/currentwar/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const clanTag = process.env.CLAN_TAG;
  const apiToken = process.env.API_TOKEN;
    console.log(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(clanTag!)}/currentwar`);
  try {
    const response = await fetch(`https://api.clashofclans.com/v1/clans/%232PG29LY8J/currentwar`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    var EndTime = "0";
    if (data.state != "notInWar") {
      EndTime = data.endTime;
    }

    return NextResponse.json({ data: { state: data.state, EndTime: EndTime} }, { status: 200 });
  } catch (error) {
    console.error('Error fetching clan war data:', error);
    return NextResponse.json({ error: 'Failed to fetch clan war data' }, { status: 500 });
  }
}