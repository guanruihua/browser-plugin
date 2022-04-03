import React, { Ref, useEffect } from "react"


interface RHAudioProps {
	volume?: number
	autoPlay?: boolean
	controls?: boolean
	currentTime?: number
	muted?: boolean
	loop?: boolean
	src: AudioBuffer | any
	[key: string]: any
}

function RHAudio(props: RHAudioProps) {
	const { volume = 0.5, ...config } = props
	const auRef: Ref<any> = React.useRef()
	useEffect(() => {
		const target = auRef.current
		target.volume = volume
	}, [])
	return <audio
		ref={auRef}
		{...config}
	>
		Your browser does not support the
		<code>audio</code> element.
	</audio>


}

export default RHAudio