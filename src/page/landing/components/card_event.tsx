import dehonsDayImage from "@/assets/Image-evenement/Dehons_day/event-dehons_day3.jpg";
import gennrossoImage from "@/assets/Image-evenement/event-genrosso.jpg";
import suisseImage from "@/assets/Image-evenement/event-partenariat_esic.jpg";

interface Event {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const dehonsEvent: Event = {
  title: "Dehons DAY",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: dehonsDayImage,
  altText: "Interior Painting",
};

const gennrossoEvent: Event = {
  title: "Gennrosso",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: gennrossoImage,
  altText: "Exterior Painting",
};
const suisseEvent: Event = {
  title: "Suisse",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: suisseImage,
  altText: "Cabinet Painting",
};

export const CardEventSection = () => {
  return (
    <div className="flex flex-col z-20 site-container space-y-20 text-gray-800 dark:text-gray-300 md:space-y-24 lg:space-y-32 ">
      <div className=" flex flex-col-reverse md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-12 p-4 rounded-lg">
          <h3 className="h3 mb-4 text-green-700 dark:text-amber-100">
            {dehonsEvent.title}
          </h3>
          <p className="text-lg">{dehonsEvent.description}</p>
          <p className="mt-4 text-lg ">{dehonsEvent.description}</p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            src={dehonsEvent.imageUrl}
            alt={dehonsEvent.altText}
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:order-2 md:pl-12 p-4 rounded-lg">
          <h3 className="h3 mb-4 text-green-700 dark:text-amber-100">
            {gennrossoEvent.title}
          </h3>
          <p className="text-lg">{gennrossoEvent.description}</p>
          <p className="mt-4 text-lg">{gennrossoEvent.description}</p>
        </div>
        <div className="md:w-1/2 md:order-1">
          <img
            className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            src={gennrossoEvent.imageUrl}
            alt={gennrossoEvent.altText}
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-12 p-4 rounded-lg">
          <h3 className="h3 mb-4 text-green-700 dark:text-amber-100">
            {suisseEvent.title}
          </h3>
          <p className="text-lg">{suisseEvent.description}</p>
          <p className="mt-4 text-lg">{suisseEvent.description}</p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            src={suisseEvent.imageUrl}
            alt={suisseEvent.altText}
          />
        </div>
      </div>
    </div>
  );
};
