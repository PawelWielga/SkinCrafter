import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@dihor/skincrafter-editor/styles.css';
import './styles/main.css';
import App from './pages/App';

const pagesRedirectParameter = '__skincrafter_spa';
const baseUrl = import.meta.env.BASE_URL;
const routerBasename = baseUrl === '/' ? undefined : baseUrl.replace(/\/$/, '');

const restorePagesRoute = (): void => {
  const currentUrl = new URL(window.location.href);
  const redirectTarget = currentUrl.searchParams.get(pagesRedirectParameter);

  if (!redirectTarget) {
    return;
  }

  let targetUrl: URL;

  try {
    targetUrl = new URL(redirectTarget, window.location.origin);
  } catch {
    return;
  }

  const baseWithoutTrailingSlash = baseUrl.replace(/\/$/, '');
  const isWithinBase =
    baseUrl === '/' ||
    targetUrl.pathname === baseWithoutTrailingSlash ||
    targetUrl.pathname.startsWith(baseUrl);

  if (targetUrl.origin !== window.location.origin || !isWithinBase) {
    return;
  }

  window.history.replaceState(
    null,
    '',
    `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`
  );
};

restorePagesRoute();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
