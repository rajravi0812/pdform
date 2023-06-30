import React from "react";
import { useState } from "react";
import Pdfgen from "./Pdfgen";
import { Link } from "react-router-dom";

export default function Form(){
    const[fname, setfname]=useState("");
    const[lname, setlname]=useState("");
    const[user,setuser]=useState("");
    const[city,setcity]=useState("");
    const[state,setstate]=useState("");
    const[pin,setpin]=useState("");
    const[postsubmit, setpostsubmit]=useState(false);

    const submitPost=(e)=>{
        if(!fname|| !lname|| !user || !city || !state || !pin){
            alert('all field required');
        e.preventDefault();
        }else{
            setpostsubmit(true)
        }   
    }
    const fn = (e)=>{
           setfname(e.target.value);
    }
    const ln = (e)=>{
        setlname(e.target.value);
    }
    const us = (e)=>{
        setuser(e.target.value);
    }
    const ct = (e)=>{
        setcity(e.target.value);
    }
    const st = (e)=>{
        setstate(e.target.value);
    }
    const pn = (e)=>{
        setpin(e.target.value);
    }

    return(
        <>
        {!postsubmit ?
        (<form className="row g-3 needs-validation m-4" method="post">
  <div className="col-md-4 m">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" onChange={fn} id="validationCustom01" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" onChange={ln} id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" onChange={us}
      id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" onChange={ct} required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" onChange={st} required>
      <option selected disabled value="">Choose...</option>
      <option>Haryana</option>
      <option>Delhi</option>
      <option>Chandigarh</option>
      <option>Punjab</option>
      <option>J&K</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" onChange={pn} id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  
  <div className="col-12">
  <Link to="/pdf">
    <button className="btn btn-primary" onClick={submitPost} type="submit">Submit form</button>
  </Link>
  </div>
  
</form>):
    (<Pdfgen efn={fname} eln={lname} eus={user} ect={city} est={state} epn={pin}></Pdfgen>)
 }
    
   
</>
    )
}


