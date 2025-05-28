import Cards from './Cards'
import useEmails from "../hooks/useEmails"
import "../styles/CardsList.css"

export const CardsList = () => {
    const { emails, loading, error } = useEmails();

    if (loading) {
        return (
        <div className="container-cards">
            <div className="loader-container">
                <div className="loader"></div>
                <p>Cargando correos...</p>
            </div>
        </div>
        );
    }

    if (error) {
        return (
        <div className="container-cards">
            <div className="container-loading">Error: {error}</div>
        </div>
        );
    }

    return (
        <div className="container-cards">
        {emails.map((email, index) => (
            <Cards key={index} email={email} />
        ))}
        </div>
    );
};
export default CardsList