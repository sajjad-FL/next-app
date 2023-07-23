import { NextRequest, NextResponse } from 'next/server';
import { emailQueue } from '../route';

// could be some API route / getServerSideProps / ...
// export default async (req, res) => {
//     await emailQueue.enqueue("sajjad")
// };

export default async function handler(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
      // Process a POST request
    } else {
        // await emailQueue.enqueue("sajjad");
        NextResponse.json({'data': 'job added to the queue'}, {status: 200});
    }
  }