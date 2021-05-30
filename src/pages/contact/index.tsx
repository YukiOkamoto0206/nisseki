import React from "react"
import Staff from "../../components/staff"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"

const Index: React.FC = () => {
  return (
    <>
      <Layout title={"Staff紹介"}>
        <PageTitle title={"Staff紹介"} />

        <Staff
          name={"Atsuya (Creative Director)"}
          src={"/asano.jpg"}
          width={1103}
          height={1478}
          introduce={
            "I am mainly in charge of design and public relations at our company. We will do our best to support you day and night. career：Ritsumeikan Asia Pacific University"
          }
        />
        <Staff
          name={"Yuki (CTO)"}
          src={"/yukiki.jpg"}
          width={748}
          height={540}
          introduce={
            "I am an engineer as Chief Technology Officer at Nisseki Taxi. The more, the merrier. You know what I mean? career: California State University"
          }
        />
        <Staff
          name={"Yuya (COO)"}
          src={"/yuya.jpg"}
          width={1108}
          height={1478}
          introduce={
            "I am Chief Operating Officer and kinda driver of Mercedes-Benz. career: Faculty of Science Department of Chemistry at Ehime University"
          }
        />
        <Staff
          name={"Kota (CFO)"}
          src={"/kota.jpg"}
          width={1478}
          height={1108}
          introduce={
            "I am a brother of the president and Chief Chief Financial Officer. I have a strong passion focusing on my gf, so I don't need you bitches🤗 carrer: Border-Free Rank University"
          }
        />
      </Layout>
    </>
  )
}

export default Index
