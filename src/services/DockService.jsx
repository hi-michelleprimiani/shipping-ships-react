export const getAllDocks = () => {
    return fetch(`http://localhost:8000/docks`).then((res) => res.json());
  };