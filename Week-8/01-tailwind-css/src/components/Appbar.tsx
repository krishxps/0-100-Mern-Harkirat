import { Searchbar } from "./Searchbar";
export const Appbar = () => {
    return <div className="flex justify-between">
        <div>
            YouTube
        </div>
        <div>
            <Searchbar />
        </div>
        <div>
            Sign in
        </div>
    </div>
}