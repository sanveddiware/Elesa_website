import React from 'react'
import Carousel from '../../UI/Carousel'
import TrueFocus from '../../UI/Truefocus'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      
      {/* Main title with gradient */}
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4 text-center">
        ELESA
      </h1>

      {/* Subtitle */}
      <div className="text-xl md:text-2xl font-semibold mb-12 text-center text-white">
        <TrueFocus 
          sentence="Integrated with Integrity"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Carousel */}
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
      </div>
    </div>
  )
}

export default Home
