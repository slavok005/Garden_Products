import React, { useEffect, useState } from 'react'

const Test = () => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleChange2 = (e) => {
        setValue2(e.target.value)
    }


    useEffect(()=>{
        if(value.length > 3) {
            alert("ok");
        }
    },[value])

    return (
        <div>
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleCreateValue}>ADD</button>

                <h2>{value}</h2>
            </div>


            <div>
                <input type="text" onChange={handleChange2}/>

                <h2>{value2}</h2>
            </div>
        </div>
    )
}

export default Test