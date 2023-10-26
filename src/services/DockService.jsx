export const getAllDocks = () => {
    return fetch(`http://localhost:8000/docks`).then((res) => res.json());
  };


  export const getDocksWithHaulers = () => {
    return fetch(`http://localhost:8000/docks?_embed=haulers`).then((res) =>
      res.json()
    );
  };