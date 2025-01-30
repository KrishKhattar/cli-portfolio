import { formatSection, colors } from '../utils/display.js';
import { initializeAI, AI_CONFIG } from '../config/ai.config.js';
import readline from 'readline';

export async function talkToMyAI() {
  formatSection('Talk to My AI');
  console.log(colors.highlight("\nLet's chat! Type 'exit' to end the conversation.\n"));

  const model = initializeAI();
  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: "User interacting with the model, expecting Krish's responses." }]
      },
      {
        role: 'model',
        parts: [{ text: AI_CONFIG.masterPrompt }]
      }
    ]
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askQuestion = () => {
    return new Promise((resolve) => {
      rl.question(colors.primary('You: '), resolve);
    });
  };

  while (true) {
    const input = await askQuestion();
    
    if (input.toLowerCase() === 'exit') {
      console.log(colors.highlight('\nGoodbye! Have a great day!\n'));
      rl.close();
      break;
    }

    try {
      const result = await chat.sendMessage([{ text: input }]);
      const response = await result.response;
      console.log(colors.success('\nKK AI: ' + response.text() + '\n'));
    } catch (error) {
      console.log(colors.error('\nError: Something went wrong. Please try again.\n'));
      console.error(error); 
    }
  }
}