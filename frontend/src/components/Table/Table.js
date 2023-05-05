import React, { useState } from 'react'
import "./table.css"

export default function Table() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({name:"",number:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {name,number}=inputdata;




    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

 
    function addinputdata(){

        if(name==="" && number===""){
            alert("Enter Name and Roll no ")
        }
        else{
        setArray([...array,{name,number}])
        // console.log(inputdata)
        setInputdata({name:"",number:""})
    }
    }



// deleting row 
function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

// updatedata
function updatedata(i){

    let {name,number}=array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
    setInputdata({name,number})
    setBolin(true)
    setIndex(i)

}

//know add data at perticular index means update it on that index
function updateinfo(){
    let total=[...array]
    total.splice(index,1,{name,number})
    setArray(total)
     setBolin(false)
     setInputdata({name:"",number:""})
}
  return (
    <div>
          
            <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data}  />
            <input type="number" value={inputdata.number || ""} name="number" placeholder='Enter Number' onChange={data} />
            <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

            <br />

            <table border="1" >
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                {

array && array.map(
(item,i)=>{
    return(
        <tr key={i}>
            <td>{item.name}</td>
            <td>{item.number}</td>
            <td><button onClick={()=>updatedata(i)}>update</button></td>
            <td><button onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
    )
}
)
                }

                </tbody>
            </table>

    </div>
  )
}