import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About - PT. JatiPadi"
        description="PT Jati Padi berkomitmen memberikan layanan yang cepat, transparan,
      dan profesional di bidang air bersih, gas, serta perizinan usaha.
      Kami hadir untuk mendukung kebutuhan bisnis dan masyarakat secara berkelanjutan"
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutExtra></AboutExtra>
      <AboutGrid></AboutGrid>
    </Layout>
  )
}

export default About
