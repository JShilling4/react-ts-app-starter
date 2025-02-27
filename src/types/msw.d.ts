import { SetupWorker } from 'msw/browser';

declare global {
  interface Window {
    msw: {
      worker: SetupWorker;
    };
  }
}
