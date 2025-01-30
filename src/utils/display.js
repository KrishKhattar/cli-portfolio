import chalk from 'chalk';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

export const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function showTitle(text) {
  console.clear();
  const title = figlet.textSync(text, { font: 'Standard' });
  console.log(chalk.blue(title));
}

export async function showLoadingSpinner(text) {
  const spinner = createSpinner(text).start();
  await sleep();
  spinner.success();
}


export function formatSection(title) {
  console.clear();
  console.log(chalk.blue(`\n=== ${title} ===\n`));
}

export const colors = {
  primary: chalk.blue,
  secondary: chalk.cyan,
  highlight: chalk.yellow,
  success: chalk.green,
  error: chalk.red,
  muted: chalk.gray,
  white: chalk.white,
  rainbow: chalk.rainbow
};