import logo from '../Images/Logo.png'
import TopBar from './TopBar'

function Navbar() {

    


    return(
        <section>

            <TopBar />
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2b2c6e' }}>
                <div className="container">

                <a className="navbar-brand" href="#" >
                <img src={logo} alt="" />
                </a>
                <button style={{ backgroundColor: '#fab641' }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="home">الصفحة الرئيسية</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#product">المنتج</a>
                    </li>
                    
                </ul>
                    <a href="tel:+213549034559" className="btn btn-danger mx-4">اتصل بنا</a>
                </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar