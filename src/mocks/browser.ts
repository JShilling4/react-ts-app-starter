import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Expose worker globally for development purposes
if (process.env.NODE_ENV === 'development') {
  window.msw = {
    worker,
  };
}
