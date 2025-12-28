import "./Purple.css"
function Purple (information) {
    return (
        <h1 className="colors">Purple! <br />{information.username} <br />{information.date} <br /> {information.comment}</h1>
    );
}

export default Purple;