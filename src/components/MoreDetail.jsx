function MoreDetail() {
  const details = [
    {
      question: "Brutanix's First Ever Quest",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, tempore.",
    },
    {
      question: "The Forging Process",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur.",
    },
    {
      question: "Why We Value Our Gold",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur.",
    },
    {
      question: "The Importance of a Good Ol' Tavern Chat",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur.",
    },
  ];
  return (
    <>
      <div id="more">
        {details.map((each) => (
          <div className="individualDetail">
            <p className="detail">{each.question}</p>
            <img src="./src/assets/detailIcon.png" alt="An Icon" />
          </div>
        ))}
      </div>
    </>
  );
}

export default MoreDetail;
