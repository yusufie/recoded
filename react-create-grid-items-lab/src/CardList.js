import "./styles.css";
import Card from "./Card";

export default function CardList() {
  return (
  <>
    <div className="CardList">

      <div className="Card1">
        <h1>This is card title </h1>
        <p>Corabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>

        <div className="button">
          <Card />
        </div>
      </div>

      <div className="Card2">
        <h1>Vivamus Magna Justo</h1>
        <p>Corabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed</p>
        <div className="button">
          <Card />
        </div>
      </div>

      <div className="Card3">
        <h1>Donec Rutrum Congue Leo Eget Malesuada </h1>
        <p>Corabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        
        <div className="button">
          <Card />
        </div>

      </div>

    </div>
  </>
  );
}
