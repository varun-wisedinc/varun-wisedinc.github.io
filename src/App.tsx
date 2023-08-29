import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import AddOn from "./components/AddOn";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const cardData = [
    {
      title: "Workflow",
      price: 19,
      offers: [
        "Unlimited Client & Projects",
        "Proposals",
        "Contracts",
        "Invoicing & Payments",
        "Project Management",
        "Tasks & Time Tracking",
        "Online Scheduling",
        "iOS, Android, Chrome & Mac Apps",
      ],
    },
    {
      title: "Workflow Plus",
      price: 29,
      offers: [
        "Everything in Workflow, plus...",
        "White Labelled client experience",
        "Client forms and questionnaires",
        "Workflow automations",
        "Subcontracting (client-mode)",
        "Calendly integration",
        "Client portal",
        "Priority support",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading">
          <h1 style={{ fontWeight: 300, fontSize: "35px" }}>Plans & Pricing</h1>
          <div className="toggle">
            <div className="toggle-monthly">Monthly</div>
            <div className="toggle">
              <div className="toggle-label">
                <input type="checkbox" />
                <div className="toggle-inner"></div>
              </div>
            </div>
            <div className="toggle-yearly">Yearly</div>
          </div>
        </div>
      </div>
      <div className="cards">
        {cardData.map((card) => (
          <Card title={card.title} price={card.price} offers={card.offers} />
        ))}
      </div>
      <div className="add-on">
        <h2 style={{ fontSize: "25px", fontWeight: 400, marginBottom: "75px" }}>
          Super charge your work with add-ons
        </h2>
        <AddOn
          title="Collaborators"
          price={0}
          subText="Invite other users to specific projects for limited access and functionality."
        />
        <AddOn
          title="Partners"
          price={9}
          subText="Invite other users for full account access and company management."
        />
        <AddOn
          title="Bonsai Tax"
          price={10}
          subText="Track expenses, identify write-offs, and estimate quarterly taxes easily."
        />
      </div>
      <div className="market">
        <div>
          <h2 style={{ fontSize: "40px", fontWeight: 500 }}>
            It's <span style={{ color: "#00b289" }}>your</span> business.
          </h2>
          <h2 style={{ fontSize: "40px", fontWeight: 500 }}>
            We're here to help it grow
          </h2>
        </div>
        <Button text="START FREE" onClick={() => {}} width="200px" />
      </div>
      <div className="faq">
        <h2 style={{ fontSize: "40px", fontWeight: 400, color: "#00b289" }}>
          Frequently Asked Questions
        </h2>
        <div className="question">
          <h3>How does the 14 day free trial work?</h3>
          <h3>Can I change plans anytime?</h3>
          <h3>How do I pause my Bonsai subscription?</h3>
          <h3>What is your refund policy?</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
