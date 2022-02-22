import React from 'react'
import { RHTable } from '../../../components'
import './index.scss'

function Index() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address:
        '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号'
    }
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      maxWidth: 100,
      render: (record: any, text: any): any => {
        return <div>aaaa{text}</div>
      }
    },
    {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return <button>btn</button>
      }
    }
  ]

  return (
    <div className='options-setting'>
      <RHTable dataSource={dataSource} columns={columns} serialNumber rowSelection={{}}></RHTable>
    </div>
  )
}

export default Index
