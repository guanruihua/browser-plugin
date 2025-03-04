import React from 'react'
import { copyText } from 'harpe'
import './index.scss'
import { useSetState } from '0hook'
import { ObjectType } from '0type'

const Conf = {
  LETTER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  letter: 'abcdefghijklmnopqrstuvwxyz',
  number: '1234567890',
}

const getStr = (conf: ObjectType) => {
  const { length = 32, number = false, letter = false, LETTER = false } = conf
  const Seed: string[] = []
  if (number) Seed.push(Conf.number)
  if (letter) Seed.push(Conf.letter)
  if (LETTER) Seed.push(Conf.LETTER)
  const getChar = () => {
    const i = Math.floor(Math.random() * Seed.length)
    const match: string = Seed.at(i) || ''
    if (match) {
      const j = Math.floor(Math.random() * match.length)
      return match[j]
    }
    return ''
  }

  return new Array(length).fill('').map(getChar).join('')
}

const extendProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
}

const CopyIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    style={{ ...extendProps, fontSize: 12 }}
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2'
    />
    <path
      fill='currentColor'
      d='M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z'
    />
  </svg>
)
const getNow = () => new Date().getTime()

export function LengthString() {
  const [conf, setConf] = useSetState<ObjectType>({
    length: 32,
    number: true,
    letter: true,
    LETTER: true,
  })
  const [time, setTime] = React.useState<number>(0)
  const [flag, setFlag] = React.useState(-1)

  React.useEffect(() => {
    const gap = time - getNow()
    if (time < 1 || gap <= 0) return
    setFlag(1)
    const timer = setTimeout(() => {
      setFlag(-1)
    }, gap)

    return () => {
      setFlag(-1)
      clearTimeout(timer)
    }
  }, [time])

  const list = [
    {
      value: 'length',
      type: 'number',
    },
    {
      value: 'number',
      label: '1234567890',
    },
    {
      value: 'letter',
      label: 'abcdefghijklmnopqrstuvwxyz',
    },
    {
      value: 'LETTER',
      label: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
  ]

  const targetString = getStr(conf)

  return (
    <div className='panel-gen'>
      {flag > 0 && <div className='alert'>Copy Success</div>}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        {list.map(({ value, label, type }) => {
          if (type === 'number') {
            return (
              <input
                value={conf[value]}
                type='number'
                onChange={(e: any) => setConf({ [value]: Number(e.target.value) ?? 1 })}
                maxLength={6}
                min={1}
              />
            )
          }
          return (
            <div
              key={value}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <input
                type='checkbox'
                checked={conf[value]}
                onChange={(e: any) => setConf({ [value]: e.target.checked ?? false })}
              />
              <span>{label}</span>
            </div>
          )
        })}
      </div>
      <div className='row'>
        <span className='value'>{targetString}</span>
        <span className='value len'>{`<${targetString.length}>`}</span>
        <span
          className='icon'
          onClick={() => {
            copyText(targetString) && setTime(getNow() + 3000)
          }}
        >
          {CopyIcon}
        </span>
      </div>
    </div>
  )
}
