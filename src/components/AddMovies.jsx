import React, { useState } from 'react'
import MovieNavBar from './MovieNavBar'
import axios from 'axios'

const AddMovies = () => {
    const [input, setInput] = new useState(
        {
            "movieName": "",
            "movieDirector": "",
            "movieActor": "",
            "releaseYear": ""
        }
    )
    const inputHandler = (event) => {
        setInput({...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        axios.post("http://localhost:3001/api/movie/add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Added")
                    setInput(
                        {
                            "movieName": "",
                            "movieDirector": "",
                            "movieActor": "",
                            "releaseYear": ""
                        }
                    )
                } else {
                    alert("went wrong")
                }
            }
        )
    }
    return (
        <div>
            <MovieNavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Movie Name</label>
                                <input type="text" className="form-control" value={input.movieName} name='movieName' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Director</label>
                                <input type="text" className="form-control" value={input.movieDirector} name='movieDirector' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Actor</label>
                                <input type="text" className="form-control" value={input.movieActor} name='movieActor' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Release Year</label>
                                <input type="text" className="form-control" value={input.releaseYear} name='releaseYear' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-info" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMovies