import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { team } from "../constants";

const Team = () => {
  return (
    <Section id="about" crosses>
      <div className="container">
        <Heading tag="Our Team" title="Our Dedicated Team Members" />

        <div className="flex gap-5 flex-col sm:flex-row justify-evenly items-center text-center">
          {team.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                width={250}
                height={250}
                alt="Team members"
                className="mb-4"
              />
              <h5>{item.name}</h5>
              <p className="body-2 mb-8 text-n-4">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
