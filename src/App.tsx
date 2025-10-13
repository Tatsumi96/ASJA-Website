import { NotificationWithTimer } from "./components/ui/notification";
import "./index.css";
import { PageRoute } from "./routes";

const AsjaWebApp: React.FC = () => {
  return (
    <>
      {" "}
      <NotificationWithTimer />
      <PageRoute />
    </>
  );
};
export default AsjaWebApp;
