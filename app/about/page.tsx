import React from 'react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
}
 
export function Page() {}

const About = () => {
  return (
    <div>About</div>
  )
}

export default About