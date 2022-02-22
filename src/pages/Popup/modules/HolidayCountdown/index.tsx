import React, { ChangeEvent, useEffect, useState } from 'react'
import { uid, copyArrayToClip } from '../../../../assets/utils'
import { calcRestDay, getRestWeek, getNowDate, getCountdownToLeavingWork } from './util'
import delUrl from '../../../../assets/img/del.svg'
import copyUrl from '../../../../assets/img/copy.svg'
import './index.scss'

interface iDay {
  id: string
  value: string
  name?: string
}

const KEY = {
  HOLIDAY_LIST: 'HOLIDAY_LIST'
}

const Index = () => {
  const [dayList, setDayList]: [any, (val: any) => void] = useState([])
  const [result, setResult]: [any, (val: any) => void] = useState([])
  const [nowDate, setNowDate] = useState(getNowDate())
  const [countdownToLeavingWork, updateCountdownToLeavingWork]: [string, any] = useState(
    getCountdownToLeavingWork()
  )

  setInterval(() => {
    updateCountdownToLeavingWork(getCountdownToLeavingWork())
  }, 1000)

  useEffect((): void => {
    chrome.storage.sync.get(KEY.HOLIDAY_LIST, function (result: any): void {
      setDayList(result[KEY.HOLIDAY_LIST])
    })
    setNowDate(getNowDate())
  }, [1])

  // 监听节假日 的变化
  useEffect((): void => {
    handleSetResult()
  }, [dayList])

  const handleSetResult = (): void => {
    const result_temp: string[] = []

    result_temp.push(`【摸鱼办公室】 ${nowDate}`)
    result_temp.push(
      `早上好，摸鱼人，工作再累，一定不要忘记摸鱼哦, 有事没事起身去茶水间去厕所去廊道走走，别老在工位上坐着，钱是老板的，但命是自己的`
    )
    result_temp.push(getRestWeek())

    dayList &&
      dayList.forEach((item: iDay): void => {
        const { value, name } = item
        if (value && name) {
          result_temp.push(`距离${name}假期还有 ${calcRestDay(value)} 天`)
        }
      })
    setResult(result_temp)
  }

  const handleSetDayList = (days: any[]): void => {
    setDayList(days)
    chrome.storage.sync.set({ [KEY.HOLIDAY_LIST]: days })
    handleSetResult()
  }

  const handleAddDayList = (): void => {
    const list: iDay[] = dayList || []
    list.push({
      id: uid(),
      value: new Date()
        .toLocaleDateString()
        .split('/')
        .map((item: any): any => {
          if (item < 10) {
            return '0' + item
          } else {
            return item
          }
        })
        .join('-'),
      name: ''
    })
    handleSetDayList(list)
  }

  const delDayItem = (id: string | undefined, index: number): void => {
    const list = dayList.filter((item: any, i: number): any => {
      if (id === item.id) return false
      if (!id && i === index) return false
      return true
    })
    handleSetDayList(list)
  }

  const updateDayItem = (
    id: string | undefined,
    index: number,
    val: string,
    name: string
  ): void => {
    const list = dayList
      .map((item: any, i: number): any => {
        if (id === item?.id || (!id && i === index)) {
          item.value = val
          item.name = name
        }
        return item
      })
      .filter((i: any): any => i)
    handleSetDayList(list)
  }

  return (
    <div className='holiday-countdown' key='holiday-countdown'>
      <br />
      <h1>节假日倒计时</h1>
      <br />
      <h2 className='holiday-countdown-result-title'>
        简易文本
        <button
          style={{ border: 'none', background: '#fff' }}
          onClick={(): void => {
            const temp_result: any[] = result.concat(`下班倒计时:${countdownToLeavingWork}`)
            copyArrayToClip(temp_result)
          }}
        >
          <img src={copyUrl} alt='copy' />
        </button>
      </h2>
      <div
        style={{
          padding: '0 10% 30px',
          textAlign: 'start',
          fontSize: 14
        }}
      >
        {result &&
          result.map((item: string) => {
            return <div key={item}>{item}</div>
          })}
        {`下班倒计时:${countdownToLeavingWork}`}
      </div>
      <h2 className='holiday-countdown-title'>
        节日
        <button className='holiday-countdown-day-add-btn' onClick={() => handleAddDayList()}>
          +
        </button>
      </h2>

      <div key='holiday-countdown-day'>
        {dayList &&
          dayList.map((item: any, index: number): any => {
            if (!item.id) item.id = uid()
            return (
              <div key={item.id || 'key' + index} className='holiday-countdown-day-item'>
                <input
                  type='text'
                  defaultValue={item.name || ''}
                  onBlur={(e: any): void => {
                    updateDayItem(item.id, index, item.value || '', e.target.value || '')
                  }}
                />
                <input
                  type='date'
                  defaultValue={item.value || ''}
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    updateDayItem(item.id, index, e.target.value || '', item.name || '')
                  }}
                />
                <button
                  onClick={(): void => {
                    delDayItem(item.id, index)
                  }}
                >
                  <img src={delUrl} />
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Index
