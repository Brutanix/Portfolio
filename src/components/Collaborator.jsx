function Collaborator(){
    const CollaboratorsDetails = [
        {Name : "Karthik Deshmukh", image:"./src/assets/karthikDeshmukh.png"},
        {Name : "Lokesh MV(Okay Anna)", image:"./src/assets/lokeshMV.png"},
        {Name : "Chirag Bhalotia(Angry Dude)", image:"./src/assets/chirag.png"},
        {Name : "Bhavani Prasad", image:"./src/assets/bhavaniPrasad.png"},
        {Name : "Sinath Lee", image:"./src/assets/srinath.png"}
    ]
    return (
        <>
        <div id="collaborators">

        {
            CollaboratorsDetails.map(each => 
                <div className="collaboratorCard">
                <img src={each.image} alt="Collaborator Image" />
                <p className="collaboratorName">{each.Name}</p>
            </div>
        )
        }
        </div>
        </>
    )

}

export default Collaborator;