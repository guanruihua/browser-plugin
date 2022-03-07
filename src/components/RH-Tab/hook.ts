export interface LayoutResult {
  headerLayoutStyle: { [key: string]: any }
  paneLayoutStyle: { [key: string]: any }
}
export function useLayout(
  position = 'top',
  noPosition = false,
  titleSize = 34,
  showPadding = 6,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number
): LayoutResult {
  if (noPosition) {
    return {
      headerLayoutStyle: {},
      paneLayoutStyle: {}
    }
  }

  switch (position) {
    case 'top':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          top: top || 0,
          left: left || 0
        },
        paneLayoutStyle: {
          position: 'fixed',
          top: top ? top + titleSize : titleSize,
          padding: showPadding,
          left: left || 0
        }
      }
    case 'left':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          width: left ? titleSize + left : titleSize,
          wordBreak: 'break-word',
          top: top || 0,
          left: left || 0,
          zIndex: 99999
        },
        paneLayoutStyle: {
          position: 'fixed',
          padding: showPadding,
          paddingLeft: titleSize + showPadding,
          left: left || 0,
          top: top || 0
        }
      }
    case 'right':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          width: right ? titleSize + right : titleSize,
          wordBreak: 'break-word',
          top: top || 0,
          right: right || 0,
          zIndex: 99999
        },
        paneLayoutStyle: {
          position: 'fixed',
          padding: showPadding,
          paddingRight: titleSize + showPadding,
          right: right || 0,
          top: top || 0
        }
      }
    case 'bottom':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          bottom: bottom || 0,
          left: left || 0
        },
        paneLayoutStyle: {
          position: 'fixed',
          padding: showPadding,
          bottom: bottom ? bottom + titleSize : titleSize,
          left: left || 0
        }
      }
  }
  return {
    headerLayoutStyle: {},
    paneLayoutStyle: {}
  }
}
