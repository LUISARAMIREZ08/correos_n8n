import AlertMail from '../assets/AlertMail.png';
import '../styles/Title.css'

export const Title = () => {
  return (
    <div className='container-title'>
        <h1>Tús correos más importantes</h1>
        <p>Estos son los correos que más te interesan, puedes verlos todos en la bandeja de entrada.</p>
        <img src={AlertMail} alt="AlertMail" className='image-title' />
    </div>
  )
}
export default Title
