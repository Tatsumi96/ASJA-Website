import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Button
            onClick={goBack}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
};
