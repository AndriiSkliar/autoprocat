import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = { position: 'bottom-right', autoClose: 1000 };

export const showWarningToast = (message) => {
  toast.warning(message, toastOptions);
};

export const showSuccessToast = (message) => {
  toast.success(message, toastOptions);
};
