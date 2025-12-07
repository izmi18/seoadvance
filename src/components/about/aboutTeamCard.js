import React from "react"
import Fade from "react-reveal/Fade"

const AboutTeamCard = ({ imgSrc, position }) => {
  return (
     <div
      className="bg-yellow rounded-2xl shadow-lg p-6 w-48 
      flex flex-col items-center gap-4
      transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
    >
      {/* Gambar kecil di atas nama */}
      <div className="w-24 h-24 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={position}
          className="w-full h-full object-contain"
        />
      </div>

      <p className="text-center font-semibold text-gray-800 text-sm">
        {position}
      </p>
    </div>
  )
}

export default AboutTeamCard
