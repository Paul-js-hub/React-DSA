import React, { useEffect, useState } from 'react'

function Blink() {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      // The function we passed to `setIsVisible` is important because it is guaranteed to be invoked with
      // the current (most up to date) value of the `isVisible` boolean
      setIsVisible(current => !current)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>
        <span style={{visibility: isVisible ? 'visible' : 'hidden'}}>Hello, Paul!</span>
    </div>
  )
}

export default Blink