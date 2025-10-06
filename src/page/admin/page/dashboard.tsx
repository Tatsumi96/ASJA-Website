import { AddUserAndDocument } from "../components/AddUserAndDocument";
import { MentionCardList } from "../components/MentionListCard";
import { ChartPie } from "../components/PieChart";

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full p-4  bg-zinc-100  dark:bg-zinc-900 transition-all h-full duration-500 ">
      <div className="flex  justify-around">
        <MentionCardList />
        <ChartPie />
      </div>
      <AddUserAndDocument />
    </div>
  );
};
