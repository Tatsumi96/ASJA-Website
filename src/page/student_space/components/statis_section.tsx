import { useStudentPortalContext } from "../bloc/useStudentSpaceContext";

export const StatisSection = () => {
  const { userName } = useStudentPortalContext();
  return (
    <div className="pt-25 flex w-full justify-between px-10">
      <div className="">
        <p className=" font-semibold text-3xl pb-2 text-green-700">
          {" "}
          Bienvenue, {userName} 👋
        </p>
        <p className="text-gray-500 text-lg">
          {" "}
          Reste concentré, continue d'apprendre
        </p>
      </div>
      <div className="flex gap-10">
        <div className=" flex flex-col">
          <p className=" text-4xl font-semibold pb-2"> 12</p>
          <p className="text-gray-500"> Total cours</p>
        </div>
        <div className=" flex flex-col">
          <p className=" text-4xl font-semibold pb-2"> 9</p>
          <p className="text-gray-500"> cours restant</p>
        </div>
        <div className=" flex flex-col">
          <p className=" text-4xl font-semibold pb-2">
            {" "}
            45 <span className=" font-normal text-gray-500 text-2xl">%</span>
          </p>
          <p className="text-gray-500"> Completé</p>
        </div>
        <div className=" flex flex-col">
          <p className=" text-4xl font-semibold pb-2"> 20</p>
          <p className="text-gray-500"> Total crédit</p>
        </div>
      </div>
    </div>
  );
};
