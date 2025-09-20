import { Toaster } from "sonner";

export const NotificationWithTimer = () => {
  return (
    <Toaster
      position="top-right"
      richColors
      visibleToasts={3}
      duration={3000}
      expand={true}
      theme="light"
      toastOptions={{
        classNames: {
          toast: "font-sans rounded-lg border",
          title: "font-semibold text-xl",
          description: "text-lg opacity-90",
        },
      }}
    />
  );
};

// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };

//  {toast.success(
//       <div>
//         <div className="font-medium">Action réussie !</div>
//         <div className="w-full bg-gray-200 h-1 mt-2">
//           <div
//             className="bg-green-500 h-1"
//             style={{
//               animation: "progress 3s linear forwards",
//             }}
//           />
//         </div>
//       </div>,
//       {
//         duration: 3000, // Disparaît après 3 secondes
//       }
//     )}
