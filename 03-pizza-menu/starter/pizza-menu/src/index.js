import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <h1>Hello! React!</h1>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
    // const style = {
    //     // color: "red",
    //     // FontSize: "48px",
    //     // textTransform: "Uppercase",
    // };
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>

            <ul className="pizzas">
                {/*<Pizza name="Pizza Spinaci"*/}
                {/*       ingredient="Tomato, mozarella, spinach and ricotta cheesef"*/}
                {/*       photoName="/pizzas/spinaci.jpg"*/}
                {/*       price={10}/>*/}
                {/*<Pizza name="Pizza Funghi"*/}
                {/*       ingredient='Tomato, mushroom'*/}
                {/*       price={12}*/}
                {/*       photoName="/pizzas/funghi.jpg"*/}
                {/*/>*/}

                {pizzaData.map(
                    (pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))
                }
            </ul>
        </main>
    );
}

function Pizza(props) {
    console.log(props);
    return (
        <div className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 12;
    // const isOpen = hour >= openHour && hour <= closeHour;
    const isOpen = true

    console.log(isOpen);

    // if( hour >= openHour && hour <= closeHour ) {
    //     alert("We're currently open!");
    // } else  {
    //     alert("Sorry! We're closed!");
    // }

    return (
        <footer className="footer">
            {/*{new Date().toLocaleTimeString()}. Wee.'re currently open!*/}
            {isOpen && (
                <div className="order">
                <p>We're open until {closeHour}:00. Come visit us or order onlin</p>
                <button className="btn">Open hour</button>
                </div>
            )}
        </footer>
    );
    // return React.createElement("footer", null, "We're currently open!");
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
