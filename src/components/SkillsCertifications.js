import awscp from "../images/awscp.png";
import awssa from "../images/awssa.png";
import cbf from "../images/cbflogo.jpg";
import mongo from "../images/mongodbbadge.png";
import netacad from "../images/cisconetacad.jpeg";

export default function SkillsCertifications() {
  return (
    <section className="dark:text-gray-200">
      <div className="my-20 ">
        <div>
          <h3 className="text-3xl py-1 ">Certifications</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            With an interest in Cloud Development, Cyber Security and DevOps,
            the certifications don't come too far behind!
          </p>
          <p className="text-md py-2 leading-8 text-gray-80">
            I am also actively pursuing certifications with Google and Coursera
            for UI/UX and Project Management. Please see my LinkedIn for the
            full list of my certifications!
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 py-5 flex-wrap md:flex-row md:flex-wrap">
          <img src={awscp} className="w-36 h-36" alt="" />
          <img src={mongo} className="w-36 h-36" alt="" />
          <img src={netacad} className="w-36 h-36 rounded-md" alt="" />
          <img src={awssa} className="w-36 h-36" alt="" />
          <img src={cbf} className="w-36 h-36 rounded-md" alt="" />
        </div>
        {/* <div>
        <h3>Skills</h3>
      </div> */}
      </div>
    </section>
  );
}
