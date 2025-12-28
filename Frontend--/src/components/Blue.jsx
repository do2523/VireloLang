import "./Blue.css";

function Blue(information) {
  return (
    <>
      <div className="box">
        <h1>
          {information.username} {information.comment}
        </h1>
        <img src={information.image} alt="" />
      </div>
    </>
  );
}

export default Blue;
