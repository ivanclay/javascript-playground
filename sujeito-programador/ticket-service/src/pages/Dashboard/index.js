import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Sidebar from '../../components/Sidebar'

export default function Dashboard(){

    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div>
            <Sidebar/>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}