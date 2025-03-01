import React from 'react';

function Login(props) {
    const user = {
        userName: "", email: "",
    };

    // const handleClick = () => {
    //     Puedes agregar validación aquí si es necesario
    //     props.handleLogin(user);
    // }

    const setUsername = (e) => {
        user.userName = e.target.value;
    }
    const setEmail = (e) => {
        user.email = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        props.handleLogin(user);
    }

    return (
        <section>
            <h2>Login section</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={setUsername}/>
                </fieldset>
                <fieldset><label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={setEmail}/></fieldset>
                <button>Login</button>
            </form>
            {/*<button onClick={handleClick}>Login</button>*/}
        </section>
    );
}

export default Login;