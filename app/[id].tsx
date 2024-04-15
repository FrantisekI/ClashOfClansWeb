// pages/war-events/[id].tsx
import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'node-fetch'

interface WarEvent {
  id: string
  clan: {
    name: string
  }
  opponent: {
    name: string
  }
  attacksCount: number
  defenseCount: number
  stars: number
  destruction: number
  result: string
}

interface WarEventPageProps {
  warEvent: WarEvent
}

export const getStaticProps: GetStaticProps<WarEventPageProps> = async ({ params }) => {
  const response = await fetch(
    `https://api.clashofclans.com/v1/clans/YOUR_CLAN_TAG/warlog/${params?.id}`,
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN'
      }
    }
  )
  const warEvent: WarEvent = await response.json() as any;

  return {
    props: {
      warEvent
    }
  }
}
const CLAN_TAG = '#2PG29LY8J'.replace('#', '%23');
const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJmYWQwNTNhLTE1NDktNDE5YS05ZWUwLWY3NjA2OTdmNGMzOCIsImlhdCI6MTY5NDA5NjUwNiwic3ViIjoiZGV2ZWxvcGVyL2ZlMjViNjQ3LTliNjEtZGMzYi1hMzBlLTQ0ODIwMjdjMGFjZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgxLjI1LjI4LjIwIl0sInR5cGUiOiJjbGllbnQifV19.vO5eDkILD2fLdCDWfPeaB5EOVUIMu8QY0FxxV5fSA_U6osVAAxFjSGuBO1DY6kF-v0s-xM6MuyPcJrxb8JFYxQ';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://api.clashofclans.com/v1/clans/${CLAN_TAG}/warlog`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`
    }
  })
  const { items }: { items: { id: string }[] } = await response.json() as any;

  return {
    paths: items.map((war) => ({
      params: { id: war.id.toString() }
    })),
    fallback: false
  }
}

export default function WarEventPage({ warEvent }: WarEventPageProps) {
  return (
    <div>
      <h1>War Event: {warEvent.clan.name} vs {warEvent.opponent.name}</h1>
      <p>Attacks: {warEvent.attacksCount}</p>
      <p>Defenses: {warEvent.defenseCount}</p>
      <p>Stars: {warEvent.stars}</p>
      <p>Destruction: {warEvent.destruction}%</p>
      <p>Result: {warEvent.result}</p>
    </div>
  )
}