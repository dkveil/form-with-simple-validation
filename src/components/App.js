import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 320px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;

    @media screen and (min-width: 768px){
        width: 520px;
    }

`;

const FormWrapper = styled.form`
    margin: 20px auto;
    padding-bottom: 30px;

    label {
        color: rgb(84, 105, 212);
        display: block;
        font-size: 14px;
        font-weight: 600;
        margin-top: 16px;
        line-height: 2;
        span {
            display: block;
            color: red;
            font-size: 10px;
        }
    }

    input {
        display: block;
        font-size: 16px;
        line-height: 28px;
        padding: 6px 16px;
        border-radius: 4px;
        border: 1px solid lightgray;
        outline-color: rgb(84 105 212 / 0.5);
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
        width: 100%;
        border: none;
        border-radius: 4px;
        background-color: rgb(84, 105, 212);
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
            rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
    }
`;

function App() {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
        accept: false,
        message: "",
    });
    const [error, setError] = React.useState({
        name: false,
        email: false,
        password: false,
        accept: false,
    });

    const messages = {
        username_incorect:
            "the name must be at least 10 characters long and must not contain spaces",
        email_incorect: "missing @ in the mail",
        password_incorect: "the password must be at least 8 characters long",
        accept_incorect: "unconfirmed consent",
    };

    React.useEffect(() => {
        if (user.message !== "") {
            setTimeout(() => (
                setUser((prev) => ({
                    ...prev,
                    message: "",
                }))
            ), 3000
            );
        }
    }, [user]);

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

    const formValidation = () => {
        let name = false;
        let email = false;
        let password = false;
        let accept = false;

        let correct = false;

        if (user.name.length > 10 && user.name.indexOf(" ") === -1) {
            name = true;
        }
        if (user.email.indexOf("@") !== -1) {
            email = true;
        }
        if (user.password.length >= 8) {
            password = true;
        }
        if (user.accept) {
            accept = true;
        }
        if (name && email && password && accept) {
            correct = true;
        }
        return {
            correct,
            name,
            email,
            password,
            accept,
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = formValidation();

        if (validation.correct) {
            setUser({
                name: "",
                email: "",
                password: "",
                accept: false,
                message: "Sended!",
            });

            setError({
                name: false,
                email: false,
                password: false,
                accept: false,
            });
        } else {
            setError({
                name: !validation.name,
                email: !validation.email,
                password: !validation.password,
                accept: !validation.accept,
            });
        }
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
                    {error.password && (
                        <span>{messages.password_incorect}</span>
                    )}
                </label>

                <label htmlFor="accept">
                    <input
                        type="checkbox"
                        id="accept"
                        name="accept"
                        checked={user.accept}
                        onChange={handleChange}
                    />
                    Confirm the rules
                    {error.accept && <span>{messages.accept_incorect}</span>}
                </label>

                <button>Send</button>
                {user.message && <h3>{user.message}</h3>}
            </FormWrapper>
        </Wrapper>
    );
}

export default App;
