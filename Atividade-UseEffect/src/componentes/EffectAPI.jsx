import { useState, useEffect } from "react";
import './EffectAPI.css';

export default function UserTables() {
  const [names, setNames] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [cities, setCities] = useState([]);

  const [loadNames, setLoadNames] = useState(false);
  const [loadUsernames, setLoadUsernames] = useState(false);
  const [loadCities, setLoadCities] = useState(false);

  // useEffect para nomes
  useEffect(() => {
    if (loadNames) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setNames(data.map(user => ({ id: user.id, name: user.name }))))
        .catch(err => console.error("Erro ao buscar nomes:", err));
        setLoadNames(false)
    }
  }, [loadNames]);

  // useEffect para usernames
  useEffect(() => {
    if (loadUsernames) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsernames(data.map(user => ({ id: user.id, username: user.username }))))
        .catch(err => console.error("Erro ao buscar usernames:", err));
        setLoadUsernames(false)
    }
  }, [loadUsernames]);

  // useEffect para cidades
  useEffect(() => {
    if (loadCities) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setCities(data.map(user => ({ id: user.id, city: user.address.city }))))
        .catch(err => console.error("Erro ao buscar cidades:", err));
        setLoadCities(false)
    }
  }, [loadCities]);

  return (
    <div>
      <h2>Listagem de Usuários</h2>

      <div className="tabela-container">

        {/* Tabela Nomes */}
        <div className="tabela-nome">
          <h3>Nomes</h3>
          <button onClick={() => setLoadNames(true)}>Carregar Nomes</button>
          <table>
            <thead><tr><th>Nome</th></tr></thead>
            <tbody>
              {names.map(user => <tr key={user.id}><td>{user.name}</td></tr>)}
            </tbody>
          </table>
        </div>

        {/* Tabela Usernames */}
        <div className="tabela-username">
          <h3>Usernames</h3>
          <button onClick={() => setLoadUsernames(true)}>Carregar Usernames</button>
          <table>
            <thead><tr><th>Username</th></tr></thead>
            <tbody>
              {usernames.map(user => <tr key={user.id}><td>{user.username}</td></tr>)}
            </tbody>
          </table>
        </div>

        {/* Tabela Cidades */}
        <div className="tabela-cidade">
          <h3>Cidades</h3>
          <button onClick={() => setLoadCities(true)}>Carregar Cidades</button>
          <table>
            <thead><tr><th>Cidade</th></tr></thead>
            <tbody>
              {cities.map(user => <tr key={user.id}><td>{user.city}</td></tr>)}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
