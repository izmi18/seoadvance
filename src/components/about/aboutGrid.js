import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="../img/pssnew.png"
        position="PSS"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="../img/JatiMetanaEnergi.png"
        position="PT.JatiMetanaEnergi"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="../img/TahtaMasRaya.png"
        position="PT.TahtaMasRaya"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
