import { NextApiRequest, NextApiResponse } from 'next';
import { SHA1 } from 'crypto-js';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { password } = req.body; // You can send the password to check in the request body

    const sha1Hash = SHA1(password).toString();
    const firstFiveChars = sha1Hash.substring(0, 5);
    const nextCharsHash = sha1Hash.substring(5);

    try {
      const response = await axios.get(`https://api.pwnedpasswords.com/range/${firstFiveChars}`);
      const lines = response.data.split('\n');

      for (const line of lines) {
        const parts = line.split(':');
        if (parts[0] === nextCharsHash) {
          const breachCount = parseInt(parts[1]);
          res.status(200).json({ breachCount });
          return;
        }
      }

      // No breach found
      res.status(200).json({ breachCount: 0 });
    } catch (error) {
      console.error('Error checking breaches:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
