import React from "react";
import styled from 'styled-components'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function App() {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="App">
            {console.log(user)}
            <FormWrapper onSubmit={handleSubmit}>
                <label htmlFor="user">
                    Twoje imię:
                    <input
                        type="text"
                        id="user"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="email">
                    Twój adres email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    ></input>
                </label>

                <label htmlFor="password">
                    Twóoje hasło:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    ></input>
                </label>

                <button>Zapisz</button>
            </FormWrapper>
        </div>
    );
}

export default App;
