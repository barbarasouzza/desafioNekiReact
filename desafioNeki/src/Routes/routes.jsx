import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'


const Routes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;