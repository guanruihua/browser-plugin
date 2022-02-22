import React from 'react'
import { tUseState } from './hook'

export type tUseTheme = [{ [key: string]: any }, (value: string) => void, string]

export const Theme: any = {
  bright: {
    background: '#ffffff',
    backgroundColor: '#ffffff'
  },
  dark: {
    background: '#242424',
    backgroundColor: '#242424'
  },
  edge: {
    background: '#445469',
    backgroundColor: '#445469'
  },
  isTheme: function (theme: string): boolean {
    if (theme === 'isTheme') return false
    return Object.keys(this).includes(theme)
  }
}

export const ThemeKey = 'theme'
export function useTheme(value: string): tUseTheme {
  const [themeKey, setThemeKey]: tUseState = React.useState(value)
  const [theme, setTheme] = React.useState(Theme.bright)

  React.useEffect((): void => {
    const themeKey: string = localStorage.getItem(ThemeKey) || 'bright'
    setThemeKey(themeKey || 'bright')
    setTheme(Theme[themeKey] || Theme.bright)
  }, [])

  const updateTheme: (keyValue: any) => void = (keyValue: any): void => {
    if (typeof keyValue === 'string' && Theme[keyValue] && Theme.isTheme(keyValue)) {
      setThemeKey(keyValue)
      setTheme(Theme[keyValue])
      localStorage.setItem(ThemeKey, keyValue)
    }
  }

  return [theme, updateTheme, themeKey]
}
