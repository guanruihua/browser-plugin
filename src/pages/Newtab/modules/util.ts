import { isNumber } from 'asura-eye'

export const getStat = (list: any[]) => {
  
  let minCol = 0
  const stat: any[] = new Array(4).fill('').map(() => ({
    count: 0,
    list: [],
  }))

  const updateMinCol = () => {
    let newMinCol = 0
    let newMin = stat[0].count
    stat.forEach((item, i) => {
      const v = item.count
      if (v < newMin) {
        newMinCol = i
        newMin = v
      }
    })
    minCol = newMinCol
  }

  const getLength = (record: any) => {
    let total = 1
    const compute = (record: any) => {
      const { children } = record
      if (isNumber(children?.length)) total += children?.length
    }
    compute(record)
    return total
  }

  const resolveStat = (list: any[]) => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      
      stat[minCol].list.push(item)
      stat[minCol].count += getLength(item)

      updateMinCol()
    }
  }

  resolveStat(list)

  // console.log(list.length, JSON.stringify(stat.map(item => item.list.map((j: any) => j.label))))

  return stat
}
