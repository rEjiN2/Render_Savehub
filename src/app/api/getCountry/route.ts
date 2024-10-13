import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const country = req.headers['x-user-country'] || 'Unknown';
  res.status(200).json({ country });
}