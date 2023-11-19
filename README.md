### React component - Day night switch from tik-tok

https://dmitrii-shap.github.io/day-night-switch/
````
import React, { useState } from 'react'
import DayNightSwitch from "react-day-night-switch";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <DayNightSwitch
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
  )
}
````

![day](https://github.com/Dimazzz/funny-switch-from-tiktok/blob/master/pic/day.png?raw=true)

![night](https://github.com/Dimazzz/funny-switch-from-tiktok/blob/master/pic/night.png?raw=true)
