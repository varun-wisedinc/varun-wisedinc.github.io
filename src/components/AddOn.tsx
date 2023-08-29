import "../styles/AddOn.css";
interface AddOnProps {
  title: string;
  price: number;
  subText: string;
}
function AddOn(props: AddOnProps) {
  return (
    <div className="add-ons">
      <div>
        {" "}
        <h2>{props.title}</h2>
        <span>{props.subText}</span>
      </div>
      <div>
        {props.price === 0 ? (
          <h2>Free</h2>
        ) : (
          <>
            <h2>
              <span>$</span>
              {props.price}
            </h2>
            <span>/MONTH</span>
          </>
        )}
      </div>
    </div>
  );
}

export default AddOn;
