import { setupServer } from 'msw/node';
import { handlers } from './handlers/handlers';

export const server = setupServer(...handlers);

// handlers.forEach((obj) => console.log(obj));
