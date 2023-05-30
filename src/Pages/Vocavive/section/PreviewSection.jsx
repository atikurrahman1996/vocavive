import lesson from "../../../assets/icon/lesson.png";
import deadline from "../../../assets/icon/deadline.png";
import teamLeader from "../../../assets/icon/team-leader.png";

const PreviewSection = () => {
  const cards = [
    {
      _id: 1,
      title: "60 Lessons",
      desc: "Learn the word definition, synonyms-antonyms & usages of word",
      icon: lesson,
    },
    {
      _id: 2,
      title: "60+ Hours",
      desc: "You can master 900 Vocabularies that are most common in competitive tests.",
      icon: deadline,
    },
    {
      _id: 3,
      title: "1k+ Students",
      desc: "Only one-time payment of 3000 Taka. Subscription will continue for 12 months",
      icon: teamLeader,
    },
  ];
  return (
    <section className="w-11/12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-20">
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="previewCardBg bg-secondary p-5 rounded-xl">
      <img className="w-14" src={card.icon} alt="" />
      <h2 className="font-bold text-2xl font-theme mt-5">{card.title}</h2>
      <small className="block w-5/6 mt-3 text-muted">{card.desc}</small>
    </div>
  );
};

export default PreviewSection;
