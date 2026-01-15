import React from "react"
import Fade from "react-reveal/Fade"

import JatipadiImage from "../images/Logo-jatipadi.jpg"
import Umkm from "../images/umkm.jpeg"
import Perizinan from "../images/perizinan.png"
import Gas from "../images/gas.jpg"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 pt-32">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row xxs:flex-col xs:flex-col sm:flex-row mb-5">
          <div className="max-h-80 w-1/2 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-4 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-black opacity-70 text-4xl font-semibold">
              Layanan Kami
            </h1>
            <h1 className="text-brown text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Kenapa Memilih Kami?
            </h1>
            <p className="text-lg mt-4 text-brown opacity-70 xxs:text-sm sm:text-lg">
              PT. Jati Padi hadir untuk memberikan pelayanan yang cepat, transparan, dan terpercaya di berbagai bidang seperti air bersih, gas, dan layanan perizinan. 
              Kami percaya bahwa kepercayaan klien dibangun melalui komitmen nyata, inovasi berkelanjutan, serta tanggung jawab sosial yang tinggi terhadap masyarakat dan lingkungan.
            </p>
          </div>
          <div className="rounded-xl w-auto h-full object-cover flex justify-center">
            <img src={JatipadiImage} alt="JatipadiImage"></img>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto px-8 mt-5">
        <Fade bottom cascade>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Umkm}
                loading="lazy"
                alt="JatipadiImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Clean Animations
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Perizinan}
                loading="lazy"
                alt="PerizinanImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Easy to use
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Gas}
                loading="lazy"
                alt="GasImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-brown md:ml-5 md:text-lg">
                Responsive
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Perizinan}
                loading="lazy"
                alt="PerizinanImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tailwind CSS
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Gas}
                loading="lazy"
                alt="GasImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                CMS Ready
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Umkm}
                loading="lazy"
                alt="JatipadiImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fast
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Gas}
                loading="lazy"
                alt="GasImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-brown md:ml-5 md:text-lg">
                Responsive
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Perizinan}
                loading="lazy"
                alt="PerizinanImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tailwind CSS
              </span>
            </a>
            
          </div>
          
        </Fade>
      </div>
    </div>
  )
}

export default Gallery

/* 
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://source.unsplash.com/bYuI23mnmDQ"/>
        <img src="https://source.unsplash.com/Nllx4R-2c3o"/>
        <img src="https://source.unsplash.com/lp40q07DIe0"/>
        <img src="https://source.unsplash.com/wfalq01jJuU"/>
        <img src="https://source.unsplash.com/rMHNK_skwwU"/>
        <img src="https://source.unsplash.com/WBMjuGpbrCQ"/>
        <img src="https://source.unsplash.com/nCUZ5BYBL_o"/>
        <img src="https://source.unsplash.com/3u4fzMQZhjc"/>
        <img src="https://source.unsplash.com/haOIqIPSwps"/>
        <img src="https://source.unsplash.com/3UrYD7NNVxk"/>
        <img src="https://source.unsplash.com/fm1JKDItlVM"/>
        <img src="https://source.unsplash.com/qPpq1EVs8vw"/>
        <img src="https://source.unsplash.com/xRyL63AwZFE"/>
        <img src="https://source.unsplash.com/XeNKWTiCPNw"/>
        <img src="https://source.unsplash.com/DFt3T5r_4FE"/>
        <img src="https://source.unsplash.com/Ebwp2-6BG8E"/>
            </div>
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
*/
