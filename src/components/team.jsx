import React from "react";
import ReactHelmet from "react-helmet";

export default () => {
  const services = () => {
    var data = [
      {
        name: "Sunil Puri, Managing Director",
        slug: "sunil-puri",
        linkedin: "https://www.linkedin.com/in/sunil-puri-43992b8",
        description:
          "Sunil has over 30-years experience in finance, marketing and tourism industry and has successfully handled various large-scale promotions and events for many international clients. He has successfully led the company for the last two decades and is well known across India in the tourism industry. His strengths include sales and marketing, marketing-communications, finance and devising PR strategies.",
      },
      {
        name: "Sheema Vohra, Director & Advisor",
        slug: "sheema-vohra",
        linkedin: "https://www.linkedin.com/in/sheema-vohra-a6002310",
        description:
          "With over 27-years of experience in marketing with leading hotel and tourism companies, Sheema has had a rich professional portfolio including the Oberoi Group of Hotels and Marriott International (Director – India & Subcontinent, Global Sales Organization),  She is also the Managing Director of Sartha Global Marketing, a sister company representing several US-based accounts, including Brand USA and Visit California in India.  Her strengths are a comprehension of business issues and solutions, and a robust personal network in the media and corporate world.",
      },
      {
        name: "Vidheesh Tyagi, Vice President",
        slug: "videesh-tyagi",
        linkedin: "https://www.linkedin.com/in/vidheesh",
        description:
          "Vidheesh has over 20-years of experience in hospitality sales & marketing and Public Relations. He has successfully handled various co-op promotions, events and various PR initiatives for Mileage clients. His strengths lie in below-the-line promotions, communication skills and strategizing.",
      },
      {
        name: "Yap Boh Tiong, Overseas Director & Advisor ",
        slug: "yap-boh-tiong",
        linkedin: "https://www.linkedin.com/in/yap-boh-tiong-1aa5313",
        description:
          "With over 40-years of experience in Mass Communication, Boh Tiong has acted as the President of Institute of Public Relations of Singapore from 1985-1993. He handles countless crises and conduct crisis response and media training regularly.",
      },
      {
        name: "Patsy Phay, Overseas Director & Advisor",
        slug: "patsy-phay",
        linkedin: "https://www.linkedin.com/in/patsy-phay-6808934",
        description:
          "Patsy holds a diploma from the Cam Foundation in London. She heads activities for clients from the financial and IT industries, and has evolved some path-breaking PR strategies.",
      },
    ];
    return (
      <div className="members">
        {data.map((service, index) => {
          return (
            <article key={index}>
              <div>
                <img src={require(`../assets/img/team/${service.slug}.jpg`)} alt={service.name} className="teamPicture"></img>
              </div>
              <div>
                <h2>
                  {service.name}{" "}
                  <a href={service.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-linkedin"></span>
                  </a>
                </h2>
                <p>{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <ReactHelmet>
        <meta charSet="utf-8" />
        <title>Mileage Communications Group | Team</title>
        <link rel="canonical" href="https://www.mileage.in/team" />
        <meta
          name="description"
          content="A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Mileage Communications Group" />
      </ReactHelmet>
      <div className="team">
        <section>
          <h1>Our Team</h1>
          {services()}
        </section>
      </div>
    </>
  );
};
