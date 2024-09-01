import React from 'react'
import Navbar from '../Components/HomeComponents/Navbar'
import Footer from '../Components/HomeComponents/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-screen-2xl container mx-auto mt-[68px] px-4 md:px-20">
        <div>
          <h1 className="text-3xl  md:text-4xl font-[Agbalumo] text-start  pt-5 pl-5 border-b-2 pb-3">About Us</h1>
        </div>
        <div className="w-full p-2 mt-5">
         <h2 className="text-3xl md:text-4xl font-medium mb-5 text-center text-blue-600">Our Mission</h2>

            <div className="w-full flex mt-10">
            <div className=" sm:w-full md:w-1/2 md:px-7">
         <p className="text-[16px] md:text-[17px] pt-5  text-justify dark:text-slate-300"><strong className="text-[18px]">iBook</strong> is a family-owned chain of nationwide bookstores. Our journey began in 1980 with a kiosk in old city. Today we stand with a national network of artisanal bookstores and a personalized online experience serving pan Pakistan.
          </p>
          <p className="text-[16px] hidden md:block md:text-[17px] pt-5  text-justify dark:text-slate-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ducimus voluptate id quae? Ipsum dolore itaque nam quidem quas commodi minima dolorem, reprehenderit officiis fuga culpa cupiditate velit earum modi vero, eius nisi soluta ex! Excepturi quisquam molestiae quas sit?
          </p>
          <p className="text-[16px] hidden md:block md:text-[17px] pt-5  text-justify dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia laboriosam hic molestias, totam suscipit perferendis est alias iste omnis eveniet quas cum esse quaerat natus nobis saepe vitae harum!
          </p>
            </div>
            <div className="hidden md:block md:w-1/2 text-center">
              <img className="w-fit" src="/favoritebook.jpg" alt="" />
            </div>
            </div>

         <p className="text-[16px] pt-5 text-justify dark:text-slate-300">With over 90,000 original titles, bargain books, gifts, and educational resource materials, we offer our diverse readership a welcoming environment for their intellectual endeavours through book launches, book bazaars, children’s story sessions and more.
         </p>

         <p className="text-[16px] pt-5 text-justify dark:text-slate-300">Committed to engaging with diverse readers of all ages, and organizations on a national scale, we strive to encourage knowledge enhancement and educational attainment for all. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nesciunt dolor quae quos atque pariatur deleniti repellat. Reprehenderit, aliquam!
         </p>

         <img className="w-full my-5" src="/cover2.jpg" alt="cover" />

         <p className="text-[16px] pt-5 text-justify dark:text-slate-300">Passionate about the written word, we aim to serve all those who seek the treasure beyond measure books hold, and endeavor to help create and sustain a nation of lifelong readers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto fugit voluptas ducimus asperiores ex quo aut facere ad tenetur? </p>
        </div>

      </div>
    <Footer/>
    </>
  )
}

export default About