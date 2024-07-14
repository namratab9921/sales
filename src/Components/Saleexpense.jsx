import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Salesexpenses() {

  const [getData, setGetData] = useState([]);
  const [rowData, setrowData] = useState([]);
  var finalBill = 0;
  function loadData() {
    axios.get("https://65de3f27dccfcd562f56a604.mockapi.io/sales_table")
      .then((res) => {
        console.log(res.data);
        setGetData(res.data)
        setrowData(res.data.row)
      })
  }
  console.log(rowData);
  useEffect(() => {
    loadData();
  }, [])

  function handleRemove(e, id) {
    e.preventDefault()
    axios.delete("https://65de3f27dccfcd562f56a604.mockapi.io/sales_table/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })
  };



  return (

    <div className='expense'>
      <h1>Sale Expense Table</h1>
      <div className="container">

        <div className="row">
          <table>
            <thead>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Customer Name	</th>
                <th scope='col'>Mobile No</th>
                <th scope='col'>Total Price	</th>
                <th scope='col'>Total GST</th>
                <th scope='col'>Final Bill</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                getData.map((eachData, i) => {
                  // if (eachData) {
                  //   finalBill += eachData.finalprice
                  // }

                  return (
                    <tr key={1}>
                      {/* <th scope='row'>{i + 1}</th> */}
                      <td>{eachData.personaldata?.date}</td>
                      <td>{eachData.personaldata.customerName}</td>
                      <td>{eachData.personaldata.mobileNo}</td>
                      <td>{eachData.totalprice}</td>
                      <td>{eachData.totalgst}</td>
                      <td>{eachData.finalprice}</td>
                      <td>
                        <button className="btn btn-danger me-2" onClick={((e) => handleRemove(e, eachData.id))}>Remove</button>
                      </td>
                    </tr>

                  )
                })
              }

            </tbody>
          </table>
          <hr />


        </div>
      </div>
    </div>
  )
}

