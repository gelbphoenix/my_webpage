import { Toast as ToastFB } from 'flowbite-react';
import { db } from 'Assets/database';

const Toast = () => {
  return (
    <ToastFB className="fixed inset-x-6 top-[85dvh] z-10 outline outline-2 outline-stone-600 dark:outline-stone-300 text-[#001b5e] dark:text-stone-300">
      {db.toast[0].icon}
      <div className="ml-3 flex flex-col">
        <span className="mb-1 text-lg font-bold">{db.toast[0].title}</span>
        <span className="text-sm font-normal">{db.toast[0].description}</span>
      </div>
      <ToastFB.Toggle />
    </ToastFB>
  );
};

export default Toast;
