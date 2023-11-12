

const CompletedCustomer = ({ queue }) => {
  return (
    <div className="w-1/3">
      <h2>Customer Queue</h2>
      <ul>
        {queue.map((customer, index) => (
          <li key={customer.id}>
            Customer {customer.id} - Arrival Time:{" "}
            {customer.arriveTime.toLocaleTimeString()}{" "}
          

            Customer {index + 1} - Service Time:{" "}
            {customer.serviceTime}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedCustomer;
