// Ensure window.fetch has both getter and setter in iframe environments
try {
  const desc =
    Object.getOwnPropertyDescriptor(window, 'fetch') ||
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
  if (desc && !desc.set && desc.configurable) {
    let _f = window.fetch.bind(window);
    Object.defineProperty(window, 'fetch', {
      get: () => _f,
      set: (fn) => {
        _f = fn;
      },
      configurable: true,
      enumerable: true,
    });
  }
} catch {
  // Ignore in environments where window is immutable
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

