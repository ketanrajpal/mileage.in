import React from "react";

export default () => {
  const services = () => {
    var data = [
      {
        name: "Marketing Representation",
        slug: "marketing-representation",
        description:
          "As marketing representatives, we strategize and implement marketing, public relations & joint- promotional activities that we represent. We currently undertake such activities for various International tourism boards like Hong Kong Tourism Board, Tourism Flanders, Japan National Tourism Board etc.",
      },
      {
        name: "Public Relations",
        slug: "public-relations",
        description:
          "All organizations, no matter how large or small, ultimately depends on its reputation for survival and success. Public relations is about reputation - the result of what you do, what you say and what others say about you- including earning understanding and support, and influencing opinion with important stakeholders. Customers, suppliers, employees, investors, regulators and other stakeholders need to be regularly addressed, mainly via media platforms. Mileage has a highly professional PR team located across India, and established ties with members of media based on mutual respect.",
      },
      {
        name: "Media Training",
        slug: "media-training",
        description:
          "We conducts media training courses for CEOs, other senior management and the front office. Experienced trainers, many with journalistic backgrounds, conduct our training courses. The training is comprehensive, involving lots of practical sessions and backed by many examples of real case studies.",
      },
      {
        name: "Event Management",
        slug: "event-management",
        description:
          "Mileage regularly organizes client events like press conferences, trade events,  product launches, gala evenings, other promotional events etc. via our third-party event management partners. Additionally such events are promoted by generating media coverage through our PR division.",
      },
      {
        name: "Digital Marketing",
        slug: "digital-marketing",
        description:
          "In today’s scenario, any marketing activity is incomplete without Digital marketing. Digital Marketing is a broad term that refers to various and different promotional techniques deployed to reach customers via internet and mobile platforms. Our sister company Strategic Research Marketing regularly undertakes digital promotional campaigns for our clients.",
      },
      {
        name: "Investor Relations",
        slug: "investor-relations",
        description:
          "Investor Relations involves communicating information on a company and the investment community, including media, to highlight the organization’s business activities, strategy and prospects. Mileage has a solid track record of handling financial relations, including taking companies to their successful public listings. Post-IPO, Mileage has been involved in investor relations for many local and foreign companies listed on the Singapore Exchange.",
      },
      {
        name: "Crisis Communications",
        slug: "crisis-communications",
        description:
          "Mileage India is a leading player in the field of Crisis Management in India. As Indian Partners of MTI Network- the worlds largest maritime crisis management network, we provide round the clock response in the event of any marine or transport related incident likely to attract unfavourable attention from the press. MTI currently provides crisis cover for over 7,000 vessels, including tankers, gas carriers, bulkers, container and passenger ships and has in recent years assisted with many of the high-profile marine emergencies in Asia Pacific, the USA and Europe.",
      },
    ];
    return (
      <div>
        {data.map((service, index) => {
          return (
            <article key={index}>
              <div>
                <img src={require(`../assets/img/${service.slug}.svg`)} alt={service.name}></img>
              </div>
              <div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <div className="expertise">
      <section>
        <h1>We Expertise in</h1>
        {services()}
      </section>
    </div>
  );
};
