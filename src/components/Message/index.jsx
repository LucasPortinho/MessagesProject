import P from 'prop-types'
import './styles.css'

export const Message = ({message}) => {
    const pClass = message.userId === 1 ? 'user' : 'bot'

    return (
        <div className={`message ${pClass}`}>
            <div key={message.id} className="text">{message.title}</div>
        </div>
    )
}

Message.propTypes = {
    message: P.shape({
        userId: P.number,
        id: P.number,
        title: P.string,
        body: P.string,
    })
}
