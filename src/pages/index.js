import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="JatiPadi Groups"
        description="PT Jati Padi berkomitmen memberikan layanan yang cepat, transparan,
      dan profesional di bidang air bersih, gas, serta perizinan usaha.
      Kami hadir untuk mendukung kebutuhan bisnis dan masyarakat secara berkelanjutan"
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      {/* <Testimonial></Testimonial> */}
    </Layout>
  </div>
)

export default IndexPage
