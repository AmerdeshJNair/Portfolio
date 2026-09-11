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
    title: "Lung Cancer Detection and Classification using AlexNet CNN",
    shortDescription: "Developed a computer-vision pipeline for lung CT-image analysis combining image segmentation, multilevel thresholding, morphological processing and transfer learning with AlexNet CNN.",
    problem: "Lung cancer diagnosis from medical images requires complex image analysis, segmentation, feature extraction, and classification to accurately identify relevant lung regions, isolate possible tumor/nodule regions, and distinguish benign and malignant cases.",
    objective: "To build a decision-support-oriented research prototype that combines classical image-processing techniques with deep learning to classify lung cancer CT images.",
    dataset: "Experimental dataset containing 1,000 lung-cancer images divided into four categories.",
    methodology: "Image preprocessing, green-channel extraction, lung-region extraction via multilevel thresholding, tumor/nodule segmentation via grayscale thresholding and morphological operations, followed by CNN-based feature extraction and classification using transfer learning.",
    technologies: ["Python", "AlexNet", "VGG-16", "CNN", "Transfer Learning", "Computer Vision", "Medical Image Processing", "Image Segmentation", "Django", "CUDA"],
    keyResult: "Achieved 96% accuracy with AlexNet and 98% with an AlexNet + VGG-16 combined approach.",
    architecture: "Workflow: CT Image Input → Preprocessing & Green-channel extraction → Lung-region extraction → Multilevel/Grayscale thresholding → Morphological operations → Tumor region segmentation → Feature extraction/recognition → AlexNet CNN → Classification.",
    results: [
      "Reported accuracy: AlexNet CNN (96%), AlexNet + VGG-16 CNN (98%), Fully Convolutional Network (91.2%), Conventional CNN (80.8%).",
      "Successfully extracted lung and tumor regions using multilevel thresholding and morphological processing.",
      "Developed a Django-based web interface for users to select CT scan images and view classification outputs."
    ],
    future: "Broader datasets, additional imaging modalities (CT, PET, MRI), clinical validation, and integration with healthcare systems/EHRs.",
    paperUrl: "https://pubs.aip.org/aip/acp/article-abstract/3260/1/020036/3355442/Lung-cancer-detection-and-classification-using?redirectedFrom=fulltext"
  },
  {
    id: "aia-assistant",
    title: "A.I.A — Artificial Intelligence Assistant",
    shortDescription: "Built a Python desktop AI assistant with voice/text interaction, speech synthesis, speech recognition, system automation and web-based information retrieval.",
    problem: "Navigating desktop environments, retrieving information, and performing repetitive tasks manually can be inefficient, especially for users with accessibility needs.",
    objective: "To develop a modular desktop personal assistant capable of executing system commands, retrieving information, and automating workflows via voice and keyboard inputs.",
    methodology: "Combined speech recognition, text-to-speech, and a command routing system with fuzzy matching to execute task-specific Python modules for web scraping, browser automation, and desktop automation.",
    technologies: ["Python", "Tkinter", "SpeechRecognition", "pyttsx3", "BeautifulSoup", "pynput", "Desktop Automation", "Web Scraping", "Threading"],
    keyResult: "Successfully implemented a voice and text-driven assistant capable of extensive system automation, file manipulation, and real-time information retrieval.",
    architecture: "Pipeline: Microphone Input → SpeechRecognition → Command Router → Task-Specific Module → Result Execution → Text-to-Speech & GUI Update.",
    implementation: "Utilized Tkinter for GUI, pynput/psutil for Windows system automation, and various libraries (Wikipedia, geopy, requests) for web integrations. Handled local persistence for user settings via pickle. Note: This is a rule/command-driven assistant, not an LLM-based system.",
    results: [
      "Supported 40+ features including Wikipedia search, YouTube playback, weather lookup, system volume control, and mathematical calculations.",
      "Automated file creation (Word, Excel, JSON, HTML) and basic desktop application workflows.",
      "Implemented a customizable GUI with conversation modes, theme switching, and avatar selection."
    ],
    future: "Integration of modern LLMs for generative conversational capabilities and cross-platform support."
  },
  {
    id: "votein-platform",
    title: "VoteIn — Voting Platform",
    shortDescription: "Developed a full-stack voting platform using Java and Spring Boot with REST APIs, JPA-based persistence, MySQL, Spring Security and role-specific interfaces.",
    problem: "Managing elections requires secure authentication, duplicate-vote prevention, and robust role-based access for voters, candidates, and administrators.",
    objective: "To engineer a full-stack web application demonstrating layered backend architecture, REST API design, and database relationships for election management.",
    methodology: "Built a Spring Boot backend with layered architecture (Controllers, Services, Repositories). Secured endpoints with Spring Security and BCrypt. Designed a relational MySQL database via Spring Data JPA. Created an HTML/JS frontend with Chart.js analytics.",
    technologies: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "REST APIs", "Maven", "JavaScript", "Chart.js", "HTML/CSS"],
    keyResult: "Delivered a functional full-stack application with role-based application flows, multipart image uploads, and admin dashboards with data aggregation.",
    architecture: "Frontend (HTML/JS) ↔ REST APIs ↔ Spring Boot Controllers ↔ Service Layer ↔ Spring Data JPA Repositories ↔ MySQL Database.",
    implementation: "Implemented distinct roles (Voter, Candidate, Admin). Prevented duplicate voting through voter-state validation. Designed database relationships (OneToMany, ManyToOne) using JPA entities. Aggregated vote data via JPA queries and visualized results using Chart.js on the admin dashboard.",
    results: [
      "Created secure registration and login flows using BCrypt password hashing.",
      "Enabled multipart image uploads for candidate party symbols.",
      "Built an Admin dashboard visualizing voter statistics and party vote-counts via REST APIs and Chart.js."
    ]
  }
];
