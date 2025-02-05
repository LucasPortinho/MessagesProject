import { useContext, useState, useEffect, useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { HomeContext } from '../../contexts/HomeContexts'
import actions from '../../utils/actions'
import './styles.css'

export const MessageInput = () => {
    const [value, setValue] = useState('')
    const { state: {loading}, dispatch } = useContext(HomeContext);
    const buttonRef = useRef(null);
    const inputRef = useRef(null)
 
    const sendMessage = () => {
        const message = value.trim()
        if (!message) {
            alert('O input não deve estar vazio.')
            return
        }

        const payload = {
            message: message,
            userId: 1,  
        }

        dispatch({ type: actions.ADD, payload })

        setValue('')
    }
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          buttonRef.current.click();
        }
        else {
            inputRef.current.focus()
        }

      };
  
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="input-container">
            <input type="text" className="input" onChange={(e) => setValue(e.target.value)} value={value} ref={inputRef} placeholder="Envie sua mensagem"/>
            <button className='button' ref={buttonRef} onClick={sendMessage} disabled={loading}>
                <AiOutlineSend />
            </button>
        </div>
    )
}
