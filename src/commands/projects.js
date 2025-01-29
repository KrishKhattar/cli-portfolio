import { formatSection, colors } from '../utils/display.js';
import { projects } from '../data/data.js';

export async function showProjects() {
  formatSection('Projects');
  
  projects.forEach((project, index) => {
    console.log(colors.highlight(`\n${index + 1}. ${project.name}`));
    console.log(colors.white(project.description));
    console.log(colors.primary('\nFeatures:'));
    project.features.forEach(feature => console.log(colors.muted(`• ${feature}`)));
    console.log(colors.secondary(`\nTech: ${project.tech.join(', ')}`));
  });
}