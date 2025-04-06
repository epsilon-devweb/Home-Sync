import Header from "../header/header"
import Footer from "../footer/footer"
import "../../scss/style.scss"


export default function Layout(props) {
    const children = props.children
    return (
        <div className="box">
            <Header />
                <main className="container">
            {children}
                </main>
            <Footer />
        </div>
    )
}