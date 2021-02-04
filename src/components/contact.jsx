import React, { useState } from "react";
import ReactHelmet from "react-helmet";

export default () => {
  const [Contacts] = useState([
    {
      name: "Mileage Communications (India) Pvt. Ltd.",
      data: "261 (First Floor) Lane 5, Westend Marg,<br>Saidulajab, New Delhi - 110030<br>Delhi",
      phone: "+ (91) 72-90050-764",
      country: "India",
    },
    {
      name: "Mileage Communications Pte Ltd",
      data: "Mileage House<br>52B Club Street<br>Singapore 069429",
      phone: "+ (65) 6222 1678",
      country: "Singapore",
    },
    {
      name: "Mileage Communications (Shanghai) Co. Ltd",
      data: "Unit 838, No 555, Wu Ding Road<br>JingAn District, Shanghai 200040<br>People’s Republic of China",
      phone: "+ (86) 21-62189-338",
      country: "China",
    },
    {
      name: "PT Mileage Communications Jakarta",
      data: "Gedung Setiabudi 2 lantai 2, Suite 207D<br>Jalan H. R. Rasuna Said Kav. 62, Kuningan<br>Jalan Selatan 12920, Jakarta",
      phone: "+ (62) 021-570-1505",
      country: "Indonesia",
    },
    {
      name: "Mileage Communications Korea",
      data: "Unit 1127, Doosan We’ve Pavilion<br>58 Soosong-dong, Jongro-gu<br>Seoul, South Korea 110-858",
      phone: "+ (82) 2-2038-7540",
      country: "South Korea",
    },
    {
      name: "RAPR Mileage Communications Sdn Berhad",
      data: "32 Jalan Telawi Dua<br>Bangsar Baru, 59100<br>Kuala Lumpur Malaysia",
      phone: "+ (86) 603-2282-2333",
      country: "Malaysia",
    },
    {
      name: "Mileage Communications Myanmar",
      data: "703, Building A3 48 Ward,<br>Bo Ba Htoo Housing North Dagon Township,<br>Yangon, Myanmar",
      phone: "+ (95) 9-45370-0977",
      country: "Myanmar",
    },
    {
      name: "Neo Target Co., Ltd<span>(A member of The Mileage Communications Group)</span>",
      data: "317 Kamolsukosol Building, 14th Floor,<br>Unit C, D, E, Silom Road, Silom,<br>Bangrak, Bangkok 10500",
      phone: "+ (66)2631 2290-5",
      country: "Thailand",
    },
    {
      name: "Creatio Solution Consultancy Co<span>(A member of The Mileage Communications Group)</span>",
      data: "92 Tay Son Str., Quang Trung<br>Ward Dong Da Dist.<br>Hanoi, Vietnam",
      phone: "+ (84) 4-35335198",
      country: "Vietnam",
    },
  ]);

  const createMarkup = (markup) => {
    return { __html: markup };
  };

  return (
    <>
      <ReactHelmet>
        <meta charSet="utf-8" />
        <title>Mileage Communications Group | Contact</title>
        <link rel="canonical" href="https://www.mileage.in/contact" />
        <meta
          name="description"
          content="A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Mileage Communications Group" />
      </ReactHelmet>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14023.0519485945!2d77.1979019!3d28.5167778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x205402ff351b9a7b!2sMileage%20Communications%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1598551359982!5m2!1sen!2sin"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        style={{ width: "100%" }}
      ></iframe>
      <section className="contact">
        <h1>Contact</h1>
        <p>
          Mileage Communications (India) Pvt. Ltd. has its head office in New Delhi with branch offices in Mumbai and Chennai and representatives in
          Bengaluru and Kolkata.
        </p>
        <section>
          {Contacts.map((data) => {
            return (
              <div className="contact">
                <h2>{data.country}</h2>
                <h3 dangerouslySetInnerHTML={createMarkup(data.name)}></h3>
                <div dangerouslySetInnerHTML={createMarkup(data.data)} />
                <div className="phone">Phone: {data.phone}</div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};
