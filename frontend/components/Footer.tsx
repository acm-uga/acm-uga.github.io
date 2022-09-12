import React from 'react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

interface Props {
  partners: []
}

export const Footer: React.FC<Props> = ({ partners }) => {
  return (
    <div className="bg-black text-white">
      <div className="grid md:grid-cols-2 xs:grid-cols-1">
        <div className="mx-24 mt-12">
          <h1 className="footer-header">ACM at UGA</h1>
          <p className="py-6">
            ACM at UGA ACM at UGA is the University of Georgia chapter of the
            Association for Computing Machinery. Our goal is to represent
            computing majors and promote computing-related causes on campus and
            beyond.
          </p>
          <p>
            Email: ugaacm@uga.edu
          </p>
        </div>
        <div className="mx-24 mt-12 text-center">
          <h1 className="footer-header">Partners</h1>
          <div className="py-6">
            {partners.map((partner) => (
              <h1 className="pb-2"><a href={partner["link"]}>{partner["partnerName"]}</a></h1>
            ))}
          </div>

        </div>
      </div>
      <h1 className="text-center mt-12">© ACM at UGA 2022</h1>
    </div>
  )
}
