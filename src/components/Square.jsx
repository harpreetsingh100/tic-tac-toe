const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid black",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h4 className="val">{value}</h4>
    </div>
  );
};

export default Square;
