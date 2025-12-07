import React from "react";

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-6">
      {/* SECTION TITLE */}
      <h2 className="text-black text-3xl sm:text-4xl font-semibold mb-6">
        MEMBER OF JATIPADI GROUPS
      </h2>

      {/* SUBTITLE GRADIENT */}
      <h3
        className="
          font-bold 
          bg-gradient-to-r from-brown to-yellow
          bg-clip-text text-transparent
          text-3xl xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl
          leading-tight
          mb-6
        "
      >
        Empowering, Sustainability, Inspiring Growth
      </h3>

      {/* DESCRIPTION PARAGRAPH */}
      <p className="text-black opacity-70 font-normal 
        text-xs sm:text-sm md:text-base lg:text-lg 
        leading-relaxed max-w-3xl">
        Jatipadi Groups adalah holding company yang membawahi sejumlah unit usaha strategis dengan fokus pada pelayanan publik dan pengembangan masyarakat. Dengan prinsip Empowering, Sustainability, Inspiring Growth, kami berkomitmen menghadirkan layanan yang berkualitas dan berdampak.

        PSS
        Bergerak di bidang jasa operasional dan pelayanan pendukung.

        PT Jatimetana Energi
        Penyedia layanan gas dan air bersih yang aman, terjangkau, dan berkelanjutan.

        PT Tahtamas Raya
        Mendukung pemberdayaan UMKM dan menyediakan layanan perizinan terpadu.

        Melalui kolaborasi ketiga unit usaha ini, Jatipadi Groups terus berupaya menjadi mitra terpercaya dalam memberikan solusi yang efektif dan berkelanjutan bagi masyarakat.
      </p>

      {/* CTA BUTTON */}
      <div className="mt-10">
        <a
          href="/contact/"
          className="
            inline-flex items-center justify-center
            px-10 py-3 rounded-md
            text-white bg-brown border border-yellow
            hover:bg-transparent hover:text-brown 
            transition-all duration-300
            font-medium text-sm sm:text-base md:text-lg
            shadow-md hover:shadow-lg
          "
        >
          CONTACT US
          <svg
            className="w-4 h-4 ml-2"
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
  );
};

export default AboutExtra;
