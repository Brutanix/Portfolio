function Social(){
    const socials = [
        {social : "Instagram", image: "./src/assets/instagram.png"},
        {social : "Twitter", image: "./src/assets/twitter.png"},
        {social : "YouTube", image: "./src/assets/youtube.png"},
        {social : "Linked In", image: "./src/assets/linkedIn.png"},
    ];
    
    return (
        <>
        <div id="socialsCards">
            {
                socials.map(each => 
                    <div className="socialCard">
                        <img src={each.image} alt={each.social} />
                        <p>{each.social}</p>
                    </div>
                    
                )
            }
        </div>
        </>
    )
}

export default Social;