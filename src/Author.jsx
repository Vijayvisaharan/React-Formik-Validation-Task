import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useFormik } from 'formik';


function Author() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://668b92d30b61b8d23b0a2ac6.mockapi.io/books/${id}`)
      .then(res =>
        setData(res.data)
      )
      .catch(err => console.log(err))

  }, [])
  return (
    <>
      <div className='d-flex W-100 vH-100 justify-content-center align-items-center bg-light'>
        <div className='W-50 border bg-white shadow px-5 pt-3 pb-5 mt-5 rounded'>
          <h1 style={{color:'violet'}}>Details of Author</h1>
          <div className='mb-2'><b>Author Name:</b>
            <strong>{data.author}</strong>
          </div>
          <div className='mb-2'><b> Birthdate:</b>
            <strong>{data.authorbirthDate}</strong>
          </div>
          <div className='mb-2'><b>Biography:</b>
            <strong>{data.authorbiography}</strong>
          </div>
          <Link to={`/Update/${id}`} className='btn btn-success'>Edit</Link>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>

        </div>
      </div>
    </>
  )
}

export default Author
