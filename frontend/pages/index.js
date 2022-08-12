import Head from 'next/head'
import {Card} from '../components/Card';

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card title="TypeScript Tutorial" description="TS is awesome if you know what to do!!" />
      <style jsx>{`
        
      `}</style>

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
