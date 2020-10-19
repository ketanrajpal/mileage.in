import React from "react";
import ReactHelmet from "react-helmet";

export default () => {
  const services = () => {
    var data = [
      {
        name: "Corporate Public Relations and Brand Communications",
        slug: "corporate-public-relations-and-brand-communications",
        description:
          "<p>Mileage Communications India undertakes and offers expert advice on the following areas:</p><ul><li>Corporate Governance, Reputation Management and PR</li><li>Customer Communications</li><li>Corporate Social Responsibility communication</li><li>Issue and Crisis management</li><li>Special Projects, Public Affairs and Community Relations</li><li>Media Monitoring on traditional media, social media and other online communications channels</li><li>Marketing and Branding initiatives</li><li>Product Launches</li><li>Event Amplification and onsite PR</li><li>Leadership Profiling</li><li>Advice and profiling of Sustainability and Environmental compliances</li><li>Content production- including press releases/ notes; speaking points; influencer recruitment; video shoots, and negotiating with media houses/ platforms for required amplification</li></ul>",
      },
      {
        name: "Social Media and Digital Marketing",
        slug: "social-media-and-digital-marketing",
        description:
          "<p>Engagement with social media empowers companies and marketers to have a strategic approach. Mileage has a dedicated team working on the following:</p><ul><li>Social Media Intelligence: Social analytics and an overview of the macro and microenvironments</li><li>Social Media Listening: Assessing the overall sentiment towards an organization and its actions</li><li>Social Media Monitoring: Data analysis and assistance in building social media strategy</li><li>Social Media Amplification: Devising unique communication strategies on corporate and brand promotions on social media platforms</li><li>Social Media and Digital Marketing Consulting: Advice on getting the right expertise and vendors for larger online promotions</li></ul>",
      },
      {
        name: "Influencer and Blogger Engagement",
        slug: "influencer-and-blogger-engagement",
        description:
          "<p>In these changing times, social media has become as powerful a platform as conventional media. Breaking news is often spread via videos, photos and posts by individuals on their social handles, before the mainline channels pick it up, often compelling rapid corporate responses. Similarly celebrity and influencer endorsements of brands results in lasting impressions on target audiences.<br><br>Mileage can help you design successful campaigns with influencers that will help meet your branding and ROI needs and give you an edge over your competitors.<br><br>At the same time, if you are an influencer who is looking to connect with global brands whose values reflect your own, we can help you find the right fit.</p>",
      },
      {
        name: "Media Training & Crisis Communication",
        slug: "media-training-and-crisis-communication",
        description:
          "<p>We regularly conduct media training courses for CEOs, senior management and the front office. Experienced trainers, many with journalistic backgrounds, conduct our training courses. Our training is comprehensive, involving lots of practical sessions on how to deal with the media, backed by examples of real life case studies.<br><br>Mileage is a leader in the field of Crisis Communication & Management in India. As the Indian Partner of MTI Network- the world’s largest maritime crisis management network, we provide round-the-clock responses during any marine- or transport-related incident that is likely to attract unfavourable attention from the media. MTI currently provides crisis cover for over 7,000 vessels, including tankers, gas carriers, bulkers, container and passenger ships and has in recent years assisted during multiple high-profile marine emergencies around the globe.</p>",
      },
      {
        name: "Reputation Management",
        slug: "reputation-management",
        description:
          "<p>All organizations, no matter how large or small, ultimately depends on its reputation for survival and success. Public relations is about reputation - the result of what you do, what you say and what others say about you- including earning understanding and support, and influencing opinion with important stakeholders. Customers, suppliers, employees, investors, regulators and other stakeholders need to be regularly addressed, via media and other platforms.<br><br>Mileage has an independent team that keeps an ongoing watch on media coverage and social media posts concerning the clients we represent. We proactively update and advise on issues that might affect their brand-value, market-standing and reputation.<br><br>Mileage has a highly professional PR team located across India, with established ties with members of media based on mutual respect.</p>",
      },
      {
        name: "Event Management",
        slug: "event-management",
        description:
          "<p>Mileage regularly conceptualizes and organizes events like press conferences, roadshows, trade events, product launches, gala evenings, other promotional events etc. via third-party event management partners. These events are also promoted and publicised via media coverage generated through our PR division.</p>",
      },

      {
        name: "Marketing Representation",
        slug: "marketing-representation",
        description:
          "As marketing representatives, we strategize and implement marketing, public relations & joint promotional activities for our clients. We currently undertake such activities for the Hong Kong Tourism Board and Visit Flanders in India.",
      },
    ];
    return (
      <>
        <ReactHelmet>
          <meta charSet="utf-8" />
          <title>Mileage Communications Group | Services</title>
          <link rel="canonical" href="https://www.mileage.in/services" />
          <meta
            name="description"
            content="A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore."
          />
          <meta name="keywords" content="" />
          <meta name="author" content="Mileage Communications Group" />
        </ReactHelmet>
        <div className="coloumns">
          {data.map((service, index) => {
            return (
              <article key={index}>
                <div className="cover">
                  <h2>{service.name}</h2>
                  <img src={require(`../assets/img/expertise/${service.slug}.svg`)} alt={service.name}></img>
                  <div className="content">
                    <div className="container">
                      <h2>{service.name}</h2>
                      <div dangerouslySetInnerHTML={createMarkup(service.description)}></div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </>
    );
  };

  const createMarkup = (markup) => {
    return { __html: markup };
  };

  return (
    <div className="expertise">
      <section>
        <h1>Our Expertise</h1>
        {services()}
      </section>
    </div>
  );
};
