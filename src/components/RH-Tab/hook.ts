export interface LayoutResult {
  headerLayoutStyle: { [key: string]: any }
  paneLayoutStyle: { [key: string]: any }
}
export function useLayout(
  position = 'top',
  noPosition = false,
  titleSize = 34,
  showPadding = 6
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
          top: 0,
          left: 0
        },
        paneLayoutStyle: {
          position: 'fixed',
          top: titleSize,
          padding: showPadding,
          left: 0
        }
      }
    case 'left':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          width: titleSize,
          wordBreak: 'break-word',
          top: 0,
          left: 0,
          zIndex: 99999
        },
        paneLayoutStyle: {
          position: 'fixed',
          padding: showPadding,
          paddingLeft: titleSize + showPadding,
          left: 0,
          top: 0
        }
      }
    case 'right':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          width: titleSize,
          wordBreak: 'break-word',
          top: 0,
          right: 0,
          zIndex: 99999
        },
        paneLayoutStyle: {
          position: 'fixed',
          padding: showPadding,
          paddingRight: titleSize + showPadding,
          right: 0,
          top: 0
        }
      }
    case 'bottom':
      return {
        headerLayoutStyle: {
          position: 'fixed',
          bottom: 0,
          left: 0
        },
        paneLayoutStyle: {
          position: 'fixed',
          padding: showPadding,
          bottom: titleSize,
          left: 0
        }
      }
  }
  return {
    headerLayoutStyle: {},
    paneLayoutStyle: {}
  }
}
