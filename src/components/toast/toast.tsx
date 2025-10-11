import { useEffect } from 'react';
import s from './Toast.module.css';

export type ToastProps = {
  message: string;
  type?: 'info' | 'success' | 'error';
  duration?: number;
  onClose?: () => void;
};

export function Toast({ message, type='info', duration=2000, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return <div className={`${s.toast} ${s[type]}`}>{message}</div>;
}
