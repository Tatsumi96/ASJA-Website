import { Card, CardContent } from "@/components/ui/card";
import { MdBook } from "react-icons/md";

export const MentionCart = ({
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
