import { AboutStyles } from "./styles/aboutStyles";

const About = () => {
  return (
    <AboutStyles>
      <h2 id="my-slogan">
        Software is the greatest collaborative art in history
      </h2>
      <div className="about-me">
        <p>
          I started my jourey with software in Jul 2023, initially worked on
          frontend, then moved to backend, then on ETL pipelines and now
          currently working on setting up a kubernetes cluster ground up.
        </p>
        <p>
          Achieved 60% cost savings by implementing strategic changes to AWS
          instance types, compute savings plans, volumes, and snapshots for
          effective cost optimization.
        </p>
        <p>
          Successfully implemented and managed end-to-end Kubernetes system on
          bare-metal infrastructure, resulting in an outstanding 99% reduction
          in deployment time.
        </p>
        <p>
          Enhanced critical APIs performance by 300%-500% by implementing
          indexes, caching the static data and efficient cache management.
          Boosted critical graph APIs performance by 150%-300% via schema-based
          data transmission, resulting in a 70% reduction in overall payload
          size. Implemented sanity checks in the data processing pipeline,
          resulting in a 45% decrease in critical bugs
        </p>
      </div>
    </AboutStyles>
  );
};

export default About;
