import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "@/assets/derapr.jpg"

type Temoin = {
    name: string;
    description: string;
  };

export const TestimonySection = () => {
    const temoin: Temoin[] = [
        { name: "Marie Rasoamalala", description: "Grâce à la formation de qualité à ASJA, j'ai pu décrocher un poste de développeuse web dans une entreprise internationale. Les professeurs sont excellents et le programme est très complet." },
        { name: "David Andriamanana", description: "L'université ASJA m'a donné toutes les compétences nécessaires pour réussir dans le domaine de l'informatique. Je travaille maintenant comme chef de projet IT et je n'aurais pas pu y arriver sans cette formation." },
        { name: "Paul Rakotondrabe", description: "Formation excellente qui m’a permis de lancer ma propre startup tech. Les compétences acquises à ASJA sont directement applicables dans le monde professionnel." },
        { name: "Sarah Randrianarisoa", description: "La formation à ASJA m’a permis de découvrir ma passion pour la cybersécurité. Aujourd’hui, je travaille comme analyste sécurité dans une entreprise locale. Les cours pratiques m’ont énormément aidée à progresser rapidement." },
        { name: "Jean Michel Ravelomanana", description: "Grâce à l’accompagnement des enseignants d’ASJA, j’ai pu créer ma première application mobile dès la deuxième année. L’université m’a donné confiance et les bases solides pour me lancer dans le développement." },
      ];
        return (
            <div className="flex flex-col h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                <h1 className="text-6xl font-bold text-green-700 p-20">Témoignage</h1>
                <Carousel
                opts={{
                     align: "start",
                }}
                className="w-full max-w-2/3"
                >
                    <CarouselContent>
                            {temoin.map((temoin, key) => (
                        <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex h-120  flex-col aspect-square items-center justify-center">
                                    <div className="rounded-[50%] h-40 w-40 overflow-hidden border-4 border-gray-300">
                                        <img className="" src={Image} alt="" />
                                    </div>
                                    <div className="text-center p-7" >
                                        <h3 className="text-lg font-semibold pb-5">{temoin.name}</h3>
                                        <p className="text-md ">{temoin.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
          )
        }