import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Components/Form/Form";

function App() {
    const [accordian, setAccordian] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState("");
    // const [a, setA] = useState(false);

    const accordianClick = () => {
        setAccordian((prevState) => !prevState);
    };

    // const getData = async () => {

    // }

    const getData = async() =>{
        await axios
        .get("http://localhost:3004/employee")
        .then((response) => setData(response.data))
        .catch((e) => setError(e.message));
    }

    useEffect(() => {
        getData();
    }, []);

    // useEffect(() => {
    //     error === "" ? console.log(data) : console.log(error);
    // }, [data, error]);

    return (
        <div className="App">
            <Navbar accordianClick={accordianClick} accordian={accordian} />
            <Body
                accordian={accordian}
                accordianClick={accordianClick}
                data={data}
                error={error}
                getData={getData}
            />
            <Footer />
        </div>
    );
}

export default App;
