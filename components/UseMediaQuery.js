import { useState, useEffect } from "react"

const useMatchMedia = (mediaQuery) => {
  const [isMatching, setIsMatching] = useState(null)
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)
    const listener = (matches) => {
      setIsMatching(matches.matches)
    }
    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener)
    } else {
      watcher.addListener(listener)
    }
    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener)
      } else {
        return watcher.removeListener(listener)
      }
    }
  }, [mediaQuery])

  return isMatching
}

export default useMatchMedia;