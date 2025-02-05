import { MessageContainer } from "../MessageContainer"
import { MessageInput } from "../MessageInput"
import { Header } from '../Header'
import './styles.css'

export const Container = () => {
    return (
        <div className="App">
            <Header />
            <MessageContainer />
            <MessageInput />
        </div>    
    )
}