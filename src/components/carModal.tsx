import React, { useState } from "react"
import Image from "next/image"
import Button from "./button"
import { useRouter } from "next/router"

const CarType = {
  MAZDA3: "MAZDA 3",
  MAZDACX8: "MAZDA CX-8",
  ROADSTAR: "ROADSTAR",
  DEMIO: "DEMIO",
  IZUMI: "IZUMI"
} as const
type CarType = typeof CarType[keyof typeof CarType]

const CarImage = {
  MAZDA3: <Image src={"/mazda3.jpeg"} width={1140} height={641} />,
  MAZDACX8: <Image src={"/cx-8.jpeg"} width={1440} height={800} />,
  ROADSTAR: <Image src={"/roadstar.jpg"} width={708} height={472} />,
  DEMIO: <Image src={"/demio.jpg"} width={870} height={640} />,
  IZUMI: <Image src={"/broken-car.jpg"} width={1284} height={952} />
} as const
type CarImage = typeof CarImage[keyof typeof CarImage]

const CarSelect: React.VFC = () => {
  const [isSelecting, setIsSelecting] = useState(true)
  const [car, setCar] = useState<CarType>(CarType.MAZDA3)
  const [image, setImage] = useState<CarImage>(CarImage.MAZDA3)
  const toConfirm = () => {
    setIsSelecting(!isSelecting)
  }
  const router = useRouter()
  const toInstagram = () => {
    router.push("https://instagram.com/is__richard?igshid=1rb5120gz5j8s")
  }
  const selectMAZDA3 = () => {
    setCar(CarType.MAZDA3)
    setImage(CarImage.MAZDA3)
  }
  const selectMAZDACX8 = () => {
    setCar(CarType.MAZDACX8)
    setImage(CarImage.MAZDACX8)
  }
  const selectROADSTAR = () => {
    setCar(CarType.ROADSTAR)
    setImage(CarImage.ROADSTAR)
  }
  const selectDEMIO = () => {
    setCar(CarType.DEMIO)
    setImage(CarImage.DEMIO)
  }
  const selectIZUMI = () => {
    setCar(CarType.IZUMI)
    setImage(CarImage.IZUMI)
  }
  return (
    <>
      <div className={"mt-3 ml-3 text-xl"}>車種選択をする</div>
      {isSelecting ? (
        <>
          <div className={"my-1 mx-2"}>
            <input type="radio" name="q1" onClick={selectMAZDA3} checked={car === CarType.MAZDA3} />{" "}
            {CarType.MAZDA3}
            {CarImage.MAZDA3}
            <input
              type="radio"
              name="q1"
              onClick={selectMAZDACX8}
              checked={car === CarType.MAZDACX8}
            />{" "}
            {CarType.MAZDACX8}
            <Image src={"/cx-8.jpeg"} width={1440} height={800} />
            <input
              type="radio"
              name="q1"
              onClick={selectROADSTAR}
              checked={car === CarType.ROADSTAR}
            />{" "}
            {CarType.ROADSTAR}
            <Image src={"/roadstar.jpg"} width={708} height={472} />
            <input
              type="radio"
              name="q1"
              onClick={selectDEMIO}
              checked={car === CarType.DEMIO}
            />{" "}
            {CarType.DEMIO}
            <Image src={"/demio.jpg"} width={870} height={640} />
            <input
              type="radio"
              name="q1"
              onClick={selectIZUMI}
              checked={car === CarType.IZUMI}
            />{" "}
            {CarType.IZUMI}
            <Image src={"/broken-car.jpg"} width={1284} height={952} />
          </div>
          <Button text={"決定する"} onClick={toConfirm} inModal={true} />
        </>
      ) : (
        <>
          <div className={"my-2 mx-2"}>
            {image}
            <div className={"my-2"}>
              ご予約される車種は<span className={"font-bold"}>{car}</span>で本当によろしいですか？
            </div>
          </div>
          <Button text={"はい"} onClick={toInstagram} inModal={true} />
          <Button text={"いいえ"} onClick={toConfirm} inModal={true} />
        </>
      )}
    </>
  )
}
export default CarSelect
