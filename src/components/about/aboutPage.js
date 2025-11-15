import React from "react"
import Fade from "react-reveal/Fade"

import {
  BsDropletHalf,
  BsLightningCharge,
  BsCheckCircle,
  BsSearch,
} from "react-icons/bs"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-6">

      {/* ====== METRICS SECTION (Kinerja Perusahaan) ====== */}
      <Fade bottom cascade>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Air Bersih */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brown to-yellow text-white shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
            <BsDropletHalf size={50} className="mb-4 opacity-90" />
            <h3 className="text-2xl font-semibold">Layanan Air Bersih</h3>
            <h4 className="mt-5 text-3xl font-bold opacity-90">99.9%</h4>
            <p className="mt-3 opacity-80 text-sm">
              Kualitas air teruji & distribusi stabil
            </p>
          </div>

          {/* Energi Terbarukan */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brown to-yellow text-white shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
            <BsLightningCharge size={50} className="mb-4 opacity-90" />
            <h3 className="text-2xl font-semibold">Energi Terbarukan</h3>
            <h4 className="mt-5 text-3xl font-bold opacity-90">100%</h4>
            <p className="mt-3 opacity-80 text-sm">
              Inovasi energi ramah lingkungan
            </p>
          </div>

          {/* Perizinan */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brown to-yellow text-white shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">            <BsCheckCircle size={50} className="mb-4 opacity-90" />
            <h3 className="text-2xl font-semibold">Layanan Perizinan</h3>
            <h4 className="mt-5 text-3xl font-bold opacity-90">100%</h4>
            <p className="mt-3 opacity-80 text-sm">
              Proses cepat, mudah, dan terstandarisasi
            </p>
          </div>

          {/* SEO / Reputasi Perusahaan */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brown to-yellow text-white shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">            <BsSearch size={50} className="mb-4 opacity-90" />
            <h3 className="text-2xl font-semibold">Reputasi & Kepercayaan</h3>
            <h4 className="mt-5 text-3xl font-bold opacity-90">100%</h4>
            <p className="mt-3 opacity-80 text-sm">
              Diakui berbagai mitra & konsumen
            </p>
          </div>
        </div>
      </Fade>

      {/* ====== PERFORMANCE SECTION (Profil Perusahaan) ====== */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <Fade left>
          <div>
            <h2 className="text-black text-4xl font-extrabold tracking-wide uppercase">
              PT Jati Padi Groups
            </h2>

            <h3 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-brown to-yellow text-transparent bg-clip-text mt-4 leading-tight">
              Membangun Layanan Terpercaya Berbasis Inovasi
            </h3>

            <p className="text-black opacity-70 mt-6 text-lg leading-relaxed">
              PT Jati Padi Groups adalah perusahaan yang bergerak di bidang
              pengelolaan air bersih, energi terbarukan, layanan perizinan,
              serta pengelolaan gas. Dengan pengalaman yang matang, kami
              berkomitmen menghadirkan layanan profesional, efisien, dan
              berorientasi pada kebutuhan masyarakat.  
              <br /><br />
              Melalui integritas dan inovasi, Jati Padi terus berkembang sebagai
              perusahaan yang menyediakan solusi berkelanjutan dan ramah
              lingkungan bagi berbagai sektor di DKI Jakarta dan sekitarnya.
            </p>
          </div>
        </Fade>

        Image / Visual Section
       <Fade direction="right" triggerOnce>
  <div className="group w-full max-w-md mx-auto 
    rounded-2xl overflow-hidden shadow-2xl 
    transition-all duration-700 transform 
    hover:scale-105 hover:rotate-1 hover:shadow-yellow-300/40">

    {/* Glow belakang ikut bergerak */}
    <div className="absolute inset-0 rounded-2xl bg-yellow-300/20 
      opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10"></div>

    <img
      src="/img/Logo-jatipadi.jpg"
      alt="Jati Padi"
      className="w-full h-full object-cover transition-all duration-700"
    />
  </div>
</Fade>

      </div>

    </div>
  )
}

export default WorkPage
