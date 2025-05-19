import { useNavigate } from "react-router-dom"
import './EntryPage.css'
function EntryPage() {
    const navigate=useNavigate()
    const clickSignIn = () => {
        navigate('/signin')
    }
    const clickLogIn = () => {
        navigate('/login')
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
