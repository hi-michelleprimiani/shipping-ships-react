import { useEffect, useState } from "react";
import { getDocksWithHaulers } from "../services/DockService";

export const DockList = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getDocksWithHaulers().then((dockData) => {
      setDocks(dockData);
    });
  }, []);

  return (
    <div>
      <header className="text-center text-4xl m-10 font-bold">Docks</header>
      <div className="flex justify-evenly flex-col m-10">
        {docks.map((dock) => {
          return (
            <div key={dock.id}>
              <div className="flex justify-evenly text-xl font-bold">
                {dock.location}: {dock.capacity} lbs
              </div>
              {dock.haulers.length > 0 ? (
                dock.haulers.map((haulerObj) => (
                  <div key={haulerObj.id} className="text-center m-3">
                    {haulerObj.name}
                  </div>
                ))
              ) : (
                <div className="text-center m-3">Currently No Haulers</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )}  