import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="PT.JatiPadi - Gallery"
        description="PT Jati Padi berkomitmen memberikan layanan yang cepat, transparan,
      dan profesional di bidang air bersih, gas, serta perizinan usaha.
      Kami hadir untuk mendukung kebutuhan bisnis dan masyarakat secara berkelanjutan."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
