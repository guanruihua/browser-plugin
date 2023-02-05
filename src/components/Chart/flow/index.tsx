import React from 'react'
import { CanvasHelper } from '../util'

interface FlowProps {
  actions: string[]
}

export default class Flow extends React.Component<FlowProps> {
  canvas: any = React.createRef<HTMLCanvasElement>()
  canvasHelper: any
  componentDidMount() {
    if (this.canvas.current.getContext) {
      this.canvasHelper = new CanvasHelper(this.canvas.current)
      this.canvasHelper.xTriangle(320, 130, Math.PI * 0.5, '#7C8B8C')
      this.canvasHelper.line(90, 130, 320, 130, '#7C8B8C')
      this.canvasHelper.yTriangle(100, 100, Math.PI * 1, '#7C8B8C')
      this.canvasHelper.line(100, 0, 100, 100, '#7C8B8C')
      this.canvasHelper.test()
    }
  }

  render() {
    const { actions = [] }: FlowProps = this.props
    return (
      <div>
        Chart
        <h3>{JSON.stringify(actions)}</h3>
        <canvas ref={this.canvas} width={800} height={600}>
          Your browser does not support Canvas
        </canvas>
      </div>
    )
  }
}
