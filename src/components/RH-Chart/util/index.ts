export interface ICanvasHelper {
  canvas: HTMLCanvasElement
  context2d: any
  triangle: (x: number, y: number, r: number) => void
}

export class CanvasHelper implements ICanvasHelper {
  canvas: HTMLCanvasElement
  context2d: any = undefined
  constructor(canvas: any) {
    this.canvas = canvas
    if (canvas.getContext) {
      this.context2d = canvas.getContext('2d')
    }
  }
  getContext2d() {
    return this.context2d
  }
  test() {
    const ctx = this.context2d
    ctx.beginPath()
    ctx.arc(100, 200, 30, 0, 2 * Math.PI)
    ctx.fill()
  }
  line(x: number, y: number, x1: number, y1: number, strokeStyle = '#7C8B8C') {
    const ctx: any = this.context2d
    ctx.strokeStyle = strokeStyle
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x1, y1)
    ctx.stroke()
    ctx.restore()
  }
  triangle(x: number, y: number, r: number, strokeStyle = '#7C8B8C') {
    const ctx: any = this.context2d
    ctx.strokeStyle = strokeStyle
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(r)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(10, 0)
    ctx.lineTo(0, -10)
    ctx.lineTo(-10, 0)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
  xTriangle(x: number, y: number, r: number, strokeStyle = '#7C8B8C') {
    const ctx: any = this.context2d
    ctx.strokeStyle = strokeStyle
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(r)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(5, 0)
    ctx.lineTo(0, -5)
    ctx.lineTo(-5, 0)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
  yTriangle(x: number, y: number, r: number, strokeStyle = '#7C8B8C') {
    const ctx: any = this.context2d
    ctx.strokeStyle = strokeStyle
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(r)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(5, 0)
    ctx.lineTo(0, -5)
    ctx.lineTo(-5, 0)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
}
