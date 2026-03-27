import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    description: string;
}

const EventCard = ({ title, image, slug, location, date, time, description}: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
        <Image src={image} alt={title} width={410} height={300} className="poster"/>
        <p className="title">{title}</p>
        <p className="location">{location}</p>
        <p className="date">{date}</p>
        <p className="time">{time}</p>
        <p className="description">{description}</p>
    </Link>
  )
}

export default EventCard