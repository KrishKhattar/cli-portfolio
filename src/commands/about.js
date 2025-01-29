import { formatSection, showLoadingSpinner, colors } from '../utils/display.js';
import { about } from '../data/data.js';

export async function showAbout() {
  formatSection('About Me');
  await showLoadingSpinner('Loading profile...');

  console.log(colors.white(`Name: ${about.name}`));
  console.log(colors.white(`Role: ${about.role}`));
  console.log(colors.white(`Focus: ${about.focus}`));
  
  console.log(colors.highlight('\nSkills:'));
  about.skills.forEach(skill => console.log(colors.muted(`• ${skill}`)));
}