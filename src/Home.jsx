import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Author from './Author';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://668b92d30b61b8d23b0a2ac6.mockapi.io/books')
      .then(res =>
        setData(res.data)
      )
      .catch(err => console.log(err))

  }, [])
   const deleteBook = (id) => {
    axios.delete(`https://668b92d30b61b8d23b0a2ac6.mockapi.io/books/${id}`)
      .then(res => {
        setData(data.filter(book => book.id !== id)); 
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <div className=" d-flex detail-header detail-header" >
        <div className="container-fluid" style={{ backgroundColor: '#e9d66b ', height: '14rem' }}>
          <div className="col-12 text-center m-5 " >
            <h1 ><b>Book Gallery</b></h1>
            <p className="header-groups">Category
              <a className="btn btn-header-groups">Specialty</a>
            </p>
          </div>
        </div>
      </div>
      <div className='container justify-content-space-between '>
        <div className=' float: right '>
          <Link to='/Added' className="btn btn-primary m-3 " ><h1>Add book</h1></Link>
        </div>
        <div className="main">
          <div className='container '>
            <div className='row'>
              {
                data.map((data, i) => (
                  <div className="col-lg-4" key={i}>
                    <div className="card mt-5" style={{ backgroundColor: '#cfaac5' }}>

                      <div className="card-body">
                      
                        <p ><b >Title:</b> <b style={{ color: '#6845fa' }}>{data.title}</b> </p>
                        <img class="card-img-right" src={data.image} style={{ width:"8rem" ,height:"8rem" }} alt="Card image cap"/>
                        <p> <b>Author:</b>  {data.author}</p>
                        <p> <b>ISBN:</b> {data.ISBN}</p>
                        <p> <b>Genre:</b>  {data.genre}</p>
                        <p><b>PublishedDate:</b>{data.publishedDate}</p>
                        <p> <b>Price:</b> <b style={{ color: 'blue' }}>{data.price}/USD</b> </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to={`/Author/${data.id}`} className='btn btn-success ms-3 mt-4 '>Author</Link>
                        <Link to={`/Update/${data.id}`} className='btn btn-primary ms-3 mt-4'>UPDATE</Link>
                        <button className="btn btn-danger ms-3 mt-4"
                        onClick={() => deleteBook(data.id)}>Delete</button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
