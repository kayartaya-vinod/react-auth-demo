import Axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';

const OrderList = () => {

    let [orders, setOrders] = useState([]);
    let [loggedIn, setLoggedIn] = useState(false);
    let [content, setContent] = useState(null);

    useEffect(async () => {
        const token = sessionStorage.getItem('token');
        if(!token) {
            // redirect to login page
            setContent(<Redirect to={'/login'} />);
        }

        const url = 'http://vinbasket.herokuapp.com/orders';
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try{
            const resp = await Axios.get(url, config);
            setOrders(resp.data);
        }
        catch(err) {
            setContent(<Redirect to={'/login'} />);
        }
    }, []);

    return <>
    {content}
    <h3>Your order list</h3>
    <table className="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>Order id</th>
                <th>Order date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map(o => <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.orderDate}</td>
                    <td>{o.orderStatus}</td>
                </tr>)
            }
        </tbody>
    </table>

</>;
}

export default OrderList;