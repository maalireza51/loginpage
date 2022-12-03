import './App.css';
import { useAuthState } from './Context/auth-context';
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function App() {
  const { token } = useAuthState()
  return (
    <>
      {token ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;