import '../styles/WelcomePage.css'

function WelcomePage() {
    const title = "MyTinerary"
    const button = "Ingresar al sitio"
    return (
            <div className='App-container'>
                <h1 className='App-tittle'>MyTinerary</h1>
                <h2 className='App-slogan'>Dream big, we will make it possible</h2>
                <h3 className='App-tittle2'>About Us</h3>
                <p className='App-text'>We are a page designed so that you can fully enjoy your next trip, without worrying about lodging, expeditions, logistics, etc.</p>
                <p className='App-text'>We are backed by more than 10 years of experience and more than excellent reviews. so we can assure you guarantee and security when trusting us
                </p>
                <p className='App-text'>We offer multiple options when choosing your destination. We take into account the objective of your trip, your budget, the people who travel, their tastes and we are open to new suggestions in order to improve our service.
                </p>
                <button className='App-button'>Enter the site</button>
            </div>
    );
}
export default WelcomePage 