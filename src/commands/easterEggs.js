import { colors, sleep } from '../utils/display.js';
import { easterEggs } from '../data/data.js';

export async function checkEasterEgg(command) {
  const egg = easterEggs.find(e => e.command === command.toLowerCase());
  if (egg) {
    console.clear();
    console.log(colors.rainbow(egg.message));
    await sleep(2000);
  }
}