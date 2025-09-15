import React from 'react'
import Carousel from '../../UI/Carousel'
import TrueFocus from '../../UI/Truefocus'
import CircularGallery from '../../UI/CircularGallary';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      
      {/* Main title with gradient */}
      <h1 className="text-8xl font-extrabold text-white mb-4 text-center mt-40">
  ELESA
</h1>


      {/* Subtitle */}
      <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
  Integrated with Integrity
</div>


      {/* Carousel
      <div className="w-full max-w-6xl">
        <Carousel
          items={[
            "https://picsum.photos/id/1018/1200/700",
            "https://picsum.photos/id/1015/1200/700",
            "https://picsum.photos/id/1019/1200/700",
          ]}
          interval={3000}
          className="rounded-xl shadow-2xl border-4 border-red-500"
        />
      </div> */}


      {/* About Section */}
<section className="px-4 sm:px-6 py-12 sm:py-16 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
    About Us
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
    ELESA (Electronics Students Association) is a student-driven club 
    that fosters innovation, collaboration, and learning in the field 
    of electronics and technology. Our mission is to empower students 
    with practical knowledge, hands-on projects, and opportunities 
    to showcase their talents in various events and competitions.
  </p>
</section>



      <h1 className="text-6xl mt-20 font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 text-center">
        Activities
      </h1>
      <div style={{ height: "600px", width: "100%", position: "relative" }}>
  <CircularGallery
    bend={1} 
    textColor="#ffffff"
    borderRadius={0.05}
    scrollEase={0.02}
    items={8}   // increase number of images
    radius={5}  // adjust radius to spread images
  />
</div>


    </div>
  )
}

export default Home
