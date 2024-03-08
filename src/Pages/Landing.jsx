import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/home");
  }
  return (
    <div className="landing-body">
      <div className="landing-main">
        <div className="landing-c1">
          <img src="/videos/Girl_Hello.gif" className="landing-gifs" />
        </div>
        <div className="landing-c2">
          <img src="/videos/Logo.gif" className="landing-c2- logo" />
          <h1 className="title">Fincalls</h1>
          <h1 className="landing-c2- subtitle">Earning Call Analyzer </h1>
          <button className="landing-c2- button" onClick={goHome}>
            Start
          </button>
        </div>
        <div className="landing-c3">
          <img src="/videos/Man_Hello.gif" className="landing-gifs" />
        </div>
      </div>
    </div>
  );
}
