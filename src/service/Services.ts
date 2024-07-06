export interface Val {
  value: string;
}

export interface Edu {
  year: string;
  degree: string;
  place: string;
}

export interface Exp {
  timeStart: string;
  timeEnd: string;
  position: string;
  location: string;
  company: string;
  summary: string;
}

export interface Contact {
  name: string;
  value: string;
}

export interface State {
  firstName: string;
  lastName: string;
  occupation: string;
  summary: string;
  img: string | null;
  contact: Contact[]; // 3
  expertise: Val[]; // 5
  interests: Val[]; // 3
  languages: Val[]; // 3
  experience: Exp[]; // 3
  education: Edu[]; // 2
}

export type Action =
  | { type: "reset" }
  | { type: "resetFirstName" }
  | { type: "setFirstName"; payload: State["firstName"] }
  | { type: "setLastName"; payload: State["lastName"] }
  | { type: "resetLastName" }
  | { type: "setOccupation"; payload: State["occupation"] }
  | { type: "resetOccupation" }
  | { type: "setSummary"; payload: State["summary"] }
  | { type: "resetSummary" }
  | { type: "setImg"; payload: State["img"] }
  | { type: "setPhone"; payload: Contact["value"] }
  | { type: "resetPhone" }
  | { type: "setEmail"; payload: Contact["value"] }
  | { type: "resetEmail" }
  | { type: "setAddress"; payload: Contact["value"] }
  | { type: "resetAddress" }
  | { type: "setExpertise"; payload: Val }
  | { type: "resetExpertise" }
  | { type: "setInterests"; payload: Val }
  | { type: "resetInterests" }
  | { type: "setLanguages"; payload: Val }
  | { type: "resetLanguages" }
  | { type: "setExperiences"; payload: Exp }
  | { type: "resetExperiences" }
  | { type: "setEducation"; payload: Edu }
  | { type: "resetEducation" };
