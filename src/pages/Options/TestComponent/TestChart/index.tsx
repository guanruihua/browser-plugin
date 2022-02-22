import React from 'react'
import { RHChart } from '@/components'

export default function () {
  return (
    <div style={{ background: '#fff' }}>
      <RHChart.Flow
        actions={[
          'st=>start: 开始',
          'ipt=>inputoutput: 输入一个x',
          'op=>operation: 处理加工x+1',
          'cond=>condition: 溢出（是或否？）',
          'sub=>subroutine: 子流程',
          'io=>inputoutput: 输出x',
          'ed=>end: 结束',
          'st->ipt->op->cond',
          'cond(yes)->io->ed',
          'cond(no)->sub->io->ed'
        ]}
      />
    </div>
  )
}
