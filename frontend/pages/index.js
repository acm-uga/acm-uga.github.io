import Head from 'next/head'
import { Card } from '../components/Card'
import { EventCard } from '../components/EventCard'
import { NavBar } from '../components/NavBar'
import { TeamCard } from '../components/TeamCard'
import { Footer } from '../components/Footer'
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

const partners = [
  { 
    partnerName: "ACM-W girls.code()", 
    link: "https://www.instagram.com/girlsdotcode/"
  },
  {
    partnerName: "Society for Cyber Security",
    link: "https://ugascs.com/"
  },
  {
    partnerName: "CSIP",
    link: "https://github.com/acm-uga/archive",
  },
  {
    partnerName: "UGAHacks",
    link: "https://ugahacks.com/"
  },
  {
    partnerName: "GDG Athens",
    link: "https://gdg.community.dev/gdg-athens-1/"
  },
]

const execMembers = [
  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },
  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/matthew-tzou.png',
  },  {
    name: 'Matthew Tzou',
    position: 'Web Dev / Graphics Chair',
    imageSrc: '/member_img/helium-yang.png',
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
                <a
                  href="https://discord.gg/AcPYBCDWeA"
                  target="_parent"
                  className="px-2"
                >
                  <Image
                    src="/social_img/discord.png"
                    height={120}
                    width={100}
                  />
                </a>

                <a
                  href="https://www.instagram.com/acmuga"
                  target="_parent"
                  className="px-2"
                >
                  <Image src="/social_img/insta.png" height={100} width={100} />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="https://www.instagram.com/acmuga"
                  target="_parent"
                  className="px-2"
                >
                  <Image
                    src="/social_img/github.png"
                    height={100}
                    width={100}
                  />
                </a>
                <a
                  href="https://www.instagram.com/acmuga"
                  target="_parent"
                  className="px-2"
                >
                  <Image src="/social_img/csip.png" height={100} width={100} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="page-header text-center">ACM Membership</h1>

            <div className="flex justify-center">
              <button class="btn bg-bulldog-red py-2 px-2 rounded">
                <p className="text-white">Pay ACM Member Dues Here!</p>
              </button>
            </div>
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
          <div className="mx-48">
            <h1 className="page-header text-center">About Us</h1>

            <h1 className="text-center font-semibold">What is ACM?</h1>
            <p>
              The Association for Computing Machinery is the world's largest
              society dedicated to computing. ACM at UGA is a student chapter of
              the Association for Computing Machinery that is committed to
              promoting computing causes at UGA. Our meetings have included
              workshops, public speakers, interview preparation, and other
              topics. In addition, our meetings are open to all students
              regardless of area of study and experience!
            </p>
            <h1 className="text-center font-semibold">How can I attend ACM meetings?</h1>
            <p>
              ACM at UGA hosts hybrid meetings every Thursday at 6 PM. In-person
              attendance is offered in Room 328 at Boyd Graduate Research
              Center, and virtual attendance is offered over Discord. No
              registration or reservation is necessary to attend!
            </p>
            <h1 className="text-center font-semibold">Meet the Team</h1>
          </div>

          <div class="mx-24 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
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
      <Footer partners={partners} />
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
