import { useState } from 'react'
import Modal from 'react-modal';
import Image from "next/image"
// スタイリング
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '500px',
    height                : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement('#__next')

const SelectModal = () => {
  const [modalIsOpen,setIsOpen] = useState(false)

  // モーダルを開く処理
  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  }

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        // isOpenがtrueならモダールが起動する
        isOpen={modalIsOpen}
        // モーダルが開いた後の処理を定義
        onAfterOpen={afterOpenModal}
        // モーダルを閉じる処理を定義
        onRequestClose={closeModal}
        // スタイリングを定義
        // style={customStyles}
        className={"fixed top-1/4 left-1/4 right-3/4 h-1/2 w-1/2 bottom-3/4 bg-gray-300 "}
      >
        <div className={"float-right p-1"}>
          <Image src={"/close_white_24dp.svg"} width={20} height={20} onClick={closeModal}/>
        </div>
        <div className={"mt-3 ml-3 text-xl"}>現在使用可能車</div>
        <div className={"my-1 mx-2"}>
          <div className={""}>MAZDA 3</div>
          <Image src={"/mazda3.jpeg"} width={1140} height={641} />
        </div>
        <div className={"my-1 mx-2"}>
          <div className={""}>MAZDA CX-8</div>
          <Image src={"/cx-8.jpeg"} width={1440} height={800} />
        </div>
      </Modal>
    </>
  )
}

export default SelectModal
