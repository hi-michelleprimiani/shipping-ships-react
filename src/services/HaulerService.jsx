export const getAllHaulers = () => {
    return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
  };

  export const getHaulerById = (haulerId) => {
    return fetch(`http://localhost:8000/haulers/${haulerId}`).then((res) =>
      res.json()
    );
  };
  
  export const updateHauler = (haulerObj) => {
    return fetch(`http://localhost:8000/haulers/${haulerObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(haulerObj),
    });
  };