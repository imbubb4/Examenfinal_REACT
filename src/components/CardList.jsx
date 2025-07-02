import { useEffect, useState } from 'react';

const CardList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data); // aquí es `data` directo, no `data.items`
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <h2 className="text-center mb-4">Lista de la API (Todos)</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {todos.map((todo) => (
            <div className="col" key={todo.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="card-text">
                    <strong>User ID:</strong> {todo.userId} <br />
                    <strong>Completado:</strong> {todo.completed ? '✅ Sí' : '❌ No'}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-body-secondary">ID: {todo.id}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {todos.length === 0 && (
            <div className="text-center">
              <p>No hay datos disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
