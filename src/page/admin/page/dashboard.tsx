import { MentionCardList } from "../components/MentionListCard";
import { ChartPie } from "../components/PieChart";

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full p-4  bg-white  dark:bg-zinc-800 transition-all h-full duration-500 ">
      <div className="flex  justify-around gap-5">
        <MentionCardList />
        <ChartPie />
      </div>
    </div>
  );
};
