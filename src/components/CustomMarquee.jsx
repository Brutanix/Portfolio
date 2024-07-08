import Marquee from "react-fast-marquee";
function CustomMarquee(){
    const marqueeList =[
        {element : { Language:"Kotlin", image:"./src/assets/kotlin.png"}},
        {element : { Language:"GoLang", image:"./src/assets/golang.png"}},
        {element : { Language:"Swift UI", image:"./src/assets/swift.png"}},
        {element : { Language:"Flutter", image:"./src/assets/flutter.png"}},
        {element : { Language:"Native", image:"./src/assets/native.png"}},
        {element : { Language:"Bootstrap", image:"./src/assets/bootstrap.png"}},
        {element : { Language:"Figma", image:"./src/assets/figma.png"}},
        {element : { Language:"Adobe", image:"./src/assets/adobe.png"}},
    ];

      return (
        <>
        <Marquee gradient="true" autoFill="true" gradientWidth={80} gradientColor="#fff">
            {
            marqueeList.map((each)=>
            <div className="languageDiv">
                <img src={each.element.image} className="languageLogo" alt="Language Logo" />
                <p className="languageName">{each.element.Language}</p>
            </div>)}
        </Marquee>
        </>
)
}
export default CustomMarquee;