import React from "react";
import ExperienceForm from "../Exper_cour_organization/ExperienceForm";
import CourseForm from "../Exper_cour_organization/CourseForm";
import OrganizationForm from "../Exper_cour_organization/OrganizationForm";
import Profile from "../profile/profile";
import SkillForm from "../Skill_lang/SkillForm";
import CertificateInterest from "../Certi_interest/Certificate_Interest";
import AwardPublicationForm from "../award_publication/Award_PublicationForm";
import References from "../references/Referience";
import PersonalInformation from "../personal/Personal-Information";

const Summery = (props) => {
  return (
    <div>
      <div className=" relative top-16 mt-4">
        <details className=" relative bg-white w-full shadow rounded group transition-all duration-1000 ease-in-out">
          <summary className="list-none flex flex-wrap items-center cursor-pointer w-full  lg:w-full transition-all duration-1000 ease-in-out">
            <h3 className="flex flex-1 p-4 font-bold uppercase text-red-300">
              {props.Section}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <div className="border-8 border-transparent border-l border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">
                <i className="bx bxs-right-arrow bx-flip-vertical group-open:text-red-400"></i>
              </div>
            </div>
          </summary>
          <div className="p-4">
            {/* form here */}
            {props.Section === "profile" ? <Profile /> : ""}
            {props.Section === "experience" ? <ExperienceForm /> : ""}
            {props.Section === "course" ? <CourseForm /> : ""}
            {props.Section === "organization" ? <OrganizationForm /> : ""}
            {props.Section === "skill" ? (
              <SkillForm
                label="Skill"
                label1="Information/ Sub-skills"
                label2="Skill level"
              />
            ) : (
              ""
            )}
            {props.Section === "language" ? (
              <SkillForm
                label="Language"
                label1="Additional information"
                label2="Language level"
              />
            ) : (
              ""
            )}
            {props.Section === "certificate" ? (
              <CertificateInterest
                label="Certificate"
                label1="Additional information"
              />
            ) : (
              ""
            )}
            {props.Section === "interest" ? (
              <CertificateInterest
                label="Interest"
                label1="Additional information"
              />
            ) : (
              ""
            )}
            {props.Section === "award" ? (
              <AwardPublicationForm
                state="award"
                label="Award"
                label1="Issuer"
                label2="Date"
              />
            ) : (
              ""
            )}
            {props.Section === "publication" ? (
              <AwardPublicationForm
                state="publication"
                label="Title"
                label1="Publisher"
                label2="Date"
              />
            ) : (
              ""
            )}
            {props.Section === "references" ? (
              <References
                label="Name"
                label1="Job Title"
                label2="Organisation"
                label3="Email"
                label4="Phone"
              />
            ) : (
              ""
            )}

            {props.Section === "projects" ? (
              <AwardPublicationForm
                state="projects"
                label="Project title"
                label1="Sub title"
                label2="Start date"
                label3="End date"
              />
            ) : (
              ""
            )}
            {props.Section === "personal" ? <PersonalInformation /> : ""}
          </div>
        </details>
      </div>
    </div>
  );
};

export default Summery;
