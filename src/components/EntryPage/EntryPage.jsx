import React from 'react'
import './EntryPage.css'
function EntryPage() {
    const clickSignIn = () => {
        window.location.href = '/signin'
    }
    const clickLogIn = () => {
        window.location.href = '/login'
    }
  return (
    <div className='entryPage'>
        <h1 className='entryHead'>Welcome to Trading Journel</h1>
        <div className='btns'>
            <button className='button' onClick={clickSignIn}>
                Sign In
            </button>
            <button className='button'  onClick={clickLogIn}>
                Log In
            </button>
        </div>
    </div>
  )
}

export default EntryPage