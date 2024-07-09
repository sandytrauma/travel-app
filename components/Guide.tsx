import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Here we are happy to help you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide you to eternity with the easy path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With our experienced and heartwhelming force of angels you will no longer get lost again, we support offline maps and we can be your guide if you require to explore the unexplored. No need of internet. Invite your friends , relatives and embark with us on the journey to heaven, to the top of the mountain.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className=" flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50 pl-5">180 min</p>
              </div>
              <p className="bold-20 mt-2">Mcloid Ganj, Dharamshala</p>
            </div>
            <div className=" flex w-full flex-col">              
              <p className="regular-16 text-gray-20">Start track</p>                             
              <h2 className="bold-20 mt-2 whitespace-nowrap">Tiruand Hills</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
