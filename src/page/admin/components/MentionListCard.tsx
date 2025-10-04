import { Card, CardContent } from "@/components/ui/card";
import { MdBook } from "react-icons/md";

const MentionCart = ({
  className,
  mention,
}: {
  className: string;
  mention: string;
}) => {
  return (
    <div className="w-full flex p-5 justify-around">
      <Card
        className={` bg-gradient-to-r ${className} text-white w-full text-2xl cursor-pointer font-semibold`}
      >
        <CardContent>
          <div>
            <MdBook className=" text-5xl" /> {mention}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const MentionCardList = () => {
  return (
    <div className="flex">
      <MentionCart mention="Droit" className="from-red-700 to-red-600" />
      <MentionCart
        mention="Informatique"
        className="from-violet-800 to-violet-700"
      />
      <MentionCart
        mention="Economie"
        className="from-yellow-500 to-yellow-400"
      />
      <MentionCart
        mention="Agronomie"
        className="from-green-500 to-green-600"
      />
      <MentionCart
        mention="Langue Etrangere Applique"
        className="from-blue-500 to-blue-600"
      />
      <MentionCart
        mention="Science de la Terre"
        className="from-gray-500 to-gray-600"
      />
    </div>
  );
};
