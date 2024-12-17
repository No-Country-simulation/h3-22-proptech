import './App.css'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import RegisterDocuments from './components/Register/RegisterDocuments'
import RegisterLocation from './components/Register/RegisterLocation'
import RegisterUpLoad from './components/Register/RegisterUpLoad'
import RegFormProvider from './Context/RegFromProvider'
import InvestmentDashboard from './pages/Dashboard/InvestmentDashboard/InvestmentDashboard'
import BuyerDsahboard from './pages/Dashboard/BuyerDashboard/BuyerDashboard'
import AdminDashboard from './pages/Dashboard/AdminDashboard/AdminDashboard'
import RegisterInfo from './components/Register/RegisterInfo'
import RegisterLegal from './components/Register/RegisterLegal'
import MyInvestment from './pages/Dashboard/InvestmentDashboard/MyInvestment'
import Simulator from './pages/Dashboard/InvestmentDashboard/Simulator'
import Transactions from './pages/Dashboard/InvestmentDashboard/Transactions'
import Documents from './pages/Dashboard/InvestmentDashboard/Documents'
import MyCredits from './pages/Dashboard/BuyerDashboard/MyCredits'
import TableComplete from './components/TableComplete/TableComplete'
import DetailModal from './components/Modals/InvestmentModal/DetailModal'
import BuyerSimulator from './pages/Dashboard/BuyerDashboard/BuyerSimulator'
import BuyerTransaction from './pages/Dashboard/BuyerDashboard/BuyerTransaction'
import BuyerMyDocuments from './pages/Dashboard/BuyerDashboard/BuyerMyDocuments'
function App() {
  return (
    <div>
      <RegFormProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/tableComplete' element={<TableComplete/>}/>
        <Route path='/document' element={<RegisterDocuments/>}/>
        <Route path='/document1' element={<RegisterLocation/>}/>
        <Route path='/documentLegal' element={<RegisterLegal/>}/>
        <Route path='/document2' element={<RegisterUpLoad/>}/>
        <Route path='/documentInfo' element={<RegisterInfo/>}/>
        <Route path='/dashboard' element={<InvestmentDashboard/>}/>
        <Route path='/dashboardInvestment' element={<MyInvestment/>}/>
        <Route path='/dashboardSimulator' element={<Simulator/>}/>
        <Route path='/dashboardTansactions' element={<Transactions/>}/>
        <Route path='/dashboardDocumets' element={<Documents/>}/>
        <Route path='/dashboardBuyer' element={<BuyerDsahboard/>}/>
        <Route path='/buyerCredits' element={<MyCredits/>}/>
        <Route path='/buyerSimulator' element={<BuyerSimulator/>}/>
        <Route path='/buyerTransaction' element={<BuyerTransaction/>}/>
        <Route path='/buyerDocuments' element={<BuyerMyDocuments/>}/>
        <Route path='/dashboardAdmin' element={<AdminDashboard/>}/>
        <Route path='/detailInvestment/:id' element={<DetailModal/>}/>
      </Routes>
      </RegFormProvider>
    </div>
  )
}

export default App
