import React from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { Link } from "react-router-dom";

export default function Pdfgen(props){
    const print = ()=>{
        const input = document.getElementById("print")
        html2canvas(input, {logging:true, letterRendering:1, useCORS:true}).then(canvas=>{
            const  imgwidth = 208;
            const imgheight= canvas.height * imgwidth/canvas.width;
            const imgData=canvas.toDataURL('img/png');
            const pdf=new jsPDF('p','mm','a4');
            pdf.addImage(imgData,'PNG', 0,0, imgwidth, imgheight);
            pdf.save("raj.pdf")
        })
    }
    return(
        <>
        <div id="form" >
        <div className="container-fluid" id="print" >
            <div className="row text-center " style={{height:"100px", backgroundColor:"green"}}>
                    <h3 className="p-4">Detail provided By You</h3>
            </div>
            <div className="row text-center mt-3 shadow-sm" style={{backgroundColor:"lightgray", borderRadius:"20px"}}>
                    <div className=" col p-2">First Name</div>
                    <div className=" col p-2">{props.efn}</div>
            </div>
            <div className="row text-center mt-2 shadow-sm" style={{backgroundColor:"lightgray", borderRadius:"20px"}}>
                    <div className=" col p-2">Last Name</div>
                    <div className=" col p-2">{props.eln}</div>
            </div>
            <div className="row text-center mt-2 shadow-sm" style={{backgroundColor:"lightgray", borderRadius:"20px"}}>
                    <div className=" col p-2">UserName</div>
                    <div className=" col p-2">{props.eus}</div>
            </div>
            <div className="row text-center mt-2 shadow-sm" style={{backgroundColor:"lightgray", borderRadius:"20px"}}>
                    <div className=" col p-2">City</div>
                    <div className=" col p-2">{props.ect}</div>
            </div>
            <div className="row text-center mt-2 shadow-sm" style={{backgroundColor:"lightgray", borderRadius:"20px"}}>
                    <div className=" col p-2">State</div>
                    <div className=" col p-2">{props.est}</div>
            </div>
            <div className="row text-center mt-2 shadow-sm" style={{backgroundColor:"lightgray", borderRadius:"20px"}}>
                    <div className=" col p-2">Pincode</div>
                    <div className=" col p-2">{props.epn}</div>
            </div>
        </div>
            <div className="row text-center mt-4">

                    <div className=" col p-2"><Link to="/"><button className="btn btn-primary">Back</button></Link> <button onClick={print} className="btn btn-primary">Generate Pdf</button></div>
            </div>
    </div>
            </>
    )
}