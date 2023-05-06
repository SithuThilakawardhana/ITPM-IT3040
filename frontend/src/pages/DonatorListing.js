import { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

const DonatorListing = () => {
    const [empdata, setEmpdata] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/donator/detail/" + id);
    };

    const LoadEdit = (id) => {
        navigate("/donator/edit/" + id);
    };

    //Delete 
    const Removefunction = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch("http://localhost:3000/donator/" + id, {
                method: "DELETE"
            })
                .then((res) => {
                    alert("Removed successfully.");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };
    

    useEffect(() => {
        fetch("http://localhost:3000/donator")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setEmpdata(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    //search option
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    
    //filter the entries
    const filteredData =
        empdata &&
        empdata.filter((item) => {
            return (
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.name.toUpperCase().includes(searchQuery.toUpperCase()) ||
                item.donate.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.donate.toUpperCase().includes(searchQuery.toUpperCase()) ||
                item.address.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.address.toUpperCase().includes(searchQuery.toUpperCase()) ||
                item.phone.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.phone.toUpperCase().includes(searchQuery.toUpperCase())
            );
        });
    
    //report generation
    const handleDownloadFile = () => {
        fetch("http://localhost:3000/donator")
            .then((res) => res.json())
            .then((data) => {
                const csvData = [
                    ["ID", "Name", "Address", "Phone", "Donation Type"],
                    ...data.map((item) => [item.id, item.name, item.address, item.phone, item.donate])
                ];
                const csvContent = "data:text/csv;charset=utf-8," + csvData.map(e => e.join(",")).join("\n");
                const link = document.createElement("a");
                link.href = encodeURI(csvContent);
                link.setAttribute("download", "donator_list.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    
    

    return (
        <div className="container" component="main" maxWidth="100%">
            <div className="card" component="main" maxWidth="100%" style={{ marginTop: "50px" }}>
                <div className="card-title" style={{ marginTop: "20px", textAlign: "center" }}>
                    <h2>Donator Listing</h2>
                </div>
                <div className="card-body">
                    
                    <div className="divbtn" style={{ Align: "right", float: "right" }}>
                        <Link to="/donator/create" className="btn btn-success">
                            Add New (+)
                        </Link>
                    </div>
                    <div>
                        <form style={{ marginTop: "60px", textAlign: "center" }}>
                            <div
                                className="mb-5"
                                style={{ marginTop: "2px", textAlign: "center", width: "300px", float: "right" }}
                            >
                                <input
                                   

                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                        </form>

                       

                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Address</td>
                                    <td>Phone</td>
                                    <td>Donation Type</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData &&
                                    filteredData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.donate}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <div className="row-2">
                    <div className="col"style={{ textAlign: "right",float:"left"  }}>
                            <Link to="/dashboard" className="btn btn-danger">Back</Link>
                        </div>
                        <div className="col" style={{ textAlign: "right" ,float:"right" }}>
                            <button className="btn btn-primary" onClick={handleDownloadFile}>
                                Download Detail file
                            </button>
                        </div>
                       
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonatorListing;