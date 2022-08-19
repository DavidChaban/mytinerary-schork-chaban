import '../styles/WelcomePage.css'

function WelcomePage() {
    const title = "MyTinerary"
    const button = "Ingresar al sitio"
    return (
            <div className='App-container'>
                <h1 className='App-tittle'>MyTinerary</h1>
                <h2 className='App-slogan'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
                <button className='App-button'>Enter the site</button>
            </div>
    );
}
export default WelcomePage 