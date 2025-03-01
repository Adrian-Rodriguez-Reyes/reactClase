import {useState} from "react";
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import Login from "./components/Login.jsx";
import MovieList from "./components/MovieList.jsx";
import AnimalList from "./components/AnimalList.jsx";
import MemeList from "./components/MemeList.jsx";


function App() {
    const [user, setUser] = useState({
        userName: "Bea",
        email: "bea@gmail.com"
    })
    //useEffect(() => {
    //  console.log("Se ejecuta cuando cambia la variable reactiva de usuario")
    //}, [user]);
    // useEffect(() =>{
    //   console.log("Esto se ejecuta cada vez que se carga el componente raiz es decir este mismo componente")
    //})

    //Variable inicializada en 0
    //let number = 0;
    //Al hacerlo asi ya que una variable solo se puede cambiar con su SET en este caso setNumber
    const [number, setNumber] = useState(0)
    const placeholder = "Escribe aqui";
    const addOne = () => {
        //number++, esto solo vale para la consola
        //Aqui le seteamos number + 1, practicamente no se puede cambiar si no es con su setNumber
        setNumber(number + 1);
        console.log(number);
    }

    const [greetings, setGreetings] = useState("Bienvenidos a mi web!")

    const links = {
        home: "Home",
        blog: "Blog",
        news: "News",
        contact: "Contact Us"
    }

    const condition = false;


    const login = (userInfo) => {
        console.log(userInfo);
        setUser(userInfo);
    }


    //Dos contantes completamente diferentes pero creadas con el mismo const
    const sayHello = () => {
        console.log("Hello!")
    }, handleChange = (e) => {
        //console.log(e);
        console.log(e.target.value);
    };

    const [showMovies, setShowMovies] = useState(true);
    return (
        <>
            <HeaderComponent greetings={greetings} links={links}></HeaderComponent>
            <main className='main-content'>
                <MemeList></MemeList>
                {/*<AnimalList></AnimalList>*/}
                {user.userName && <h2 onClick={sayHello}>Hola {user.userName}!</h2>}
                <Login handleLogin={login}></Login>
                {/*Si por ejemplo pulsamos el login aunque sea un componente el mensaje se mostrara ya que en login
                     se modifica una variable de estado user que esta en la raiz por tanto renderizara de nuevo
                     App.js /*}
                {/*
                 {condition && <h2>La condicion se cumple</h2>}
                 {!condition && <h2>La condicion no se cumple</h2>}
                 */}
                {condition ? (<h2>La condicion se cumple</h2>) : (<h2>La condicion no se cumple</h2>)}

                <h2 onClick={addOne}>Number: {number}</h2>
                <input placeholder={placeholder} type="text" onChange={handleChange}></input>
                <br/><br/>
                <ButtonComponent></ButtonComponent>
                <br/><br/>
                <button onClick={() => setShowMovies(!showMovies)}> Toggle Movies</button>
                {showMovies && <MovieList></MovieList>}
            </main>

        </>
    )
}

export default App
