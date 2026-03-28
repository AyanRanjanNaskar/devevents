export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    description: string;
}


export const events: EventItem[] = [
  {
    title: "Google I/O 2024",
    image: "/images/event1.png",
    slug: 'event-1',
    location: 'San Francisco, CA',
    date: '2022-01-01',
    time: '12:00 PM',
    description: 'Event 1 description',
    
  },
  {
    title: "AWS re:Invent 2024",
    image: "/images/event2.png",
    slug: 'event-2',
    location: 'Las Vegas, NV',
    date: '2022-01-01',
    time: '1:00 PM',
    description: 'Event 2 description',
    
  },
  {
    title: "React Conf 2024",
    image: "/images/event3.png",
    slug: 'event-3',
    location: 'New York, NY',
    date: '2022-01-01',
    time: '2:00 PM',
    description: 'Event 3 description',
    
  },
  {
    title: "Microsoft Build 2024",
    image: "/images/event4.png",
    slug: 'event-4',
    location: 'Seattle, WA',
    date: '2022-01-01',
    time: '8:00 AM',
    description: 'Event 4 description',
    
  },
  {
    title: "Apple WWDC 2024",
    image: "/images/event5.png",
    slug: 'event-5',
    location: 'Cupertino, CA',
    date: '2022-01-01',
    time: '10:00 AM',
    description: 'Event 5 description',
    
  },
  {
    title: "ETHGlobal Hackathon",
    image: "/images/event6.png",
    slug: 'event-6',
    location: 'San Francisco, CA',
    date: '2022-01-01',
    time: '3:00 PM',
    description: 'Event 6 description',
    
  }
];
