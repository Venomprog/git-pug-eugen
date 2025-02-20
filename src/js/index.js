import '../styles/style.scss'
import 'lazysizes'
import 'virtual:svg-icons-register'
import { mainSlider } from "./components/main-slider"

document.addEventListener('DOMContentLoaded', function () {
  commonFunction()
})

export const commonFunction = () => {
  mainSlider()
}
