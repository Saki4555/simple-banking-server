import { useState, useEffect } from "react";

import Bank from "./bank";
import CompletedCustomer from "./CompletedCustomer";
import CustomerQueue from "./CustomerQueue";
import man from '../assets/man.png';
import man2 from '../assets/man2.png';
import man3 from '../assets/man3.png';
import man4 from '../assets/man4.png';

export function CaludeBank() {
  const [queue, setQueue] = useState([]);

  

  const [completed, setCompleted] = useState([]);
  const [isServerBusy, setIsServerBusy] = useState(false);

  const [serviceTaking, setServiceTaking] = useState({});
  // (Math.floor(Math.random()*1000) + 2000)

  useEffect(() => {
    const mans = [man, man2, man3, man4];
    const arriveInterval = setInterval(() => {
      // Add new customer to queue
      setQueue((prev) => [
        ...prev,
        {
          // id: Date.now(),
          id: queue.length + completed.length + 1,
          arriveTime: new Date(),
          img: mans[Math.floor(Math.random()*4)],
          // serviceTime: 1000 + Math.floor(Math.random() * 7000)
          serviceTime: Math.floor(Math.random()*5000) + 4000,
        },
      ]);
    }, Math.floor(Math.random()*5000));

    return () => clearInterval(arriveInterval);
  }, [completed.length,  queue.length]);

  useEffect(() => {
    if (!isServerBusy && queue.length > 0) {
      setIsServerBusy(true);

      
      const currentCustomer = queue[0];
      
      setServiceTaking(currentCustomer);
      setQueue((prevQueue) => prevQueue.slice(1));


   setTimeout(() => {
        const servedTime = new Date();
        
        const waitingTime =
          (servedTime - currentCustomer.arriveTime) / 1000;

        setCompleted((prevCompleted) => [
          ...prevCompleted,
          { ...currentCustomer, waitingTime },
        ]);

        console.log(currentCustomer.id, waitingTime);
        console.log(
          currentCustomer?.arriveTime?.toLocaleTimeString(),
          " served time ",
          servedTime?.toLocaleTimeString()
        );

        // const remainingCustomers = queue.slice(1);
        // setQueue(remainingCustomers);
        // setQueue((prevQueue) => prevQueue.slice(1));
        setIsServerBusy(false);
      }, currentCustomer.serviceTime);

      // return () => clearTimeout(timeOutId);
    }

    
  }, [isServerBusy, queue]);

  return (
    <div className="flex justify-between px-32 mt-10">
      <CustomerQueue queue={queue}></CustomerQueue>
      <Bank isServerBusy={isServerBusy} serviceTaking={serviceTaking}></Bank>

      <CompletedCustomer queue={completed}></CompletedCustomer>
    </div>
  );
}
