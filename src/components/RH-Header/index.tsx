import React from "react";
// import logo from '../../assets/img/icon-128.png'
// import logo from '../../assets/img/pkq.svg'
import { Config } from '../../assets'
import './index.scss'

function Index(props: any): any {
	return <div className="rh-header" {...props}>
		{/* <span><img src={logo} alt="" /></span> */}
		<span>{Config.headerTitle}</span>
	</div>
}


export default Index;