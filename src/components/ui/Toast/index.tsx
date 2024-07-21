import { CircleCheckIcon, AlertCircleIcon, InfoIcon, TriangleAlertIcon, XIcon } from 'lucide-react';
import { Toast as BaseToast, toast as baseToast } from 'react-hot-toast';

import { VariantProps } from '@/lib/tailwind-variant';

import { Spinner } from '../Spinner';

import { toastStyles } from './Toast.styles';

const ToastIcon = {
  success: CircleCheckIcon,
  error: AlertCircleIcon,
  info: InfoIcon,
  warning: TriangleAlertIcon,
};

type ToastStylesProps = VariantProps<typeof toastStyles>;

type BaseToastProps = ToastStylesProps & {
  title?: string;
  description: string;
  closeable?: boolean;
  loading?: boolean;
  t: BaseToast;
};

type ToastProps = Omit<BaseToastProps, 'variant' | 't'>;

function Toast({ title, description, closeable, loading, t, variant }: BaseToastProps) {
  const Icon = ToastIcon[variant as keyof typeof ToastIcon];

  const onClose = () => baseToast.dismiss(t.id);

  return (
    <div className={toastStyles({ variant })}>
      {loading && <Spinner size="sm" className="mt-0.5" />}
      {Icon && <Icon size={20} />}
      <div className="flex flex-col gap-1 flex-1">
        {title && <div className="font-semibold leading-tight">{title}</div>}
        <div className="text-sm">{description}</div>
      </div>
      {closeable && (
        <button
          type="button"
          className="absolute top-1 right-1 text-black p-1"
          aria-label="close toast"
          onClick={onClose}
        >
          <XIcon size={16} />
        </button>
      )}
    </div>
  );
}

function toastLoading(props: ToastProps) {
  return baseToast.custom((t) => <Toast loading {...props} t={t} />, { duration: Infinity });
}

async function toastPromise<T>(
  promise: Promise<T>,
  { loading, success, error }: { loading: string; success: (data: T) => string; error: string }
) {
  const loadingToast = toastLoading({ description: loading });
  try {
    const data = await promise;
    const successDescription = success(data);
    baseToast.custom((t) => <Toast variant="success" description={successDescription} t={t} />, {
      id: loadingToast,
    });
  } catch (err) {
    baseToast.custom((t) => <Toast variant="error" description={error} t={t} />, {
      id: loadingToast,
    });
  }
}

export const toast = {
  success: (props: ToastProps) =>
    baseToast.custom((t) => <Toast variant="success" {...props} t={t} />),
  error: (props: ToastProps) => baseToast.custom((t) => <Toast variant="error" {...props} t={t} />),
  info: (props: ToastProps) => baseToast.custom((t) => <Toast variant="info" {...props} t={t} />),
  warning: (props: ToastProps) =>
    baseToast.custom((t) => <Toast variant="warning" {...props} t={t} />),
  promise: toastPromise,
};
