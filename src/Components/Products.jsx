import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {

  const[data, setData]=useState({
   product:"",
   price:"",
   gst:""
});
const[newData ,setNewData]=useState(undefined);
const[id ,setId]=useState(undefined);


function handleChange(e){
  //console.log(e.target.value);
setData({...data, [e.target.id]: e.target.value});
}


 function handleSubmit(e){
    e.preventDefault();

    if (id === undefined) {
      axios.post("https://65de3f27dccfcd562f56a604.mockapi.io/Sales/", data)
      .then((res)=>{
        console.log(res.data);
      loadData();
})

  setData({
    product:"",
    price:"",
    gst:""
  })
}
else{
  axios.put("https://65de3f27dccfcd562f56a604.mockapi.io/Sales/"+id , data)
  .then((res)=>{
    console.log(res.data);
    loadData();
    setId(undefined)
  })
setData({
  product:"",
  price:"",
  gst:""
})
}
//console.log(data);
};



function loadData(){
    axios.get("https://65de3f27dccfcd562f56a604.mockapi.io/Sales")
    .then((res)=>{
       setNewData(res.data)
    })
    console.log(newData);
    };
    useEffect(() => {
      loadData();
    }, [])


function handleUpdate(e , id){
e.preventDefault();

setId(id);
axios.get("https://65de3f27dccfcd562f56a604.mockapi.io/Sales/"+id)
.then((res)=>{
  console.log(res.data);
  setData({
    product:res.data.product,
    price:res.data.price,
    gst:res.data.gst
  })
})
}

function handleDelete(e ,id){
e.preventDefault();
axios.delete("https://65de3f27dccfcd562f56a604.mockapi.io/Sales/"+id)
.then((res)=>{
  console.log(res.data);
  loadData();
})
}

//https://65de3f27dccfcd562f56a604.mockapi.io/Sales

  return (
    <div className="productspage">
      {/* breadcrumb */}
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Products</li>
  </ol>
        </nav>
        <div style={{textAlign:"right", margin:"50px 20px"}}>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
        </ div>
 {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <label className="form-label">Product</label><br/>
       <input type="text" value={data.product} id='product' className="form-control" onChange={(e) => handleChange(e)}/><br/>
       <label className="form-label">Price</label><br/>
       <input type="number" value={data.price} id='price' className="form-control" onChange={(e)=>handleChange(e)}/><br/>
       <label className="form-label">GST %</label>
       <input type='text' value={data.gst} id='gst' className='form-control' onChange={(e)=>handleChange(e)}/>
       {/* <select className="form-select" onChange={(e)=>handleChange(e)} aria-label="Default select example">
  <option selected>Choose Option</option>
  <option >18%</option>
  <option >12%</option>
</select> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </div>
  </div>
        </div>


      {/* product list */}
      <div>
        <div className="card mt-2">
          <div className="card-body">
            {
            newData
            ?
          <table className="table table-striped" width="100%">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>GST %</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
{
  newData.map((eachData, i)=> {
    return(
      <tr>
        <th scope='row'>{i+1}</th>
      <td>{eachData.product}</td>
      <td>{eachData.price}</td>
      <td>{eachData.gst}</td>
      
      <td>
      <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary me-1' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pencil"></i></button>
      <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>

      </td>
    </tr>
    )
  })
} 
            </tbody>
          </table>	 
                                :
                                // Spinner
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>    
                                </div>
                            // Spinner
}	
        </div>
        </div>
        </div>

     
    </div>
  
   
  )
}
