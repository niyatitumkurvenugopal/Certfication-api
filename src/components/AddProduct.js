import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './style.css'

function AddProduct(props) {
  const [Addcert, setAddcert] = useState({
    id: '',
    name: '',
    certified: '',
    year: ''
  })

  let handleClose = () => {
    props.hideShowAddModal();
    props.showCert();
  };
  let handleChange = (event) => {
    setAddcert({
      ...Addcert,
      [event.target.name]: event.target.value,
    });
  };

  let addCertification = (event) => {

    //NormalValidation
    validateName();
    validateCertified();
    validateYear();

    if (validateName() && validateCertified() && validateYear()) {
    props.hideShowAddModal();
    props.showCert(Addcert);
    console.log('certifi', Addcert);
    setAddcert({
      id: '',
      name: '',
      certified: '',
      year: ''
    })
  }
  }

  //Normal Validation
  
  const [nameError, setnameError] = useState("")
    const validateName = () => {
        if (Addcert.name) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(Addcert.name)) {
                setnameError("");
                return true;
            }
            else {
                setnameError("Enter valid Name");
            }
        }
        else {
            setnameError("Name is Required");
        }
        return false;
    };

    const [certifiedError, setcertifiedError] = useState("")
    const validateCertified = () => {
        if (Addcert.certified) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(Addcert.certified)) {
                setcertifiedError("");
                return true;
            }
            else {
                setcertifiedError("enter valid Certfied Name");
            }
        }
        else {
            setcertifiedError("Certified Name is Required");
        }
        return false;
    };

    const [yearError, setyearError] = useState("")
    const validateYear = () => {
        if (Addcert.year) {
            let regex = /^(195\d|19[89]\d|20[01]\d|202[0-2])$/;
            if (regex.test(Addcert.year)) {
                setyearError("");
                return true;
            }
            else {
                setyearError("Enter Year between 1950 to 2022");
            }
        }
        else {
            setyearError("Year is Required");
        }
        return false;
    };
  
  return (
    <>
      <Modal show={props.showAddModal} onHide={handleClose}>
        {/* <Formik
          initialValues={Addcert}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          > */}

          {/* {(props) => (
            <Form> */}

              <Modal.Header closeButton>
                <Modal.Title>Add Certification</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <form>

                <div>
                  <label>Certification Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={Addcert.name}
                    onChange={handleChange}
                  />
                  {/* <p className='error'><ErrorMessage name="name" /></p> */}
                  {nameError && <div className="errMsg" >{nameError}</div>}

                </div>
                <div>
                  <label>Certified From</label>
                  <input
                    type="text"
                    className="form-control"
                    name="certified"
                    value={Addcert.certified}
                    onChange={handleChange}
                  />
                  {/* <p className='error'><ErrorMessage name="certified" /></p> */}
                  {certifiedError && <div className="errMsg">{certifiedError}</div>}


                </div>
                <div>
                  <label>Year of Completion</label>
                  <input
                    type="number"
                    className="form-control"
                    name="year"
                    value={Addcert.year}
                    onChange={handleChange}
                  />
                  {/* <p className='error'><ErrorMessage name="year" /></p> */}
                  {yearError && <div className="errMsg">{yearError}</div>}


                </div>

                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary" onClick={addCertification}>
                  Add Certificate
                </Button>
              </Modal.Footer>
            {/* </Form>
          )}
        </Formik> */}
      </Modal>
    </>
  )
}

export default AddProduct