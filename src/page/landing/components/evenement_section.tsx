
import Card_event_section from "./card_event";
export default function evenement_section() {
  return (
	
    <div className="h-screen w-full flex justify-center items-center text-green-700 text-5xl font-bold ">
     <section id="services-side-image" className="py-12">
	<div className="site-container">
		<div className="mx-auto flex max-w-2xl justify-center text-center">
			<h2 className="h2 relative z-20 mx-4">
				<div className="absolute top-0 left-0 hidden md:block">
				</div>
				Lorem ipsum dolor sit amet.
			</h2>
		</div>
		<div className="mt-10 flex flex-col gap-16 md:mt-16 md:gap-24">
      <Card_event_section />
    </div>
	</div>
</section>
	</div>
  );
}
