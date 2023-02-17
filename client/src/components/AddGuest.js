/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { addGuest, fetchGuests } from '../actions'
function AddGuest() {

  const dispatch = useDispatch()
  const guestList = useSelector(state => state.addGuest)

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [instagram, setInstagram] = useState("")
  const [pin, setPin] = useState("")
  const [file, setfile] = useState(null)
  const [error, setError] = useState(null)
  const [isSucess, setisSucess] = useState(false)
  const [response, setResponse] = useState(null)
  const [isForm, setisForm] = useState(null)

  const history = useHistory()

  useEffect(() => {
    setResponse(guestList)
    if (guestList?.status === 201) {
      dispatch(fetchGuests())
      history.push("/")
    }
  }, [guestList])

  useEffect(() => {
    setTimeout(() => {
      setResponse(null)
    }, 2000)
  }, [response])


  useEffect(() => {
    setisForm(null)
  }, [name, image, linkedIn, instagram, pin])



  function onNameChange(e) {
    setName(e.target.value)
  }

  function onImageChange(e) {
    setImage(e.target.value)
  }

  function onLinkedInChange(e) {
    setLinkedIn(e.target.value)
  }

  function onInstagramChange(e) {
    setInstagram(e.target.value)
  }

  function onPinChange(e) {
    setPin(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (name !== "" && image !== "" && linkedIn !== '' && instagram !== "" && pin !== "") {
        const payload = {
          name,
          image,
          linkedIn,
          instagram,
          pin,
        }
        dispatch(addGuest(payload))
      } else {
        setisForm("Please Filled all the Details")
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleFileUpload = async (e) => {
    e.preventDefault()
    try {
      if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        setError("Only for Excel Sheet is valid")
        return
      } else {
        const formData = new FormData()
        formData.append('file', file)

        const response = await axios.post('/upload/file', formData)
        if (response.data.status === 201) {
          setisSucess(true)
          setTimeout(async () => {
            await dispatch(fetchGuests())
            history.push("/")

          }, 3400)
        }
      }
    } catch (error) {
      console.log('error on the file is here', error)
    }
  }

  return (
    <div>
      Add guest form
      <div style={styles.uploder}>
        <input type="file" style={styles.input_main} onChange={(e) => { setError(null); setfile(e.target.files[0]) }} />
        {error !== null ? <p style={styles.error_data}>{error}</p> : null}
        {isSucess ? <p style={styles.sucess_data}>File Uploaded.</p> : null}
        <button onClick={handleFileUpload}>Upload</button>
      </div>
      <form >
        <input required name="name" className="form-control top" type="text" value={name} onChange={onNameChange} placeholder="Name" />
        <input required name="image" className="form-control middle" type="text" value={image} onChange={onImageChange} placeholder="Image" />
        <input required name="linkedIn" className="form-control middle" type="text" value={linkedIn} onChange={onLinkedInChange} placeholder="LinkedIn" />
        <input required name="instagram" className="form-control middle" type="text" value={instagram} onChange={onInstagramChange} placeholder="Instagram" />
        <input required name="pin" className="form-control bottom" type="text" value={pin} onChange={onPinChange} placeholder="Pin" />
        <button class="btn btn-primary" type='submit' onClick={handleSubmit}>Submit</button>
      </form>
      {isForm !== null ? <p style={{ color: 'red', fontSize: '18px', marginTop: '20px' }}>{isForm}</p> : null}
      {response !== null ? <p style={{ color: response?.status === 201 ? 'green' : 'red', fontSize: '18px', marginTop: '20px' }}>{response?.message}</p> : null}
    </div>
  )
}
const styles = {
  uploder: {
    display: 'flex',
    alignItems: 'center'
  },
  input_main: {
    color: '#fff'
  },
  sucess_data: {
    marginBottom: '0',
    color: 'green',
    marginRight: '8px'
  },
  error_data: {
    color: 'red',
    marginBottom: '0',
    marginRight: '8px'
  }
}
export default AddGuest