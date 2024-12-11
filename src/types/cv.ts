export type Cv = {
  name: CvName['name']
  location: CvLocation['location']
  social: CvSocial['value']
  summary: CvSummary['summary']
  experience: CvExperience[]
  education: CvEducation[]
  skills: CvSkills['skills']
}

export type CvSection = {
  title: string
  company: string
  location: string
  duration: string
  achievements: string[]
}

export type CvEducation = {
  degree: string
  school: string
  location: string
  year: string
  achievements: string
}

export type CvExperience = {
  title: string
  company: string
  location: string
  duration: string
  achievements: string
}

export type CvName = {
  name: string
}

export type CvLocation = {
  location: string
}

export type CvSocial = {
  value: string
}

export type CvSummary = {
  summary: string
}

export type CvSkills = {
  skills: string[]
}
