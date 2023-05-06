import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const DonatorDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/donator/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>

               <div className="container">
                
            <div className="card" component="main" maxWidth="100%" style={{ marginTop: '20px',textAlign: "left" }}>
            <div className="card-title"style={{ marginTop: '20px',textAlign: "center" }}>
                         <h2>Donator Details</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div style={{ marginTop: '10px',textAlign: "center" }}>
                        <h4>The Donator name is : <b>{empdata.name}</b>  ({empdata.id})</h4>
                        <h4>Contact Details</h4>
                        <h5>Address is : {empdata.address}</h5>
                        <h4>Phone is : {empdata.phone}</h4>
                        <h4>Donations done : {empdata.donate}</h4>
                        <Link className="btn btn-danger" to="/donatorlisting">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
        </div >
    );
}

export default DonatorDetail;