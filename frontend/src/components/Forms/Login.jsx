import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext }  from './AuthContext';
import Button from 'react-bootstrap/Button';


function ConnectionForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useContext(AuthContext);

  
  const navigate = useNavigate();
  const location = useLocation();
  
  /*const StyledButton = styled.button `
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    background-color:#000000;
    color: white;

    &:hover {
      background-color: #0056b3;
      opacity: 0.9;
    }
  `*/

  // Redirection après connexion (si spécifiée)
  const from = location.state?.from || '/dashboard';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const response = await axios.post('http://localhost:3000/users', {
        email: credentials.email,
        password: credentials.password
      });
      
      const { token, user } = response.data;
      
      // Stocker le token et les informations utilisateur
      login(token, user);
      
      // Rediriger vers la page de destination
      navigate(from, { replace: true });
      
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Email ou mot de passe incorrect');
      } else {
        setError("Une erreur s'est produite lors de la connexion");
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="login-container">
      <h2>Connexion</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button variant="outline-primary" size="lg" type="submit" disabled={isLoading}>
          {isLoading ? 'Connexion en cours...' : 'Se connecter'}
        </Button>
      </form>
      
      <div className="links">
        <a href="/forgot-password">Mot de passe oublié ?</a>
        <br></br>
        <a href="/register">Créer un compte</a>
      </div>
    </div>
  );
}

export default ConnectionForm; 