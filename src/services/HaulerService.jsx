export const getAllHaulers = () => {
    return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
  };