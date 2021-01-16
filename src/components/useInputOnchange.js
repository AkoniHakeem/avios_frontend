import { useState } from "react"

const useInputOnchange = function(placeholder) {
    let [value, setValue] = useState("");
    let [error, setError] = useState(undefined);

    let clearInput = ()=>{
        setValue("");
    }

    let bindform = {
        onChange: function(e) {
            console.log("this is the value", e.target.value)
            setValue(e.target.value);
        },
        value,
        placeholder,
        type: "text"
    }
    const results = []
    results.push(value, error, bindform, clearInput)
    return  results
}

export default useInputOnchange