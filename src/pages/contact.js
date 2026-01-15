import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us - PT Jati Padi"
        description="Hubungi PT Jati Padi untuk layanan air bersih, gas, dan perizinan usaha."
      />

      {/* HEADER – LIGHT & CLEAN */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 mt-10">
        <Fade bottom>
          <h1 className="text-4xl lg:text-5xl font-bold text-brown">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            PT Jati Padi siap membantu kebutuhan air bersih, gas,
            serta perizinan usaha Anda secara profesional dan terpercaya.
          </p>
        </Fade>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* INFO */}
          <Fade bottom cascade>
            <div className="space-y-6 ">
              <InfoCard title="WhatsApp">
                <a
                  href="https://wa.me/6287878834348"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-brown hover:underline"
                >
                  +62 878 7883 4348
                </a>
              </InfoCard>

              <InfoCard title="Email">
                corporate@jatipadigroups.com
              </InfoCard>

              <InfoCard title="Alamat Kantor">
                Kantor Pusat PT Jati Padi Groups, DKI Jakarta
              </InfoCard>

              <InfoCard title="Jam Operasional">
                Senin – Jumat · 09.00 – 17.00 WIB
              </InfoCard>
            </div>
          </Fade>

          {/* FORM */}
          <Fade bottom>
            <div className="lg:col-span-2 bg-[#f4bd27] rounded-2xl p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-brown mb-6">
                Formulir Kontak
              </h2>

              <form name="contact" method="POST" netlify>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Nama Lengkap" name="name" />
                  <Input placeholder="Email" type="email" name="email" />
                  <Input placeholder="Perusahaan" name="company" />
                  <Input placeholder="No. Telepon" name="phone" />
                </div>

                <textarea
                  className="mt-6 w-full rounded-xl p-5 bg-white border border-gray-200 focus:ring-1 focus:ring-brown outline-none"
                  rows="6"
                  placeholder="Tuliskan kebutuhan Anda..."
                  name="message"
                />

                <Button
                  title="Kirim Pesan"
                  type="submit"
                  colorClass="bg-brown text-white hover:opacity-90 font-montserrat"
                  marginClass="mt-6"
                />
              </form>
            </div>
          </Fade>
        </div>

        {/* SUBTLE TEXT LOGO */}
        <div className="mt-20 text-center opacity-5 text-6xl font-extrabold tracking-widest text-brown select-none">
          PT JATI PADI
        </div>
      </section>
    </Layout>
  )
}

/* INFO CARD */
const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
      {title}
    </h3>
    <div className="text-brown font-medium">
      {children}
    </div>
  </div>
)

export default Contact
