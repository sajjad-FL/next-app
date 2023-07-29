import { Queue } from "quirrel/next-app"
import axios from 'axios';

export const emailQueue = Queue(
  "api/queues/email", // 👈 the route it's reachable on
  async job => {
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  }
)

export const POST = emailQueue