export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'experience' | 'education' | 'certification';
}

export const experienceData: ExperienceItem[] = [
  {
    id: "edu-1",
    title: "B.Tech - Computer Science and Engineering",
    organization: "Mangalam College of Engineering, Kottayam",
    period: "2020 - 2024",
    description: [
      "Relevant coursework: AI and ML, DBMS, Computer Networks, Operating Systems"
    ],
    type: 'education'
  },
  {
    id: "edu-2",
    title: "Senior Secondary - Computer Science Stream",
    organization: "St John's School, Pathanamthitta",
    period: "2018 - 2020",
    description: [],
    type: 'education'
  },
  {
    id: "exp-1",
    title: "Internal Industry Project",
    organization: "B-76 Technologies Pvt. Ltd.",
    period: "Ongoing",
    description: [
      "Working on a region-aware trend ingestion and structuring system.",
      "Applying data collection, structuring, and analytical thinking to support technology-driven insights."
    ],
    type: 'experience'
  },
  {
    id: "exp-2",
    title: "Data Science and Gen AI Training",
    organization: "PySpiders",
    period: "Ongoing",
    description: [
      "Training in Python from basic to advanced level, SQL, Power BI, statistics, Big Data, NumPy, Pandas, data analysis, data visualization, and machine learning."
    ],
    type: 'experience'
  },
  {
    id: "exp-3",
    title: "Fundamentals of Wireless Communication and Industry 4.0",
    organization: "Torc Infotech Pvt. Ltd., Kochi",
    period: "15 days",
    description: [
      "Completed industry-oriented training covering wireless communication fundamentals and Industry 4.0 concepts."
    ],
    type: 'experience'
  }
];
