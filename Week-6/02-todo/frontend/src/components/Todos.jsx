/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types
export function Todos({ todos }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh' 
        }}>
            {todos.map(function (todo) {
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ddd',
                        padding: 20,
                        margin: 10,
                        width: '80%', 
                        maxWidth: 400 
                    }}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Completed" : "Mark As Completed"}</button>
                    </div>
                )
            })}
        </div>
    );
}
