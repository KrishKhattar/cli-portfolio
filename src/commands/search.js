import inquirer from 'inquirer';
import { formatSection, colors } from '../utils/display.js';
import { projects, about } from '../data/data.js';

export async function searchPortfolio() {
  const { searchTerm } = await inquirer.prompt({
    type: 'input',
    name: 'searchTerm',
    message: 'Enter search term:',
  });

  const term = searchTerm.toLowerCase();
  formatSection('Search Results');

  const matchedProjects = projects.filter(project => 
    project.name.toLowerCase().includes(term) || 
    project.description.toLowerCase().includes(term) ||
    project.tech.some(t => t.toLowerCase().includes(term))
  );

  if (matchedProjects.length > 0) {
    console.log(colors.highlight('Projects:'));
    matchedProjects.forEach(project => {
      console.log(colors.white(`\n• ${project.name}`));
      console.log(colors.muted(project.description));
    });
  }

  const matchedSkills = about.skills.filter(skill => 
    skill.toLowerCase().includes(term)
  );

  if (matchedSkills.length > 0) {
    console.log(colors.highlight('\nSkills:'));
    matchedSkills.forEach(skill => console.log(colors.muted(`• ${skill}`)));
  }

  if (matchedProjects.length === 0 && matchedSkills.length === 0) {
    console.log(colors.error('No results found.'));
  }
}