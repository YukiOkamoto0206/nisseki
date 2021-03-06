import React, { useState } from "react"
import Layout from "../../components/layout"
import { GoogleMap, LoadScript, InfoWindow, Marker } from "@react-google-maps/api"
import Info from "../../components/info"
import PageTitle from "../../components/pageTitle"

const Index: React.FC = () => {
  const containerStyle = {
    height: "50vh",
    width: "100%"
  }

  const center = {
    lat: 34.33569522613816,
    lng: 132.309104112847
  }

  return (
    <Layout title={"会社情報"}>
      <div className={"text-center m-6"}>
        <PageTitle title={"会社情報"} />
        <Info title={"会社名"} content={"株式会社日赤タクシー"} />
        <Info title={"設立"} content={"2020年8月1日"} />
        <Info title={"資本金"} content={"300万円［2021年5月末時点］"} />
        <Info title={"代表者"} content={"飯泉翔太"} />
        <Info title={"所在地"} content={"広島県廿日市市阿品台東１−２"} />
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        <p className={"text-white text-xs mt-1"}>
          *エラーが表示されますが、Google Cloud
          PlatFormに課金していないことが原因です。申し訳ございません。
        </p>
      </div>
    </Layout>
  )
}
export default Index
