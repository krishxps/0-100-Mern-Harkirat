import { useState } from "react";

export function CreateTodo() {
    const [title,setTitle] =useState("");
    const [description,setDescription] =useState("");

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30vh'
        }}>
            <input style={{
                padding: 10,
                margin: 10,
            }} type="text" placeholder="Title" autoFocus onChange={function (e) {
                const value = e.target.value;
                setTitle(value);
             }} /> <br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Description" onChange={function(e){
                const value = e.target.value;
                setDescription(value);
            }}/> <br />

            <button style={{
                padding: 10,
                margin: 10
            }} onClick={()=>{
                fetch("http://localhost:8080/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(async res =>{
                    const json = await res.json();
                    console.log(json.stringify());
                })
            }}>Add Todo</button>
        </div>
    );
}
