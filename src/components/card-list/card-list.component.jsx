import "./card-list.styles.css";
import { Card } from "../card/card.component.jsx";

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
