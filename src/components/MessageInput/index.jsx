import { useContext, useState, useEffect, useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { HomeContext } from '../../contexts/HomeContexts'
import actions from '../../utils/actions'
import './styles.css'

export const MessageInput = () => {
    const [state, setState] = useState('')
    const { dispatch } = useContext(HomeContext);
    const buttonRef = useRef(null);
    const inputRef = useRef(null)
 
    const sendMessage = () => {
        const message = state.trim()
        if (!message) {
            alert('O input não deve estar vazio.')
            return
        }

        const payload = {
            message: message,
            userId: 1,  
        }

        dispatch({ type: actions.ADD, payload })

        setState('')
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
            <input type="text" className="input" onChange={(e) => setState(e.target.value)} value={state} ref={inputRef} placeholder="Envie sua mensagem"/>
            <button className='button' ref={buttonRef} onClick={sendMessage}>
                <AiOutlineSend />
            </button>
        </div>
    )
}