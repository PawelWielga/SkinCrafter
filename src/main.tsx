import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

const App = lazy(() => import('./pages/App'));
const McSkinView = lazy(() => import('./pages/McSkinView'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Ładowanie aplikacji…</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mcskinview" element={<McSkinView />} />
          {/* Catch-all route for 404, redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
