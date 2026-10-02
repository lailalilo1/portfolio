// ===== TOUTES TES DONNÉES SONT ICI =====
export const profile = {
  name: "Laila ILiLLou",
  title: "Data Science | Big Data | Artificial Intelligence",
  intro: "5th-year engineering student at ENSA Agadir, passionate about Data Science, Machine Learning and Artificial Intelligence.",
  badge: "Looking for a PFE internship · January / February 2027",
  cv: "cv/LAILA_ILILLOU_CV_Stage_PFE.pdf",
  strip: ["Python", "Machine Learning", "Data Engineering", "Computer Vision", "Power BI", "SQL"],
  about: [
    "I am Laila Ilillou, a 5th-year engineering student at ENSA Agadir, specializing in Data Science, Big Data and Artificial Intelligence.",
    "Through my studies and internships, I have worked on Machine Learning, Data Engineering, Computer Vision, data analysis and Business Intelligence projects.",
    "I am currently looking for a PFE internship starting in January/February 2027, to apply my skills and contribute to Data/AI projects.",
  ],
  info: [" Agadir, Morocco", " ENSA Agadir", " 5th-year engineering student", " PFE — January/February 2027"],
  email: "lailaililou0@gmail.com",
  linkedin: "https://www.linkedin.com/in/laila-ilillou-025b4831a",
  github: "", // ajoute ton lien GitHub ici quand tu en auras un
};

export const skills = {
  "Data Science": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning", "Statistics", "Data Analysis"],
  "Machine Learning & AI": ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "YOLOv8", "Computer Vision", "Deep Learning"],
  "Data Engineering": ["SQL", "MySQL", "SQLite", "ETL", "Data Warehouse", "Data Modeling"],
  "BI & Visualization": ["Power BI", "DAX", "Plotly", "Matplotlib"],
  Development: ["Flask", "Streamlit", "Scrapy", "Git", "VS Code"],
};

// imgs   : images (dans public/images)       -> ["images/xxx.png"]
// videos : vidéos mp4 (dans public/images)   -> ["images/xxx.mp4"]
// demo / video / code : liens externes (laisse "" si aucun)
export const projects = [
  {
    icon:"" ,title: "Tomato Disease Detection",
    kind: "Computer Vision | YOLOv8 | Python",
    desc: "Automatic detection of tomato diseases from images. Classes: Anthracnose, Blossom End Rot, Healthy Tomato, Spotted Wilt Virus.",
    tech: ["YOLOv8", "Computer Vision", "Python", "Roboflow"],
    flow: ["Dataset", "Image annotation", "Training", "Validation", "Object detection", "Web interface"],
    imgs: [], videos: ["images/Final_Demo_Tomato_Detection.mp4"], demo: "", video: "", code: "",
  },
  {
    icon: "", title: "Credit Card Fraud Detection",
    kind: "Machine Learning | Python | Flask | Scikit-learn",
    desc: "Web application that detects potentially fraudulent bank transactions.",
    tech: ["Python", "Pandas", "Scikit-learn", "Flask", "Machine Learning"],
    flow: ["Problem", "Data preparation", "Preprocessing", "Model training", "Model selection", "Flask application", "Prediction"],
    imgs: [], videos: ["images/FDCB.mp4"], demo: "", video: "", code: "",
  },
  {
    icon: "", title: "Medicine Price Analysis",
    kind: "Web Scraping | Data Analysis | Flask",
    desc: "Collection and analysis of medicine prices across different countries.",
    tech: ["Scrapy", "Python", "Pandas", "SQLite", "Flask", "Plotly"],
    flow: ["Web scraping", "Data cleaning", "Data transformation", "SQLite", "Data analysis", "Flask dashboard"],
    imgs: [], videos: ["images/medicaments.mp4"], demo: "", video: "", code: "",
  },
  {
    icon: "", title: "Data Platform — STAR Aït Melloul",
    kind: "Data Engineering | BI | Machine Learning",
    desc: "Design of a data platform that centralizes sales data and produces analyses and forecasts.",
    note: "Design and simulation project: the data used is simulated, not real confidential STAR data.",
    tech: ["MySQL", "ETL", "Data Warehouse", "Power BI", "DAX", "Python", "Machine Learning"],
    flow: ["CSV / Excel", "ETL", "MySQL OLTP", "Data Warehouse", "Power BI", "Machine Learning"],
    imgs: ["images/stock_achats.png", "images/vue_direction.png"], videos: [], demo: "", video: "", code: "",
  },
];

export const experience = [
  { year: "2026", company: "STAR Aït Melloul", role: "PFA2 — Data / BI / Machine Learning",
    missions: ["Designed a data platform: ETL, MySQL, data warehouse", "Built Power BI dashboards with DAX", "Developed forecasting models in Python"],
    tech: "Python · SQL · MySQL · Power BI · Machine Learning" },
  { year: "2025", company: "Appbase — Agadir", role: "PFA1 — Data Collection & Price Analysis",
    missions: ["Collected medicine prices with web scraping", "Cleaned and stored data in SQLite", "Built a Flask/Plotly analysis dashboard"],
    tech: "Scrapy · Python · Pandas · SQLite · Flask · Plotly" },
  { year: "2025", company: "Vala Orange", role: "Machine Learning / Web Application",
    missions: ["Developed a Machine Learning model", "Integrated it into a web application"],
    tech: "Python · Scikit-learn · Flask" },
];

export const education = {
  school: "ENSA Agadir",
  degree: "Engineering cycle — Data Science, Big Data & Artificial Intelligence · 2022 — 2027",
  modules: ["Machine Learning", "Deep Learning", "Data Mining", "Computer Vision", "Statistics", "Data Engineering", "ETL", "Data Warehouse", "Business Intelligence"],
};