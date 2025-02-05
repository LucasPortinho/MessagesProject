import { MessageContainer } from "../MessageContainer"
import { MessageInput } from "../MessageInput"
import { Header } from '../Header'
import './styles.css'
import { useContext } from "react"
import { HomeContext } from "../../contexts/HomeContexts"
import { AiOutlineLoading } from 'react-icons/ai'

export const Container = () => {
    const { state: { loading } } = useContext(HomeContext)

    return (
        <div className="App">
            {loading && (
                <div className="loading">
                    <AiOutlineLoading className="loading-icon" />
                </div>
            )}
            <Header />
            <MessageContainer />
            <MessageInput/>
        </div>
    )
}
