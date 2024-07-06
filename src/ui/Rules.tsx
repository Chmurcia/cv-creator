import { Rule } from "./Rule";

export const Rules = () => {
  return (
    <>
      <Rule
        numStr="1"
        title="Provide only important informations"
        desc="Focus on details relevant to the job you are applying for"
      />
      <Rule
        numStr="2"
        title="Add a professional photo"
        desc="A clear, high-quality headshot can make your CV stand out"
      />
      <Rule
        numStr="3"
        title="Professional summary"
        desc="Write a concise summary highlighting your key skills and career
            goals"
      />
      <Rule
        numStr="4"
        title="Work experience"
        desc="Detail your past roles, responsibilities, and achievements"
      />
      <Rule
        numStr="5"
        title="Describe your skills"
        desc="List both technical and soft skills relevant to the job"
      />
      <Rule
        numStr="6"
        title="Education"
        desc="Highlight your educational background and any relevant
            certifications"
      />
      <Rule
        numStr="7"
        title="Include hobbies"
        desc="Share your interests if they are relevant or showcase unique aspects
            of your personality"
      />
      <Rule
        numStr="8"
        title="Make it easier to read"
        desc="Use clear headings, bullet points, appropriate font, and a clean
            layout"
      />
    </>
  );
};
