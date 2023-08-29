import Button from "./Button";
import "../styles/Card.css";

interface CardProps {
  title: string;
  price: number;
  offers: string[];
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h1>
        <span>$</span>
        {props.price}
      </h1>
      <hr
        style={{ backgroundColor: "#00b289", color: "#00b289", height: "1px" }}
      />
      <ul>
        {props.offers.map((offer) => (
          <li style={{ margin: "10px 0" }}>{offer}</li>
        ))}
      </ul>
      <Button
        text="Start Free"
        onClick={() => {}}
        backgroundColor="#00b289"
        width="180px"
        color="white"
      />
    </div>
  );
}

export default Card;
