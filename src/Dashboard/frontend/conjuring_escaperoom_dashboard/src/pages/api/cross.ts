import { NextApiRequest, NextApiResponse } from 'next';

interface CrossData {
  rssi: string;
  battery: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const {rssi, battery}: CrossData = JSON.parse(req.body); // Extract the RSSI data from the request body

      // Process the RSSI data (e.g., store it in a database or perform actions)
      console.log('Received RSSI:', rssi);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error handling RSSI data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
