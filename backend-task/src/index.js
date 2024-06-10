import app from './app.js'
import { config as dotenv } from 'dotenv';
dotenv();

app.listen(process.env.API_PORT);
console.log(`Server on port ${process.env.API_PORT}`);
