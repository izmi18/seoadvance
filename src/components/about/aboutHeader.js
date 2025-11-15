import React from "react"
import Fade from "react-reveal/Fade"
import Image3 from "../../images/Logo-jatipadi.jpg"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto pt-32 text-center flex flex-col items-center">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img
            alt="Logo Jatipadi"
            src={Image3}
            className="mx-auto w-74 h-auto object-contain"
          />
        </div>

        {/* Teks di tengah */}
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            What is Jati Padi?
          </h1>
          <h2 className="text-brown text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl mt-4">
            Mengalirkan Kebaikan, Mewujudkan Kemajuan — Delivering Innovation and Sustainability for the Future.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
