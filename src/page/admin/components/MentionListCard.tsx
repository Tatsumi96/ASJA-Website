import { Card, CardContent } from "@/components/ui/card";
import { BarChartGraph } from "./BarChart";

const MentionCart = ({
  className,
  mention,
  color,
}: {
  className: string;
  mention: string;
  color: string;
}) => {
  return (
    <div className="w-full flex p-5 justify-around">
      <Card
        className={` ${className} text-black  bg-white dark:bg-transparent  dark:text-white  w-full text-2xl cursor-pointer font-semibold`}
      >
        <CardContent>
          <p className=" text-3xl">{mention}</p>
          <p className=" text-lg py-7">3500 etudiants</p>
          <BarChartGraph color={color} />
        </CardContent>
      </Card>
    </div>
  );
};

export const MentionCardList = () => {
  return (
    <div className="flex">
      <Card className=" flex flex-row">
        {" "}
        <MentionCart
          mention="Droit"
          className="border-red-600 border-4"
          color="#dc2626"
        />
        <MentionCart
          mention="Informatique"
          className="border-violet-600 border-4"
          color="#7c3aed"
        />
        <MentionCart
          mention="Economie"
          className="border-yellow-600 border-4"
          color="#d97706"
        />
        <MentionCart
          mention="Agronomie"
          className="border-green-600 border-4"
          color="#059669"
        />
        <MentionCart
          mention="Langue Etrangere Applique"
          className="border-blue-600 border-4"
          color="#2563eb"
        />
        <MentionCart
          mention="Science de la Terre"
          className="border-gray-600 border-4"
          color="#4b5563"
        />
      </Card>
    </div>
  );
};
