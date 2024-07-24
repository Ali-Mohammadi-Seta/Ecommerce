import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx"
import ProductDetails from "./pages/productDetails.jsx"
import SideBar from "./components/sideBar.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import ThemeToggle from "./components/themeToggle.jsx";


function App() {




    return (
        <div>


            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/product/:id' element={<ProductDetails />}/>
                </Routes>
                <ThemeToggle />
                <SideBar />
                <Footer />
            </Router>


        </div>


    )
}

export default App
