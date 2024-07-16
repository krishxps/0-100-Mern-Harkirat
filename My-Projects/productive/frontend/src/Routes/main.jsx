import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Main() {
    return (
        <div className="bg-slate-800 h-screen">
            <Navbar />
            <div className="bg-blue-800 h-5/6">
                Main
            </div>
            <Footer />
        </div>
    )
}