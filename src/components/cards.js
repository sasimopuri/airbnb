export default function Cards(){
    const name="sasi";
    const lname="kumar";
    return(
        <div className="card">
            <img className='card-img' src={require('../images/swim.png')} alt="" />
            <div className="card-stats">
                <img src={require("../images/Star 1.png")} alt="" />
                <span className="rating">5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            
        </div>
    )
}