import { createContext, useState } from 'react';

export const TimerContext = createContext(null);

export const TimerProvider = ({children}) => {
  const [timer, setTimer] = useState(0);
  return (
    <TimerContext.Provider value={{timer, setTimer, msg:'hello'}}>
      {children}
    </TimerContext.Provider>
  )
}