import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";


const Page = () => {
	return (
		<section>
			<h1 className="text-center">
				The Hub For Every Dev <br /> Event You Mustn't Miss!
			</h1>
			<p className="text-center mt-4">
				Hackathons, Meetups, and Conferences for Developers all in one
				place
			</p>
			<ExploreBtn />
			<div className="mt-20 space-y-7">
				<h3 className="text-center">Featured Events</h3>

				<ul className="events">
					{events.map((event) => (
						<li key={event.title}>
							<EventCard {...event}/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Page;
