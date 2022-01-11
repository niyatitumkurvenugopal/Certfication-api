import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';


function Products(props) {
  const [showAddModal, setshowAddModal] = useState(false)
  const [Name, setName] = useState([])
  
  //Edit Modal

  const [showEditModal, setshowEditModal] = useState(false)
  const [selectedCert, setselectedCert] = useState([])
  const [selectedCertIndex, setselectedCertIndex] = useState('')


  console.log('select', selectedCert);

  //Add Cert
  let updateShowAddModal = () => {
    setshowAddModal(true);
  }
  let hideShowAddModal = () => {
    setshowAddModal(false);
  }
  let showCert = (certAdd) => {
    console.log('show', certAdd);
    let certCopy = [...Name]
    certCopy.push(certAdd)
    setName(certCopy)
  }

  //Delete Cert
  let deleteCert = (index) => {
    let certCopy = [...Name]
    certCopy.splice(index, 1)
    setName(certCopy)
  }

  //Edit Cert
  let updateSelectedCert = (cert, index) => {
    setshowEditModal(true);
    setselectedCert(cert);
    setselectedCertIndex(index)
  }

  let hideShowEditModal = () => {
    setshowEditModal(false);
  }
  let showCert1=(certAdd)=>{
    let certCopy = [...Name]
    certCopy.splice(setselectedCertIndex,1,certAdd)
    setName(certCopy)
  }

  return (
    <div>
      <Table striped bordered hover>
      
        <thead>
          <tr>
            <th>Certification Name</th>
            <th>Certified From</th>
            <th>Year of Completion  </th>
            <th>
              <button className="btn btn-warning" onClick={updateShowAddModal}>
                +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {Name.length > 0 &&
            Name.map((cert, index) => {
              return (
                <tr key={index}>
                  {/* <td>{cert.id}</td> */}
                  <td>{cert.name}</td>
                  <td>{cert.certified}</td>
                  <td>{cert.year}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        updateSelectedCert(cert, index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteCert(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <AddProduct
        showAddModal={showAddModal}
        hideShowAddModal={hideShowAddModal}
        showCert={showCert}
      />
      <EditProduct
        showEditModal={showEditModal}
        hideShowEditModal={hideShowEditModal}
        showCert1={showCert1}
        selectedCert={selectedCert}
      />
    </div>
  )
}

export default Products