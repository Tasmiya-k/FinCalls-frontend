import { useNavigate } from "react-router-dom";

export default function LandingHome() {
  const navigate = useNavigate();
  function goFincalls(){
    console.log("HERE");
    navigate("/fincalls");
  }
  function chatBot(){
    navigate("/chatbot");
  }
  return (
    <div className="landinghome-main">
      <div className="landinghome-sec-1">
        <h1>FinTalksBuddy</h1>
      </div>

      <div className="landinghome-sec-2">
        <div className="landing-sec-2-left">
          <p className="landinghome-sec2-p">
            Analyze Annual Reports using our FAQ bot
          </p>
          <img src="/images/chatbot.jpeg" className="landinghomeimg1" />
          <div className="landinghome-sec2-desc">
            <button  onClick={chatBot}>FAQ Chatbot</button>
          </div>
        </div>

        <div className="landing-sec-2-right">
          <p className="landinghome-sec2-p">
            Analyze Earning Calls with Fincalls
          </p>
          <img src="/images/office.jpg" className="landinghomeimg2" />
          <div className="landinghome-sec2-desc">
            <button onClick={goFincalls}>FinCalls</button>
          </div>
        </div>
      </div>
    </div>
  );
}
