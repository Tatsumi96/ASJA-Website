export const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-200">
          404
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          Page Not Found
        </p>
        <a
          href="/"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};
