import Head from 'next/head'
import { Card } from '../components/Card'
import { EventCard } from '../components/EventCard'
import { NavBar } from '../components/NavBar'
import { TeamCard } from '../components/TeamCard'
import Image from 'next/Image'

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

const execMembers = [
  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/default_photo.jpeg',
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 xs:grid-cols-1 px-10">
          <div>
            <h1 className="page-header text-center">Social Media</h1>
            <div>
              <div className="flex items-center justify-center">
              <a href="https://discord.gg/AcPYBCDWeA" target="_parent" className="px-2"><Image
                  src="/social_img/discord.png"
                  height={120}
                  width={100}
                /></a>
                
                <a href="https://www.instagram.com/acmuga" target="_parent" className="px-2"><Image
                  src="/social_img/insta.png"
                  height={100}
                  width={100}
                /></a>
              </div>
              <div className="flex items-center justify-center">
              <a href="https://www.instagram.com/acmuga" target="_parent" className="px-2">
                <Image
                  src="/social_img/github.png"
                  
                  height={100}
                  width={100}
                />
                </a>
                <a href="https://www.instagram.com/acmuga" target="_parent" className="px-2">
                <Image
                  src="/social_img/csip.png"
                  
                  height={100}
                  width={100}
                />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="page-header text-center">ACM Membership</h1>
          </div>
        </div>
        <div>
          <h1 className="page-header text-center">Featured Events</h1>
          <div class="mx-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
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
        <div>
          <h1 className="page-header text-center">Resources</h1>
        </div>
        <div>
          <h1 className="page-header text-center">About Us</h1>
          <div class="mx-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
            {execMembers.map((member) => (
              <div>
                <TeamCard
                  name={member.name}
                  position={member.position}
                  imageSrc={member.imageSrc}
                />
              </div>
            ))}
          </div>
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
