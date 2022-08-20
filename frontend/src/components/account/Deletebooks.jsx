import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./css/author.css"
import axios from "../../Axios"

const Deletebooks = () => {
    const [userData, setUserData] = useState("");
    let location = useLocation();
    // console.log(location.state.id)
    let bookId = location.state.id;
    useEffect(() => {
        axios.get(`/book-api/findBooks/${bookId}`)
        .then(res => setUserData(res.data))
        .catch(err => console.log('error', err))
    }, [])

    let deleteBook = async e => {
        await axios.delete(`/book-api/deleteBooks/${bookId}`);
        alert("Book Deleted...");
        window.location.assign('/account');
    }
    return (
        <Fragment>
                <div id="App">
      <header className="App-header">
        <h2 className="display-1">Delete Book</h2>
      </header>
      <div className="card card1" style={{"width":"28rem"}}>
        <div  className="card-body card-body1">
          <h5 className="card-title">Title : {userData.title}</h5>
          <h5 className="card-title">Author : {userData.author}</h5>
          <h5 className="card-title">Cost : {userData.cost}</h5>
          <h5 className="card-title">Description : {userData.description}</h5>
          <h5 className="card-title">Pages : {userData.pages}</h5>
          <h5 className="card-title">PublishDate : {userData.publishDate}</h5>
      </div>
    </div>
    <Link to="./account"><button className="btn btn-info btn-lg">Go Back</button></Link>
    <button className="btn btn-danger btn-lg" onClick={deleteBook}>Delete</button>
    </div>
        </Fragment>
    )
}


export default Deletebooks