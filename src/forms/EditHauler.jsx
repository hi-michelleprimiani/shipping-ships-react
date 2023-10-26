import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHaulerById, updateHauler } from "../services/HaulerService";
import { getAllDocks } from "../services/DockService";

export const EditHauler = () => {
  const [hauler, setHauler] = useState([]);
  const [docks, setDocks] = useState([]);
  const { haulerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getHaulerById(haulerId).then((haulerData) => {
      setHauler(haulerData);
    });
  }, [haulerId]);

  useEffect(() => {
    getAllDocks().then((dockData) => {
      setDocks(dockData);
    });
  }, []);

  const handleInputChange = (event) => {
    const haulerCopy = { ...hauler };
    haulerCopy[event.target.name] = event.target.value;
    console.log("Updated Hauler:", haulerCopy);
    setHauler(haulerCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    console.log("Updated Hauler to Save:", updatedHauler);

    updateHauler(updatedHauler).then(() => {
      navigate(`/haulingships`);
    });
  };

  return (
    <form className="mx-auto my-10 max-w-md p-6 bg-white rounded-md shadow-md" onSubmit={handleSave}>
      <header className="text-center text-3xl font-bold text-gray-800 pb-6">
        Edit Hauler
      </header>
      <fieldset className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600">Name:</label>
          <input
            id="name"
            name="name"
            value={hauler.name ? hauler.name : ""}
            type="text"
            className="border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dock_id" className="text-gray-600">Docks:</label>
          <select
            id="dock_id"
            name="dock_id"
            value={hauler.dock_id}
            className="border-2 border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            onChange={handleInputChange}
          >
            <option value={""}>Select a dock location</option>
            {docks.map((dock) => {
              return (
                <option key={dock.id} value={dock.id}>
                  {dock.location}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <button type="submit" className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
        Update
      </button>
    </form>
  );
        }  
