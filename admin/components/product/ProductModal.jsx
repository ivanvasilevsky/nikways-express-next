import { useEffect, useState } from "react"
import Modal from "../main/Modal"
import $host from "../../src/http/http"
import InputMask from "react-input-mask"

export default function ProductModal({ title, modalOff }) {


  return (
    <Modal title={title} modalOff={modalOff}>

    </Modal>
  )
}