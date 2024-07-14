import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'

export default function Saleexpense() {

  const [getData,setGetData] = useState([]);
  const [rowData, setRowData] = useState([]);


  var finalBill=0;
  function loadData(){
   axios.get("https://65de3f27dccfcd562f56a604.mockapi.io/sales_table")
    .then((res)=>{
      console.log(res.data);

      setGetData(res.data)
      setRowData(res.data.row)
    })
  }
  console.log(rowData);
   useEffect(()=>{loadData();},[])

   function handleRemove(e ,id){
     e.preventDefault()
     axios.delete("https://65de3f27dccfcd562f56a604.mockapi.io/sales_table" + id)
     .then ((res)=>{
       console.log(res.data);
       loadData();
     })
   }

   {/* https://65de3f27dccfcd562f56a604.mockapi.io/sales_table */}

  return (
    <div className='expense'>
        <h1>Sale Expense Table</h1>
      <div className="container">
   
        <div className="row">
          <table>
            <thead>
              <tr>
                  <th scope='col'>Sr No</th>
                  <th scope='col'>Date</th>	
                  <th scope='col'>Customer Name	</th>
                  <th scope='col'>Mobile No</th>	
                  <th scope='col'>Total Price	</th>
                  <th scope='col'>Total GST</th>
                  <th scope='col'>Overall Subtotal	</th>
                  <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
            {

getData.map((eachData , i)=>{
  // if (eachData){ 
  //   finalBill+=eachData.finalprice
  // }
  return(
<tr key={1}>
{/* <th scope="row">{i+1}</th> */}
<td>{eachData.personalData.date}</td>
<td>{eachData.personalData.customer}</td>
<td>{eachData.personalData.mobileno}</td>
<td>{eachData.totalprice}</td>
<td>{eachData.totalgst}</td>
<td>{eachData.finalprice}</td>
<td><button className='btn btn-danger me-2' onClick={((e)=> handleRemove(e ,eachData.id))}>Remove</button></td>
</tr>
)
})
}
            </tbody>
          </table>
          <hr/>
          <h2>Total Overall Subtotal: <label></label></h2>
        </div>
      </div>
    </div>
  )
}
