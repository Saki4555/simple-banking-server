import { Bounce, Fade, Slide } from "react-awesome-reveal";
import bank from "../assets/bank.jpeg";
const Bank = ({ isServerBusy, serviceTaking }) => {
  console.log(isServerBusy);
  return (
    <div
      className={`h-60 w-1/4 ${isServerBusy ? "bg-red-500" : "bg-green-500"}`}
    >
      <img src={bank} alt="bank" />{" "}
      <Bounce>
        <div className="-mt-32 ml-20">
          <div className="ml-11 -mb-6 rounded-full w-9 py-1.5 text-center bg-green-300">
            {serviceTaking?.id}
          </div>
          <img src={serviceTaking?.img} className="w-20 h-20" alt="Man" />
        </div>
      </Bounce>
    </div>
  );
};

export default Bank;
