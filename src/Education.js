const EDUCATION = [
  {
    field: "Management (MSc Studies)",
    name: "Wyższa Szkoła Bankowa w Poznaniu",
    time: "2014 - 2016 (no graduation)",
    place: "Poznań, Poland",
  },
  {
    field:
      "Computer Science, Computer Science in Business Processes (MSc Studies)",
    name: "Politechnika Poznańska / Poznań University of Technology",
    time: "2011 - 2013 (no graduation)",
    place: "Poznań, Poland",
  },
  {
    field: "Computer Science (BSc Studies)",
    name: "Politechnika Poznańska / Poznań University of Technology",
    time: "2007 - 2010",
    place: "Poznań, Poland",
  },
];

const Entry = (props) => {
  const { data } = props;
  const { field, place, name, time } = data;

  return (
    <div className="section-text col-right">
      <h3>
        <span className="emph">{field}</span>
      </h3>
      <div>{name}</div>
      <div className="row">
        <div className="col light">{place}</div>
        <div className="col-right light">{time}</div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="section row">
      <h2 className="col">Education</h2>
      {EDUCATION.map((e, i) => (
        <Entry key={i} data={e} />
      ))}
    </div>
  );
};

export default Education;
