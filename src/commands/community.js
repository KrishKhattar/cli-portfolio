import { formatSection, colors } from '../utils/display.js';
import { community } from '../data/data.js';

export async function showCommunity() {
  formatSection('Community Work');
  
  console.log(colors.highlight('Leadership:'));
  community.leadership.forEach(role => {
    console.log(colors.white(`\n${role.role} at ${role.organization}`));
    console.log(colors.muted(`Impact: ${role.impact}`));
  });

  console.log(colors.highlight('\nContributions:'));
  community.contributions.forEach(contribution => {
    console.log(colors.muted(`• ${contribution}`));
  });

  console.log(colors.highlight('\nHackathons:'));
  community.hackathons.forEach(hackathon => {
    console.log(colors.white(`\n${hackathon.name}`));
    console.log(colors.muted(`Role: ${hackathon.role}`));
  });
}