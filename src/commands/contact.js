import { formatSection, colors } from '../utils/display.js';
import { contact } from '../data/data.js';

export async function showContact() {
  formatSection('Contact Info');
  
  Object.entries(contact).forEach(([platform, handle]) => {
    console.log(colors.highlight(`${platform}: `) + colors.white(handle));
  });
}