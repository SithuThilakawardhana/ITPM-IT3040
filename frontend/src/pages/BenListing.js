import { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

const BenListing = () => {
    const [empdata, setEmpdata] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/ben/detail/" + id);
    };

    const LoadEdit = (id) => {
        navigate("/ben/edit/" + id);
    };

    const Removefunction = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch("http://localhost:3000/ben/" + id, {
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
        fetch("http://localhost:3000/ben")
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

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData =
        empdata &&
        empdata.filter((item) => {
            return (
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.name.toUpperCase().includes(searchQuery.toUpperCase())
            );
        });

    const handleDownloadFile = () => {
        fetch("http://localhost:3000/download")
            .then((res) => res.blob())
            .then((blob) => {
                // Create a download link element
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "file.txt");
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="container" component="main" maxWidth="100%">
            <div className="card" component="main" maxWidth="100%" style={{ marginTop: "50px" }}>
                <div className="card-title" style={{ marginTop: "20px", textAlign: "center" }}>
                    <h2>Benificiary Listing</h2>
                </div>
                <div className="card-body">
                    
                    <div className="divbtn" style={{ Align: "right", float: "right" }}>
                        <Link to="/ben/create" className="btn btn-success">
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
                                    <td>Donation Requesting</td>
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
                                            <td>{item.request}</td>
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

export default BenListing;