export interface Project {
  id: string;
  title: string;
  problem?: string;
  shortDescription: string;
  objective?: string;
  dataset?: string;
  methodology?: string;
  technologies: string[];
  keyResult: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture?: string;
  implementation?: string;
  results?: string[];
  challenges?: string;
  lessons?: string;
  future?: string;
  paperUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "lung-cancer-detection",
    title: "Lung Cancer Detection and Classification using CNN",
    shortDescription: "A hybrid deep learning model combining AlexNet and VGG16 CNN architectures for accurate lung cancer prediction using CT scan images.",
    technologies: ["Python", "CNN", "TensorFlow", "Keras", "Image Processing", "AlexNet", "VGG16"],
    keyResult: "Achieved 96% classification accuracy, including detection of cancer type and stage.",
    paperUrl: "https://pubs.aip.org/aip/acp/article-abstract/3260/1/020036/3355442/Lung-cancer-detection-and-classification-using?redirectedFrom=fulltext",
    results: [
      "Developed a hybrid model combining AlexNet + VGG16 CNN architectures.",
      "Achieved a classification accuracy of 96%, including detection of cancer type and stage.",
      "Performed dataset processing, feature extraction, and training using Python and deep learning frameworks.",
      "Contributed to a published research paper documenting methodology and performance evaluation in AIP Publishing."
    ]
  },
  {
    id: "ai-assistant",
    title: "A.I.A – Artificial Intelligence Assistant",
    shortDescription: "An assistive AI tool designed to help differently-abled users perform daily tasks via voice and gesture inputs.",
    technologies: ["Python", "NLP", "Speech Recognition"],
    keyResult: "Enabled accessibility through NLP-based command recognition and task execution functionalities.",
    results: [
      "Designed an assistive AI tool to help differently abled users perform daily tasks via voice and gesture inputs.",
      "Implemented NLP-based command recognition and task execution functionalities for accessibility support.",
      "Focused on user interaction for individuals with mobility or speaking limitations."
    ]
  },
  {
    id: "news-summarizer",
    title: "News & Web Article Summarizer",
    shortDescription: "A text summarization application that retrieves online news using web scraping and converts it into concise summaries.",
    technologies: ["Python", "Tkinter", "BeautifulSoup", "Scrapy", "NLP"],
    keyResult: "Real-time summary generation using extractive summarization techniques and URL-based content extraction.",
    results: [
      "Created a text summarization application that retrieves online news using web scraping and converts it into concise summaries.",
      "Built a simple user interface using Tkinter for easy input and real-time summary generation.",
      "Utilized extractive summarization techniques and URL-based content extraction."
    ]
  },
  {
    id: "secure-voting-system",
    title: "Secure Digital Voting System",
    shortDescription: "A secure voting platform supporting flexible election categories for college, community, and state-level use cases.",
    technologies: ["Java", "GUI Design", "File Handling", "Database Concepts"],
    keyResult: "Implemented robust user authentication and secure vote recording features with a Java GUI.",
    results: [
      "Developed a voting platform that supports flexible election categories (college, community, state-level use cases).",
      "Implemented user authentication and secure vote recording features in Java GUI.",
      "Enabled confidential input, user-friendly interaction, and expandable candidate options."
    ]
  }
];
