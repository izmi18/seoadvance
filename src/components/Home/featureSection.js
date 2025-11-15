import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import AirImage from "../../images/air-bersih.jpg";
import GasImage from "../../images/gas.jpg";
import IzinImage from "../../images/perizinan.png";
import UmkmImage from "../../images/umkm.jpeg";

import Image2 from "../../images/pt.jatimetanaenerginew.png"
import Image3 from "../../images/pt.tahtamasraya-new.png"
import Image4 from "../../images/pssnew.png"




const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <Fade bottom cascade>
  <div className="mt-10 flex flex-row flex-wrap justify-center text-center">
    {/* Card Visi */}
    <div
      className="w-1/3 bg-cream p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3
      transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1
      shadow-md hover:shadow-yellow/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-yellow/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      <h3 className="text-yellow text-2xl font-semibold relative z-10">Visi</h3>
      
      <p className="mt-4 text-white opacity-70 relative z-10">
        Menjadi perusahaan unggul yang berinovasi dan berkontribusi positif bagi masyarakat.
      </p>
    </div>

    {/* Card Misi */}
    <div
      className="w-1/3 bg-cream p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3
      transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1
      shadow-md hover:shadow-white/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-yellow/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      <h3 className="text-yellow text-2xl font-semibold relative z-10">Misi</h3>
     
      <p className="mt-4 text-white opacity-70 relative z-10">
        Memberikan layanan terbaik dengan integritas, tanggung jawab, dan inovasi berkelanjutan.
      </p>
    </div>
  </div>
</Fade>

          {/* <div className="w-1/3 bg-cream p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-yellow text-2xl">Layanan UMKM</h3>
            <h4 className="mt-10 text-yellow opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-cream bg-cream p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-yellow text-2xl">Layanan Gas</h3>
            <h4 className="mt-10 text-yellow opacity-70 text-xl">100</h4>
          </div> */}
       

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
      <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3">
        
        {/* Bagian gambar */}
        <div className="lg:w-1/2 my-4 grid grid-cols-2 gap-4">
          {/* Air Bersih */}
          <div className="relative group overflow-hidden rounded-xl">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={AirImage}
              alt="Air Bersih"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold">Air Bersih</p>
            </div>
          </div>

          {/* Gas */}
          <div className="relative group overflow-hidden rounded-xl">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={GasImage}
              alt="Gas"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold">Gas</p>
            </div>
          </div>

          {/* Perizinan */}
          <div className="relative group overflow-hidden rounded-xl">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IzinImage}
              alt="Perizinan"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold">Perizinan</p>
            </div>
          </div>

          {/* UMKM */}
          <div className="relative group overflow-hidden rounded-xl">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={UmkmImage}
              alt="UMKM"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold">UMKM</p>
            </div>
          </div>
        </div>

        {/* Bagian teks */}
        <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
          <h2 className="text-brown text-4xl font-semibold">LAYANAN KAMI</h2>
          <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
            Wujud Nyata Pelayanan Kami
          </h3>

          <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
            Kami menghadirkan berbagai layanan untuk masyarakat — mulai dari
            air bersih, gas, perizinan, hingga dukungan bagi pelaku UMKM.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
            <div className="rounded-md">
              <a
                href="tel:#"
                className="transition-all duration-500 ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-brown hover:text-yellow border border-yellow hover:bg-transparent md:text-lg md:px-10"
              >
                Call Us Now
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/gallery"
                className="transition-all duration-500 ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-yellow text-base font-medium rounded-md text-yellow hover:text-brown bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
              >
                View Gallery
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  


      <Fade bottom cascade>
  <div className="mt-10 flex flex-col lg:flex-row justify-center items-stretch gap-8">

    {/* === KOTAK 1: LOKASI KAMI === */}
    <Fade direction="left" triggerOnce>
      <div className="w-full lg:w-1/2 bg-cream p-8 rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-white font-semibold font-montserrat text-4xl mb-4">
          Lokasi Kantor Kami
        </h2>

        <div className="rounded-xl overflow-hidden shadow-md mb-4">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.598227996011!2d106.81408127499052!3d-6.187936560660612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5b9c65d8cf5%3A0xf8a6f14252b196f5!2sJl.%20Danau%20Matana%20Blok%20D2%20No.%2011%2C%20Bend.%20Hilir%2C%20Tanah%20Abang%2C%20Jakarta%20Pusat!5e0!3m2!1sen!2sid!4v1693297228450!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-white text-base opacity-80">
          Alamat: Jl. Danau Matana Blok D2 No. 11, Bendungan Hilir, Jakarta Pusat.
        </p>
        <p className="text-white text-base opacity-80 mt-2">
          Silakan kunjungi kami untuk informasi lebih lanjut mengenai layanan.
        </p>
      </div>
    </Fade>

    {/* === KOTAK 2: START BUILDING === */}
    <Fade direction="right" triggerOnce>
      <div className="w-full lg:w-1/2 bg-cream p-8 rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-white text-4xl font-semibold mb-4">
          Start building amazing web experiences
        </h2>
        <p className="text-white opacity-80 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </Fade>

  </div>
</Fade>

     <div className="mt-8 px-8">
  <h2 className="text-black text-4xl font-semibold opacity-70">
    KENAPA MEMILIH KAMI
  </h2>
  <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
    Komitmen & Pelayanan Terbaik
  </h3>
  <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
    PT. Jati Padi hadir untuk memberikan pelayanan yang cepat, transparan, dan 
    terpercaya di berbagai bidang seperti air bersih, gas, dan layanan perizinan. 
    Kami percaya bahwa kepercayaan klien dibangun melalui komitmen nyata, inovasi 
    berkelanjutan, serta tanggung jawab sosial yang tinggi terhadap masyarakat 
    dan lingkungan. 
  </p>
</div>

<div className="mt-10 px-5">
  <h2 className="text-black text-4xl font-semibold opacity-70">
    NILAI UTAMA KAMI
  </h2>
  <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
    Profesional, Inovatif, dan Terpercaya
  </h3>
  <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
    Kami berkomitmen untuk memberikan hasil terbaik melalui kerja tim yang solid 
    dan profesional. Inovasi menjadi dasar setiap langkah kami untuk menghadirkan 
    solusi yang efisien dan berdaya guna. Dengan pengalaman dan dedikasi tinggi, 
    kami memastikan setiap layanan yang kami berikan dapat memberikan manfaat 
    jangka panjang bagi klien dan masyarakat luas.
  </p>
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    <div className="rounded-md">
  <a
    href="/contact/"
    className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow text-brown hover:text-yellow border border-brown hover:bg-transparent md:text-lg md:px-10"
  >
    Hubungi Kami
  </a>
</div>
</div>
</div>

{/* Section Member of */}
<div className="flex flex-col items-center justify-center w-full mt-16">
  {/* Bagian Member of */}
  <Fade bottom cascade>
    <h2 className="text-black text-4xl font-semibold opacity-70 text-center">
      Member of JATIPADI Groups
    </h2>

    {/* Grid agar gambar dan kotak sejajar */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 px-5 justify-items-center">
      {/* Kolom 1 */}
      <div className="flex flex-col items-center space-y-6">
        <div className="rounded-xl overflow-hidden bg-white shadow-md p-3 flex justify-center">
          <img
            alt="Image"
            src={Image2}
            className="w-[200px] h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="bg-dp p-6 rounded-xl text-center w-[290px]">
          <h3 className="text-white text-2xl">PT. Jati Metana Energi</h3>
          <h4 className="mt-4 text-white opacity-70 text-lg">PR's welcome</h4>
        </div>
      </div>

      {/* Kolom 2 */}
      <div className="flex flex-col items-center space-y-6">
        <div className="rounded-xl overflow-hidden bg-white shadow-md p-3 flex justify-center">
          <img
            alt="Image"
            src={Image3}
            className="w-[200px] h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="bg-dp p-6 rounded-xl text-center w-[280px]">
          <h3 className="text-white text-2xl">PT. Tahtamasraya</h3>
          <h4 className="mt-4 text-white opacity-70 text-lg">PR's welcome</h4>
        </div>
      </div>

      {/* Kolom 3 */}
      <div className="flex flex-col items-center space-y-6">
        <div className="rounded-xl overflow-hidden bg-white shadow-md p-3 flex justify-center">
          <img
            alt="Image"
            src={Image4}
            className="w-[200px] h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="bg-dp p-6 rounded-xl text-center w-[280px]">
          <h3 className="text-white text-2xl">PT. PSS</h3>
          <h4 className="mt-4 text-white opacity-70 text-lg">Give support</h4>
        </div>
      </div>
    </div>
  </Fade>
</div>


   
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Empowering, Sustainability, Inspiring Growth
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
