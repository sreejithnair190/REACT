import "../style/card.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img alt={`${name}`} src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
