import { Navbar } from "./nav-bar";
import { Footer } from "./footer";
import  image  from "@/assets/Image-evenement/event-Hackathon.jpg";
/*
interface ImageUrl {
  mentionImage: string;
  evnentImage: string;
  parcourImage: string;
}
interface Textual{
  title: string;
  description: string;
}
interface CategorieParcour{
  parcour: string;
}
type GlobalComponentProps = {
  ImageUrl: ImageUrl;
  Textual: Textual;
  CategorieParcour: CategorieParcour;
};
*/
export const DispositionPresentationFilieres = ({/*_props: GlobalComponentProps*/}) => {
  return <div>
   <div className="flex flex-col lg:flex-row bg-white dark:bg-zinc-900 transition-all duration-500 lg:h-screen w-full">
  <div className="flex justify-center items-center p-6 lg:w-1/2">
    <img
      src={image}
      alt="illustration"
      className="w-[300px] h-[250px] md:w-[400px] md:h-[350px] object-cover object-center rounded-lg border-2 border-red-500"
    />
  </div>
</div>
    <div>
      <h1>Informatique</h1>
    </div>
    <div>
      <h1></h1>
    </div>
    <Navbar />
    <Footer />
  </div>;
};
