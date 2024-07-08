function ServiceCard(props){
    return  <div className="serviceCard">

        <img src={props.path} alt="Service Icon" />
        <p className="serviceName">{props.name}</p>
        <p className="serviceText">{props.description}</p>
    </div>

}

export default ServiceCard