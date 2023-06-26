import React from 'react'
import styles from './style'
import ShineHover from './components/ShineHover'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ShineHover/>
        </div>
      </div>
    </div>
  )
}

export default App
