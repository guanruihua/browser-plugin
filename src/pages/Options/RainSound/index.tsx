import React from "react"
import raindrops160 from '@assets/video/raindrops160.mp3'
import rainbest from '@assets/video/rainbest160.mp3'
import gale from '@assets/video/gale160.mp3'
import cafeWalla from '@assets/video/cafe-brazil-walla160.mp3'
import thunder from '@assets/video/thunder160.mp3'
import aspenTree from '@assets/video/aspen-tree160.mp3'
import { RHAudio } from '@/components'
import './index.scss'

function RainSound() {
	const cmmConfig = {
		autoPlay: true,
		controls: true,
		volume: 0.5,
		loop: true
	}
	return <div className="options-rainSound">
		<div><span>雨声</span><RHAudio src={raindrops160} {...cmmConfig} /></div>
		<div><span>大风</span><RHAudio src={gale} {...cmmConfig} autoPlay={false} /></div>
		<div><span>雷声</span><RHAudio src={thunder} {...cmmConfig} autoPlay={false} /></div>
		<div><span>咖啡</span><RHAudio src={cafeWalla} {...cmmConfig} autoPlay={false} /></div>
		<div><span>树木</span><RHAudio src={aspenTree} {...cmmConfig} autoPlay={false} /></div>
		<div><span>更好雨声</span><RHAudio src={rainbest} {...cmmConfig} autoPlay={false} /></div>
	</div>
}

export default RainSound