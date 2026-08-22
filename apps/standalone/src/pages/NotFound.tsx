import React from 'react';
import { Link } from 'react-router-dom';
import AppShell from '../components/appShell';

const NotFound: React.FC = () => (
  <AppShell>
    {({ t }) => (
      <main className="flex-1 min-h-0 flex items-center justify-center p-4">
        <section
          className="option-card bg-white shadow p-6 pixel-border max-w-xl w-full text-center"
          aria-labelledby="not-found-title"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2">
            404
          </p>
          <h1 id="not-found-title" className="text-2xl font-bold text-gray-800 mb-3">
            {t('notFound.title')}
          </h1>
          <p className="text-gray-600 mb-6">{t('notFound.description')}</p>
          <Link
            to="/"
            className="inline-block pixel-button p-3 pixel-border bg-green-700 hover:bg-green-800 text-white"
          >
            {t('notFound.backToCreator')}
          </Link>
        </section>
      </main>
    )}
  </AppShell>
);

export default NotFound;
