export const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-zinc-900">
      <div className="text-center">
        <h1 className="text-[100px] lg:text-[200px] font-bold text-gray-800 dark:text-zinc-200">
          404
        </h1>
        <p className="text-xl pb-10 text-gray-600 dark:text-gray-400">
          Page Not Found
        </p>
        <a
          href="/"
          className="px-4 py-2 text-gray-800 border-2 dark:border-white border-gray-800 bg-white rounded-sm hover:bg-green-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};
