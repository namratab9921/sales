import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Sales() {



  const [newData, setNewData] = useState([]);
  const [id, setId] = useState();
  const [total, setTotal] = useState(0);
  const [rows, setRows] = useState([{ quantity: 1 }]);
  const [data, setData] = useState("")
  const [selectproduct, setSelectproduct] = useState("")

  let navigate = useNavigate();

  const [personalData, setPersonalData] = useState({
    date: "",
    customerName: "",
    mobileNo: ""
  });
  let finalPrice = 0;
  let totalPrice = 0;
  let totalGst = 0;


  const handeladd = () => {
    let copyrow = [...rows]
    copyrow.push({ quantity: 1 })
    setRows(copyrow)
    console.log(rows);
  }
  function handleData(e) {
    console.log(personalData);
    e.preventDefault();
    setPersonalData({ ...personalData, [e.target.id]: e.target.value })
  }

  function loadData() {
    axios.get("https://65de3f27dccfcd562f56a604.mockapi.io/Sales")
      .then((res) => {
        setNewData(res.data)
      })
    console.log(newData);
  };

  function handleSelect(id, i) {
    console.log(id);
    let dropdownvalue;

    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === id) {
        dropdownvalue = newData[i];
        setSelectproduct(dropdownvalue);
        console.log(dropdownvalue);
        break;
      }
    }
    let copyproduct = [...rows];
    copyproduct[i].selectproduct = dropdownvalue;
    setRows(copyproduct);
    console.log("copyproduct", copyproduct)

  }

  console.log("update", rows);

  const quantitychange = (value, i) => {
    let copyRows = [...rows];
    copyRows[i].quantity = value;
    setRows(copyRows);
  }

  function handelRemove(e, id) {
    e.preventDefault();
    axios.delete("https://65de3f27dccfcd562f56a604.mockapi.io/Sales" + id)
      .then((Remove) => {
        console.log(Remove.data);
        alert("hhoooo");
        loadData();
      });

  }

  function tableSubmit(e) {
    const postData = {
      product: rows,
      personaldata: personalData,
      totalgst: totalGst,
      totalprice: totalPrice,
      finalprice: finalPrice,

    };
    if (
      personalData.date === "" &&
      personalData.customer === "" &&
      personalData.mobileno === ""
    ) {
      alert("Fill Properly!!!");
    }
    else {
      navigate("/salesexpenses");

      axios.post("https://65de3f27dccfcd562f56a604.mockapi.io/sales_table", postData)
        .then((res) => {
          console.log(res);
          setPersonalData(res.data);
          loadData();
        });

      navigate("/expenses")

    }




  }
  useEffect(() => {
    loadData();

  }, [])
  return (
    <div className='salespage'>
      <div className="container">
        {/* <Navbar/> */}
        <div className="row">
          <div className="col-lg-4">
            {/* <Sidebar/> */}
            <label for="date" className="form-label"> Date</label> <br />
            <input type='date' id='date' className="form-control" onChange={(e) => handleData(e)} value={personalData.date} />
          </div>

          <div className="col-lg-4">
            <label for="customerName" className="form-label"> Customer Name: </label> <br />
            <input type="text" id='customerName' className='form-control' onChange={(e) => handleData(e)} value={personalData.customerName} fdprocessedid="hxtyom" />
          </div>

          <div className="col-lg-4">
            <label for="mobileNo" className="form-label"> Mobile No: </label> <br />
            <input type="tel" id='mobileNo' className='form-control' onChange={(e) => handleData(e)} value={personalData.mobileNo} fdprocessedid="4x6z7" />
          </div>
        </div>

        <button className='btn btn-primary mt-2 mb-2' onClick={(() => handeladd())}>Add Row</button>

        <div className="row">

        </div>
      </div>
      <div className="container">
        <table width="100%">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>GST</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((rows, i) => {
              {
                if (rows.selectproduct) {
                  finalPrice +=
                    ((rows.selectproduct.price * rows.selectproduct.gst) /
                      100) *
                    rows.quantity +
                    rows.selectproduct.price * rows.quantity;

                  totalPrice +=
                    Number(rows.selectproduct.price) * Number(rows.quantity);

                  totalGst +=
                    ((rows.selectproduct.price * rows.selectproduct.gst) /
                      100) *
                    rows.quantity;
                }

              }
              return (
                <tr>
                  <td>
                    <select onChange={(e) => handleSelect(e.target.value, i)} className="form-select" aria-label="Default select example">
                      <option selected>Select a Product</option>
                      {newData.map((eachData, i) => {
                        return (
                          <option key={i} value={eachData.id}>{eachData.product}</option>
                        );
                      })}
                    </select> </td>
                  <td>{rows.selectproduct ? rows.selectproduct.price : ""}</td>
                  <td><input type="number" value={rows.quantity} onChange={(e) => quantitychange(e.target.value, i)} /></td>
                  <td>{rows.selectproduct ? rows.selectproduct.gst : ""}</td>
                  <td><input type="text" className='form-control' value={rows.selectproduct ? ((rows.selectproduct.price * rows.selectproduct.gst) / 100) * rows.quantity : ""} /></td>


                  <td><button className='btn btn-danger' onClick={(e) => handelRemove(e, rows.id)} >Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />

        <div className="mt-5">
          <h4>Total Price: {totalPrice}  </h4>

          <h4>Total GST: {totalGst}</h4>

          <h4>Overall Subtotal: {finalPrice}</h4>


        </div>

        <div className="col-lg-12 d-flex justify-content-end">
          <button className="btn btn-success" onClick={((e) => tableSubmit(e))}>Submit Data</button>
        </div>
      </div>
    </div>
  )
}
