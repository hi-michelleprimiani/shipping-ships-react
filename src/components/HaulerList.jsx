import { useEffect, useState } from "react";
import { getAllHaulers } from "../services/HaulerService";
import { useNavigate } from "react-router-dom";

export const HaulerList = () => {
  const [haulers, setHaulers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllHaulers().then((haulerData) => {
      setHaulers(haulerData);
    });
  }, []);

  return (
    <div className="text-center">
      <span className="text-3xl font-bold ">Haulers</span>
      <div className="flex flex-col">
        {haulers.map((hauler) => {
          return (
            <div
              className="flex justify-evenly items-center p-2"
              key={hauler.id}
            >
              <div>{hauler.name}</div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded-full"
                onClick={() => {
                  navigate(`/haulingships/${hauler.id}`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};