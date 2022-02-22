export function calcRestDay(restDay: string): number {
  const rest = String((new Date(restDay).getTime() - new Date().getTime()) / (60 * 60 * 24 * 1000))
  return Number.parseInt(rest)
}

export function getRestWeek(): string {
  const now: Date = new Date()
  const week: number = now.getUTCDay()
  if (week === 0 || week === 6) return ''
  return `距离周末放假还有 ${5 - now.getUTCDay()} 天`
}

export function getNowDate(): string {
  const now: Date = new Date()
  return `${now.getMonth() + 1}月${now.getDate()}日`
}

// 下班倒计时
export function getCountdownToLeavingWork(): string {
  const now: Date = new Date()

  const temp_h: number = 17 - now.getHours()
  const temp_m: number = 59 - now.getMinutes()
  const temp_s: number = 60 - now.getSeconds()
  return ` ${temp_h > 0 ? temp_h + 'h' : ''}${temp_m}m${temp_s}s`
}
