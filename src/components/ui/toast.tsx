import React, { createContext, useContext, useCallback, useState, useMemo } from 'react';

type ToastType = 'success' | 'error' | 'info';

export type Toast = {
  id: number;
  type: ToastType;
  message: string;
  timeout?: number;
};

type ToastContextType = {
  push: (t: Omit<Toast, 'id'>) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider />');
  return ctx;
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    const toast: Toast = { id, timeout: 3000, ...t };
    setToasts((prev) => [...prev, toast]);
    const ttl = toast.timeout ?? 3000;
    if (ttl > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id != id));
      }, ttl);
    }
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((x) => x.id !== id))} />
    </ToastContext.Provider>
  );
};

export const ToastContainer: React.FC<{ toasts: Toast[]; onClose: (id: number) => void }> = ({ toasts, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={
            'pointer-events-auto min-w-[220px] max-w-[420px] rounded-xl shadow-lg px-4 py-3 text-sm ' +
            (t.type === 'success'
              ? 'bg-green-600 text-white'
              : t.type === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-gray-800 text-white')
          }
        >
          <div className="flex items-start gap-3">
            <span aria-hidden className="mt-0.5">
              {t.type === 'success' ? '✅' : t.type === 'error' ? '⚠️' : 'ℹ️'}
            </span>
            <p className="flex-1">{t.message}</p>
            <button
              type="button"
              onClick={() => onClose(t.id)}
              className="ml-2 opacity-80 hover:opacity-100 focus:outline-none"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
