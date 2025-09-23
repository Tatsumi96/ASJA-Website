import image_Dehons_DAY from "@/assets/Image-evenement/Dehons_day/event-dehons_day3.jpg";
import image_Gennrosso from "@/assets/Image-evenement/event-genrosso.jpg";
import image_Suisse from "@/assets/Image-evenement/event-partenariat_esic.jpg";

export const CardEventSection = () => {
  class item {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    constructor(title: string, description: string, imageUrl: string, altText: string) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.altText = altText;
    }
  }

  const item1 = new item(
    "Dehons DAY",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_Dehons_DAY,
    "Interior Painting"
  );
  const item2 = new item(
    "Gennrosso",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_Gennrosso,
    "Exterior Painting"
  );
  const item3 = new item(
    "Suisse",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_Suisse,
    "Cabinet Painting"
  );

  return (
    <div className="flex flex-col z-20 site-container space-y-20 text-gray-800 dark:text-gray-300 md:space-y-24 lg:space-y-32 ">
      <div className="relative flex flex-col-reverse md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-12 p-4 rounded-lg">
          <h3 className="h3 mb-4 text-green-700 dark:text-amber-100">{item1.title}</h3>
          <p className="text-lg">{item1.description}</p>
          <p className="mt-4 text-lg ">{item1.description}</p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            src={item1.imageUrl}
            alt={item1.altText}
          />
        </div>
      </div>

      
      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:order-2 md:pl-12 p-4 rounded-lg">
          <h3 className="h3 mb-4 text-green-700 dark:text-amber-100">{item2.title}</h3>
          <p className="text-lg">{item2.description}</p>
          <p className="mt-4 text-lg">{item2.description}</p>
        </div>
        <div className="md:w-1/2 md:order-1">
          <img
            className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            src={item2.imageUrl}
            alt={item2.altText}
          />
        </div>
      </div>

    
      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-12 p-4 rounded-lg">
          <h3 className="h3 mb-4 text-green-700 dark:text-amber-100">{item3.title}</h3>
          <p className="text-lg">{item3.description}</p>
          <p className="mt-4 text-lg">{item3.description}</p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            src={item3.imageUrl}
            alt={item3.altText}
          />
        </div>
      </div>
    </div>
  );
}
