import './App.css';
import { RevenueCard } from './components/RevenueCard';
function App() {
  // https://dashboard-clone-dukaan.vercel.app/
  return <>
  <div className="grid grid-cols-3">
    <RevenueCard title="Amount Pending" orderCount={10} amount={1000} />
  </div>
  </>
}

export default App
