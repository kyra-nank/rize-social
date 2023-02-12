import React, { useState } from 'react';
function AddGuest() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [pin, setPin] = useState("");

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

  return (
    <div>
      Add guest form
      <form action="/add-guest" method="post">
        <input required name="name" className="form-control top" type="text" value={name} onChange={onNameChange} placeholder="Name" />
        <input required name="image" className="form-control middle" type="text" value={image} onChange={onImageChange} placeholder="Image" />
        <input required name="linkedIn" className="form-control middle" type="text" value={linkedIn} onChange={onLinkedInChange} placeholder="LinkedIn" />
        <input required name="instagram" className="form-control middle" type="text" value={instagram} onChange={onInstagramChange} placeholder="Instagram" />
        <input required name="pin" className="form-control bottom" type="text" value={pin} onChange={onPinChange} placeholder="Pin" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddGuest;