import { useEffect, useState } from "react";
import { getShipsExpandHaulers } from "../services/ShipService";
import { deleteShip } from "../services/ShipService";



export const ShipList = () => {
  const [ships, setShips] = useState([]);

  const getShips = () => {
    getShipsExpandHaulers().then((shipsData) => {
      setShips(shipsData);
    });
  };

  useEffect(() => {
    getShips();
  }, []);

  const handleDelete = (shipId) => {
    deleteShip(shipId).then(() => {
      getShips();
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-evenly">
        <div className="text-3xl font-bold m-10">SHIP NAME</div>
        <div className="text-3xl font-bold m-10">HAULER NAME</div>
      </div>
      {ships.map((ship) => {
        return (
          <div className="flex justify-evenly my-3" key={ship.id}>
            <div>{ship.name}</div>
            <div>{ship.hauler?.name}</div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded-full"
              onClick={() => {
                handleDelete(ship.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};