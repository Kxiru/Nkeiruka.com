import awscp from "../images/awscp.png";
import mongo from "../images/mongodbbadge.png";

export default function SkillsCertifications() {
  return (
    <section>
      <div className="my-20 dark:text-gray-200">
        <div>
          <h3 className="text-3xl py-1 ">Certifications</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            With an interest in Cloud Development and DevOps, the certifications
            don't come too far behind!
          </p>
        </div>
        <div className="flex text-center">
          <img src={awscp} className="w-24 h-24" />
          <img src={mongo} className="w-24 h-24" />
          <img src={awscp} className="w-24 h-24" />
          <img src={awscp} className="w-24 h-24" />
        </div>
        {/* <div>
        <h3>Certifications</h3>
      </div> */}
      </div>
    </section>
  );
}
