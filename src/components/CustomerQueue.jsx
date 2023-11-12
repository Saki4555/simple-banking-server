import {  Fade, Slide } from "react-awesome-reveal";

const CustomerQueue = ({ queue }) => {
  return (
    <div className="w-1/4 border flex justify-center bg-yellow-200">
      <div>
      <h2>Customer Queue</h2>
      <div>
        {queue.map((customer) => (
          <>
          <Fade triggerOnce key={customer.id} className="my-5 flex items-center gap-4">
            <div className="">
              <Slide triggerOnce className="ml-11 -mb-6 rounded-full w-9 py-1.5 text-center bg-green-300">{customer.id}</Slide>
              <img src={customer.img} alt="Man" />
            </div>
            {/* flex gap-3 */}
            <div className="">
              <p className="font-semibold">
                Arrival Time : {customer.arriveTime.toLocaleTimeString()}
              </p>
              <p className="font-semibold">
                Service Time : {customer.serviceTime}
              </p>
            </div>
            
          </Fade>
          {/* <hr className="bg-red-400 h-1"/> */}
          </>
        ))}
        
      </div>
      </div>
    </div>
  );
};

export default CustomerQueue;
