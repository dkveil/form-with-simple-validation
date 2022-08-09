import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const FormWrapper = styled.form`
    margin: 20px auto;

    label {
        display: block;
        margin-top: 16px;
        line-height: 1.5;
        span {
            display: block;
            color: red;
            font-size: 10px;
        }
    }

    input {
        display: block;
    }

    input[type="checkbox"] {
        display: inline-block;
        margin-left: 0;
        margin-right: 5px;
    }

    button {
        display: block;
        margin-top: 20px;
        padding: 10px 20px;
    }
`;

function App() {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
        accept: false,
    });
    const [error, setError] = React.useState({
        name: false,
        email: false,
        password: false,
        accept: false,
    });

    const messages = {
        username_incorect: "the name must be at least 10 characters long and must not contain spaces",
        email_incorect: "missing @ in the mail",
        password_incorect: "the password must be at least 8 characters long",
        accept_incorect: "unconfirmed consent",
    };

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setUser((prev) => ({
                ...prev,
                [e.target.name]: e.target.checked,
            }));
        } else {
            setUser((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit}>
                <label htmlFor="user">
                    Your name:
                    <input
                        type="text"
                        id="user"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    {error.name && <span>{messages.username_incorect}</span>}
                </label>

                <label htmlFor="email">
                    Your email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    {error.email && <span>{messages.email_incorect}</span>}
                </label>

                <label htmlFor="password">
                    Your password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    {error.password && <span>{messages.password_incorect}</span>}
                </label>

                <label htmlFor="accept">
                    <input
                        type="checkbox"
                        id="accept"
                        name="accept"
                        value={user.accept}
                        onChange={handleChange}
                    />
                    Confirm the rules
                    {error.accept && <span>{messages.accept_incorect}</span>}
                </label>

                <button>Zapisz</button>
            </FormWrapper>
        </Wrapper>
    );
}

export default App;
