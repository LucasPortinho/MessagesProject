import { useContext, useEffect, useMemo, useRef } from "react"
import { HomeContext } from "../../contexts/HomeContexts"
import actions from "../../utils/actions"
import { fetchMessages } from '../../utils/fetchMessages'
import { Message } from "../Message"
import './styles.css'

export const MessageContainer = () => {
    const messagesEndRef = useRef(null);
    const { messages, dispatch } = useContext(HomeContext)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };

    useEffect(() => {
        const loadMessages = async() => {
            const response = await fetchMessages()
            let counter = 1
            const messagesArray = response.filter(message => message.userId <= 2).map(message => {
                message.id = counter
                counter++
                return message
            })
            dispatch({type: actions.LOAD, payload: messagesArray})
        }
        loadMessages()
    }, [dispatch])

    useEffect(() => {
        scrollToBottom();
      }, [messages]);

    return(
        <div className="messages">
            {useMemo(() => {
                return (
                    messages.length > 0 && messages.map((message => {
                        return <Message message={message} key={message.id} />
                    }))
                )
            }, [messages])}
        <div ref={messagesEndRef}></div>
        </div>
    )
}