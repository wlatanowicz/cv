const EXPERIENCE = [
  {
    position: "Software Engineer",
    company: "Skytek Ltd.",
    time: "May 2022 - now",
    details: [
      "Development of Django-based projects",
      "System architecture design",
      "Development of CI/CD process",
      "Automation of AWS infrastructure provisioning with Terraform",
    ],
  },
  // {
  // 	"position" : "Software Engineer",
  // 	"company" : "WSP Poland Sp. z o.o. / WSP Digital Australia",
  // 	"time" : "January 2022 - now",
  // 	"details" : [
  // 		"My project has not started yet",
  // 	]
  // },
  {
    position: "Senior Python Developer",
    company: "10Clouds Sp. z o.o.",
    time: "September 2017 - November 2021",
    details: [
      "Development of multiple Django-based projects",
      "System architecture design",
      "Automation of tests with Robot Framework",
      "Automation of AWS infrastructure provisioning with Terraform",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "DAC Software Sp. z o.o.",
    time: "September 2016 - August 2017",
    details: [
      "Development of Qarson.fr platform",
      "Development of EDPAuto.fr platform",
      "Dockerization of the production and test environments",
      "Implementation of the monitoring of the production infrastructure",
      "Work related to development of internal sales-supporting tools",
      "Work in 5-person Scrum team",
    ],
  },
  {
    position: "Full Stack Developer, System Architect",
    company: "Flux Sp. z o.o.",
    time: "September 2010 - September 2016",
    details: [
      "Design and development of multiple web based applications",
      "Requirements analysis",
      "Project management",
      "UX development",
      "Infrastructure management",
      "Management of the development of Funnela CRM",
    ],
  },
  {
    position: "Full Stack Developer, System Architect",
    company: "True Solutions Sp. z o.o.",
    time: "December 2013 - September 2016",
    details: [
      "Design and development of multiple web based applications",
      "Requirements analysis",
      "Company and development team (up to 15 persons) management",
      "Development of multiple projects co-financed by EU",
    ],
  },
  {
    position: "Owner",
    company: "True Solutions Wiktor Latanowicz",
    time: "November 2008 - October 2010",
    details: ["Design and development of Funnela CRM"],
  },
  {
    position: "System Administrator, Network Administrator",
    company: "HARDS.PL",
    time: "2002 - 2006",
    details: [
      "Administration of multiple MS Active Directory servers",
      "Construction and configuration of computer networks",
      "Daily support for network users",
    ],
  },
];

const Entry = (props) => {
  const { data } = props;
  const { position, company, time, details } = data;

  return (
    <div class="section-text col-right">
      <div class="row">
        <div class="col">
          <h3>{company}</h3>
        </div>
      </div>
      <div class="row subsection">
        <div class="emph col">{position}</div>
        <div class="col-right light">{time}</div>
      </div>
      <div>
        Started out as a tool to help collect data for a research project -
        <i>Lingering emotion in the experience of beauty</i>, is now a
        comprehensive app that simulates every step of the experiment and
        automates the entire data collection process.
      </div>
      <ul class="desc">
        {details.map((det) => (
          <li>{det}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <div class="section row">
      <h2 class="col">Experience</h2>
      {EXPERIENCE.map((e) => (
        <Entry data={e} />
      ))}
    </div>
  );
};

export default Experience;
