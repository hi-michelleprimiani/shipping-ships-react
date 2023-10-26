export const getAllShips = () => {
    return fetch(`http://localhost:8000/ships`).then((res) => res.json());
  };

  export const getShipsExpandHaulers = () => {
    return fetch(`http://localhost:8000/ships?_expand=hauler`).then((res) =>
      res.json()
    );
  };

  export const deleteShip = (shipId) => {
    return fetch(`http://localhost:8000/ships/${shipId}`, {
      method: "DELETE",
    });
  };