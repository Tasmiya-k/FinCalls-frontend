import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <div className="about-main">
      <Navbar />
      <section className="home-sec1">
        <div className="about-sec1-div1">
          <img src="/videos/logo.gif" />
          <h1>Fincalls-Earnings Calls Analyzer</h1>
        </div>
        <div>
          <p className="about-para">
            Fincalls acts as an effective solution for the economic development of the
            company as well as provide an ease of analysis to the investors.
            Fincalls will help in maintaining a sense of transparency between
            the company and the investors. The real status of the company,
            whether positive or negative, will reach the audience instead of
            some biased data. Such a transparent company gains the position of
            reliability, and thus, becomes trust-worthy for the investors. This
            plays a vital role in improving the business relations of the
            company. Good relations are often responsible for great growth.
            Along wit the stakeholders and the investors, the company itself can
            use it for gaining better insights about their performance and
            identifying the areas of improvement. The company can also look for
            the financial health of the competitors in order to stay ahead in
            the competition.
          </p>
        </div>
      </section>
      <section className="about-sec2">
        <div className="about-sec2-div1">
          <video src="/videos/about.mp4" controls autoplay loop  preload="auto" />
          <h1 className="about-sec2-title">Meet the Developers</h1>
        </div>
        <div className="about-img-row">
            <img className="about-img" src="/images/Srushti.jpeg"/>
            <img className="about-img" src="/images/Tasmiya.jpg"/>
            <img className="about-img" src="/images/Purtee.jpg"/>
            <img className="about-img" src="/images/Nalawade.jpg"/>
        </div>
      </section>
    </div>
  );
}
