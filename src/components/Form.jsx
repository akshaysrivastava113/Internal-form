import { useState } from "react"
import axios from "axios"

export default function Form() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [query, setQuery] = useState("");

    function sendRequest() {
        const inputData = {
            name: name,
            description: description,
            query: query
        }

        const config = {
            // Headers, if needed
            headers: {
              'Content-Type': 'application/json'
            }
          };

        axios.post("http://localhost:3000/get-data", inputData, config)
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
    }
    return(
        <div className=" flex flex-col w-1/3 justify-center items-center">
        <h1>Internal Form</h1>
            <input name="input-name" id="input-name" value={name} placeholder="Enter name" className="p-2 m-2 mb-4 border-2 rounded-md w-full" onChange={(e) => setName(e.target.value)} />
            <input id="input-desc" placeholder="Enter description" className="p-2 m-2 mb-4 border-2 rounded-md w-full" onChange={(e) => setDescription(e.target.value)} />
            <textarea  id="input-query" rows={5} placeholder="Enter query" className="p-2 m-2 mb-4 border-2 rounded-md w-full" onChange={(e) => setQuery(e.target.value)} />
            <button className=" bg-blue-300 w-32 p-2 rounded-md text-white font-medium hover:shadow-lg" onClick={() => sendRequest()}>Submit</button>
        </div>
    )
}