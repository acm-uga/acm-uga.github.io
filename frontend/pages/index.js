import Head from 'next/head';
import { Card } from '../components/Card';
import { EventCard } from '../components/EventCard';
import { NavBar } from '../components/NavBar';

const events = [
  {
    title: 'Google + UGA CS',
    imageSrc: '/googleuga6.png',
    description:
      "Join ACM at UGA's streaming of Google's CS-wide talk to learn more about how to prepare for careers in technology!",
    date: 'MAR 31, 2022',
  },
  {
    title: 'Google + UGA CS',
    imageSrc: '/googleuga6.png',
    description:
      "Join ACM at UGA's streaming of Google's CS-wide talk to learn more about how to prepare for careers in technology!",
    date: 'MAR 31, 2022',
  },
  {
    title: 'Google + UGA CS',
    imageSrc: '/googleuga6.png',
    description:
      "Join ACM at UGA's streaming of Google's CS-wide talk to learn more about how to prepare for careers in technology!",
    date: 'MAR 31, 2022',
  },
  {
    title: 'Google + UGA CS',
    imageSrc: '/googleuga6.png',
    description:
      "Join ACM at UGA's streaming of Google's CS-wide talk to learn more about how to prepare for careers in technology!",
    date: 'MAR 31, 2022',
  },
  {
    title: 'Google + UGA CS',
    imageSrc: '/googleuga6.png',
    description:
      "Join ACM at UGA's streaming of Google's CS-wide talk to learn more about how to prepare for careers in technology!",
    date: 'MAR 31, 2022',
  },
]

export default function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '4em' }}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <div class="p-10">  
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
        <div class="mx-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          {events.map((event) => (
            <div>
              <EventCard
                title={event.title}
                imageSrc={event.imageSrc}
                description={event.description}
                date={event.date}
              />

            </div>
          ))}
        </div>
      </div>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
