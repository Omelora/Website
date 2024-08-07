import Link from 'next/link'
import Icon from '@/components/Icon'
import Highlight from '@/components/Highlight'
import Graphic from '@/components/Graphic'

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support Us | Omelora",
  description: "Generated by create next app",
};

export default function EventsPage() {

    const ThousandHighlight = 
    <Highlight toggleElement={<span className='font-semibold ' >1,000</span>}>
      <div className='flex flex-col gap-1 font-medium'>
        Our current goal is to create 1,000 kits of health, learning, and children&apos;s supplies and distribute them to our target locations in southeast Nigeria.
      </div>
    </Highlight>

    return (
        <section className="h-full flex flex-col lg:flex-row gap-10 items-center">
            
        </section>
    )
}