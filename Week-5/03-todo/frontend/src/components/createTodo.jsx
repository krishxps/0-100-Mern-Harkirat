export function CreateTodo() {
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
            }} type="text" placeholder="Title" autoFocus /> <br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Description" /> <br />

            <button style={{
                padding: 10,
                margin: 10
            }}>Add Todo</button>
        </div>
    );
}
