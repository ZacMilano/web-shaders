import { PrimedCanvas } from "./webgl/PrimedCanvas"

const canvas = new PrimedCanvas(
  document.querySelector<HTMLDivElement>('.canvas-container')!
)

window.addEventListener('beforeunload', () => {
  canvas.dispose()
})
