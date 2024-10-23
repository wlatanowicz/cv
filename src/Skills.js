const SKILLS = [
  ["Python", "Django", "Celery"],
  ["PostgeSQL", "RabbitMQ", "Kafka"],
  ["AWS", "Docker", "Terraform", "GitHub Actions"],
];

const STYLES = [{ width: "25%" }, { width: "35%" }, {}];

const Skills = () => {
  return (
    <div className="section row">
      <h2 className="col">Skills</h2>
      <div className="section-text col-right row">
        {SKILLS.map((e, i) => (
          <ul key={i} className="skills" style={STYLES[i]}>
            {e.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;
