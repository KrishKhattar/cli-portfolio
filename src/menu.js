import inquirer from 'inquirer';
import { colors } from './utils/display.js';
import { showAbout } from './commands/about.js';
import { showProjects } from './commands/projects.js';
import { showCommunity } from './commands/community.js';
import { showContact } from './commands/contact.js';
import { searchPortfolio } from './commands/search.js';

const menuChoices = [
  'About Me',
  'Projects',
  'Community Work',
  'Contact',
  'Search',
  'Exit'
];

export async function mainMenu() {
  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to explore?',
      choices: menuChoices,
    });

    switch (action) {
      case 'About Me':
        await showAbout();
        break;
      case 'Projects':
        await showProjects();
        break;
      case 'Community Work':
        await showCommunity();
        break;
      case 'Contact':
        await showContact();
        break;
      case 'Search':
        await searchPortfolio();
        break;
      case 'Exit':
        console.log(colors.success('\nThanks for visiting! 👋\n'));
        process.exit(0);
    }

    console.log('\nPress Enter to continue...');
    await inquirer.prompt({ type: 'input', name: 'continue', message: '' });
  }
}