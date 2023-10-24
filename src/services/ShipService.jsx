export const getAllShips = () => {
    return fetch(`http://localhost:8000/ships`).then((res) => res.json());
  };