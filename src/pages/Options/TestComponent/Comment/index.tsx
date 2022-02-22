import React, { useState } from 'react'
import { RHSwitch, RHCommentList } from '@/components'
import userIcon from '@/assets/img/pkq.svg'

function TestComponent(props: any): any {
  const [state, setState] = useState(true)
  return (
    <div>
      <RHCommentList style={{ width: 300 }}>
        <RHCommentList.Comment userIcon={userIcon} info={<div>Ruihuag</div>}>
          fjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkj
        </RHCommentList.Comment>
        <RHCommentList.Comment userIcon={userIcon} info={<div>Ruihuag</div>}>
          fjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkj
        </RHCommentList.Comment>
        <RHCommentList.Comment userIcon={userIcon} info={<div>Ruihuag</div>}>
          fjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkj
        </RHCommentList.Comment>
        <RHCommentList.Comment userIcon={userIcon} info={<div>Ruihuag</div>}>
          fjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkj
        </RHCommentList.Comment>
        <RHCommentList.Comment userIcon={userIcon} info={<div>Ruihuag</div>}>
          fjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkj
        </RHCommentList.Comment>
        <RHCommentList.Comment userIcon={userIcon} info={<div>Ruihuag</div>}>
          fjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkjfjaskjfkajsfkj
        </RHCommentList.Comment>
      </RHCommentList>
      {/* <RHSwitch />
		<RHSwitch
			checkedChildren="ONN"
			uncheckedChildren="OFFF"
		/>
		<RHSwitch checked={state} />
		<button onClick={(): void => {
			setState(!state)
		}}>Change</button>
		<RHSwitch defaultChecked />
		<RHSwitch checked />
		<RHSwitch
			checked
			onChange={(checked: boolean): boolean => {
				console.log({ checked })
				return true;
			}} />
		<RHSwitch
			checked
			onChange={(checked: boolean): boolean => {
				console.log({ checked })
				return false;
			}} /> */}
    </div>
  )
}

export default TestComponent
