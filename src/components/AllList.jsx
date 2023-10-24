import { useEffect, useState } from "react"
import { getAllShips } from "../services/ShipService"
import {getAllHaulers} from "../services/HaulerService"
import {getAllDocks} from "../services/DockService"



export const AllList = () => {
    const [ships, setShips] = useState([])
    const [haulers, setHaulers] = useState([])
    const [docks, setDocks] = useState([])


    useEffect(() => {
    getAllShips().then((shipData) => {
        setShips(shipData)
    })
    getAllHaulers().then((haulerData) => {
        setHaulers(haulerData)
    })
    getAllDocks().then((dockData) => {
        setDocks(dockData)
    })
    }, [])

    return (
        <section className="flex justify-evenly text-center">
          <div>
            <header className="list-items">Ships</header>
            {ships.map((ship) => {
              return <div key={ship.id}>{ship.name}</div>;
            })}
          </div>
          <div>
            <header className="list-items">Haulers</header>
            {haulers.map((hauler) => {
              return <div key={hauler.id}>{hauler.name}</div>;
            })}
          </div>
          <div>
            <header className="list-items">Docks</header>
            {docks.map((dock) => {
              return <div key={dock.id}>{dock.location}</div>;
            })}
          </div>
        </section>
      );

}