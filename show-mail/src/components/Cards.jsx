import '../styles/Cards.css'
import Mails from '../assets/mails.png'


export const Cards = ({email}) => {
  return (
    <>
        <div className="card">
            <div className='card-text'>
                <h4>De:</h4>
                <p>{email.from}</p>
            </div>
            <div className='card-text'>
                <h4>Fecha:</h4>
                <p>{email.date}</p>
            </div>
            <div className='card-text'>
                <h4>Asunto:</h4>
                <p>{email.subject}</p>
            </div>
            <div className='card-text'>
                <h4>Resumen:</h4>
                <p>{email.summary}</p>
                <p>{email.email}</p>
            </div>
            <div className='container-image'>
                <img src={Mails} alt="Organizacion" className='image-card'/>
            </div>
        </div>
    </>
  )
}
export default Cards