import Axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginForm = () => {

    const [state, setState] = useState({email: '', password: ''});
    const [content, setContent] = useState(null);
    const submitHandler = async (evt) => {
        evt.preventDefault();
        const url = 'http://vinbasket.herokuapp.com/login';
        try {
            const resp = await Axios.post(url, state);
            const data = resp.data;
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('id', data.id);
            sessionStorage.setItem('name', data.name);
            setState({email: '', password: ''});
            // redirect elsewhere
            setContent(<Redirect to={'/orders'} />);
        }
        catch(err) {
            // display a popup
        }
        
    };

    const changeHandler = ({target}) => {
        const {name, value} = target;
        setState({...state, [name]: value})
    };

    return <>
    {content}
        <div className="row">
            <div className="col"></div>
            <div className="col">

                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" 
                            value={state.email}
                            onChange={changeHandler}
                            id="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" 
                            value={state.password}
                            onChange={changeHandler}
                            id="password" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>

            </div>
            <div className="col"></div>
        </div>
    </>;
}

export default LoginForm;