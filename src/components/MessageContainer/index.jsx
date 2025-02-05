import { useContext, useEffect, useMemo, useRef } from "react"
import { HomeContext } from "../../contexts/HomeContexts"
import { fetchMessages } from '../../utils/fetchMessages'
import { Message } from "../Message"
import './styles.css'

export const MessageContainer = () => {
    const messagesEndRef = useRef(null);
    const { state, dispatch } = useContext(HomeContext)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };

    useEffect(() => {
        fetchMessages(dispatch)
    }, [dispatch])

    useEffect(() => {
        scrollToBottom();
      }, [state.messages]);

    return(
        <div className="messages">
            {useMemo(() => {
                return (
                    state.messages.length > 0 && state.messages.map((message => {
                        return <Message message={message} key={message.id} />
                    }))
                )
            }, [state.messages])}
        <div ref={messagesEndRef}></div>
        </div>
    )
}