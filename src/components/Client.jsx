function Client(props){
    return <>
        <div className="clientCard">
            <img src={props.path} alt="Client Image" />
            <div className="clientDetails">
            <p className="clientTime">{props.date}</p>
            <p className="clientName">{props.name}</p>
            <p className="clientDes">{props.des}</p>
            </div>
            
        </div>
    </>
}

export default Client;