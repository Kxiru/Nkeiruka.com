import awscp from "../images/awscp.png";
import awssa from "../images/awssa.png";
import cbf from "../images/cbflogo.jpg";
import mongo from "../images/mongodbbadge.png";

export default function SkillsCertifications() {
  return (
    <section className="dark:text-gray-200">
      <div className="my-20 ">
        <div>
          <h3 className="text-3xl py-1 ">Certifications</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            With an interest in Cloud Development and DevOps, the certifications
            don't come too far behind!
          </p>
        </div>
        <div className="flex justify-center">
          <img src={awscp} className="w-24 h-24" />
          <img src={mongo} className="w-24 h-24" />
          <img src={awssa} className="w-24 h-24" />
          <img src={cbf} className="w-24 h-24" />
        </div>
        {/* <div>
        <h3>Skills</h3>
      </div> */}
      </div>
    </section>
  );
}
