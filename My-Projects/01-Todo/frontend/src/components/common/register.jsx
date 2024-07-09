export default function Register() {
    return <div>
        <form action="submit" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Name" />
            <input placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={() => {
                console.log("Clicked");
            }}>Submit</button>
        </form>
    </div>
}