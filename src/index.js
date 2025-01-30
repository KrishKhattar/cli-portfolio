import { showTitle } from './utils/display.js';
import { mainMenu } from './menu.js';
import { checkEasterEgg } from './commands/easterEggs.js';
import { colors } from './utils/display.js';

async function welcome() {
  await showTitle('KK\'s Portfolio');
  console.log(colors.secondary('\nWelcome to my interactive portfolio! Use arrow keys to navigate.\n'));
}

// Handle easter eggs
process.stdin.on('data', async (data) => {
  const command = data.toString().trim();
  await checkEasterEgg(command);
});

// Start the application
await welcome();
await mainMenu();