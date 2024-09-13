

import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPEN_API_KEY);

export default genAI;