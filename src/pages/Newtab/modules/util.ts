
export const getStat = (list: any[]) => {
  const stat: any[] = new Array(4).fill('').map(() => ({
    list: []
  }))

  const resolveStat = (item: any, i: number) => {
    stat[i % 4].list.push(item)
  }

  list.forEach(resolveStat)

  // console.log(list.length, JSON.stringify(stat.map(item => item.list.map((j: any) => j.label))))

  return stat
}
