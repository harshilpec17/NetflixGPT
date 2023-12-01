import OpenAI from "openai";
import { OPEN_AI } from "./constants";

export const openai = new OpenAI({
  apiKey: OPEN_AI,
  dangerouslyAllowBrowser: true,
});
