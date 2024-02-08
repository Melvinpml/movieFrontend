import React, { useEffect, useState } from 'react'
import MovieNavBar from './MovieNavBar'
import axios from 'axios'

const ViewMovies = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/movie/viewall").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
    return (
        <div>
            <MovieNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Movie Name</th>
                                    <th scope="col">Movie Director</th>
                                    <th scope="col">Movie Actor</th>
                                    <th scope="col">Release year</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.movieName}</th>
                                            <td>{value.movieDirector}</td>
                                            <td>{value.movieActor}</td>
                                            <td>{value.releaseYear}</td>
                                        </tr>
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMovies