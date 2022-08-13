import Head from 'next/head'
import { Card } from '../components/Card'
import { NavBar } from '../components/NavBar'

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

        <div class="mx-28 grid grid-cols-4 gap-2">
          {events.map((event) => (
            <div>
              <Card
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
