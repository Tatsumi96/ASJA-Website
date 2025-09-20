export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-300 transition-colors visible bg-black/30 inset-0 backdrop-blur-sm flex justify-center items-center">
      {children}
    </div>
  );
};
