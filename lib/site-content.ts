export const siteContent = {
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    name: "Sankalp Borse",
    role: "AI/ML Engineer building agentic systems.",
    primaryCta: "Ask my AI",
    secondaryCta: "View Projects",
    image: "/images/sankalp-portrait.png"
  },
  chat: {
    floatingLabel: "Chat with my AI",
    title: "Ask My AI",
    welcome:
      "Hi, I am Sankalp's AI agent. I can talk with you behalf of Sankalp.",
    fallback: "I am very sorry this feature is currently in building stage.",
    placeholder: "Ask about projects, skills, or experience..."
  },
  sections: {
    projects: {
      label: "Projects",
      title: "AI systems",
      description:
        "These are projects across agentic support systems, retrieval, reinforcement learning, model compression, and multimodal analysis."
    },
    skills: {
      label: "Capability Stack",
      title: "Detailed technical skills.",
      description:
        "The stack covers model development, data engineering, deployment, frameworks, and the fundamentals needed to build reliable ML products."
    },
    about: {
      label: "About",
      title: "Hello and Welcome",
      description:
        "Thanks for visiting my portfolio. We are living in one of the most interesting times in human history. AI is becoming a part of our everyday lives and is changing the way we learn, work, and create. The future ahead will be very different, and I believe AI will play a major role in shaping it. Human curiosity has always pushed us to build new things and solve difficult problems. That same curiosity is what drives me. I want to contribute to building this future and be part of the people creating the next generation of AI. I enjoy learning how AI works, exploring new ideas, and building projects that help me understand this field better. There is still so much to discover, and I am excited to keep learning and growing with it.",
      resumeLabel: "View Resume",
      resumeHref:
        "https://drive.google.com/file/d/1B7EPSxxkcX4ohtcmBEd5ZsU_m7ezpvmv/view?usp=sharing"
    },
    contact: {
      label: "Contact",
      title: "Connect with me, we can learn, explore and build together.",
      description:
        "Use any direct link below to reach me or review my work"
    }
  },
  profile: {
    location: "Nashik, Maharashtra",
    focus: "Applied Machine Learning, LLMs, Transformers, Agentic AI",
    workingStyle:
      "Start Building, do research build again keep repeating.",
    languages: "English, German, Hindi, Marathi",
    education: [
      {
        school: "Vellore Institute of Technology, Vellore",
        degree: "M.Tech Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
        period: "2025 - 2027",
        note: "Currently pursuing"
      },
      {
        school: "K.K. Wagh Institute of Engineering and Research, Nashik",
        degree: "B.E Artificial Intelligence and Data Science",
        period: "2021 - 2025",
        note: "Completed"
      }
    ]
  },
  contact: {
    email: "sankalp1borse@gmail.com",
    links: [
      {
        label: "Email",
        value: "sankalp1borse@gmail.com",
        href: "mailto:sankalp1borse@gmail.com"
      },
      {
        label: "GitHub",
        value: "github.com/SankalpBorse",
        href: "https://github.com/SankalpBorse"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/sankalp-borse",
        href: "https://www.linkedin.com/in/sankalp-borse-205032255"
      },
      {
        label: "LeetCode",
        value: "leetcode.com/u/Sankalp_",
        href: "https://leetcode.com/u/Sankalp_/"
      }
    ],
  },
  projects: [
    {
      title: "Strategy-Based Emotional Support Agent",
      tag: "Main Project",
      href: "https://github.com/SankalpBorse/Strategy-Based-Emotional-Support-Agent",
      featured: true,
      techStack: ["DistilBERT", "LLM APIs", "RAI", "Python", "Pytorch", "Transformers"],
      summary:
        "A strategy centric conversational Agent. That provides emotional support to the user through strategy focused communication.",
      details:
        "The system models emotional support as a decision-making process. It separates perception, session tracking, strategy prediction, response generation, privacy filtering, fairness monitoring, explainability, and safety governance so support conversations are more interpretable and controlled. User Input is combined with context, session state and user's emotion lable and this entire vector is feeded to a distil BERT Classifier that outputs one of the strategies (Advisement, Open Question, Interpretation..etc) This Strategy along with specified prompt along with context is provided to a LLM to generate a appropriate response."
    },
    {
      title: "RAG-Based Smart Kitchen Assistant",
      tag: "Major Project",
      href: "https://github.com/SankalpBorse/Rag-Based-Smart-Kitchen-Assistant",
      featured: true,
      techStack: ["FastAPI", "ChromaDB", "SQLite", "Gemini", "Groq", "Whisper"],
      summary:
        "A stateful, voice-enabled cooking assistant with pantry-aware recipe retrieval and real-time cooking guidance.",
      details:
        "The assistant can Retrieve recipies from a RAG Database (specificaly created for cooking recipies through online datasets). Assistant can provide step by step guidance to the user through voice in the creation process. Its keeps track of pantry, user preferances and user's food related allegies. It can customize the recipies based on user preferances and Allergies."
    },
    {
      title: "AI Agent Plays Snake Game",
      tag: "Deep RL",
      href: "https://github.com/SankalpBorse/AI-Agent-Plays-Snake-Game",
      featured: false,
      techStack: ["Python", "PyTorch", "Pygame", "DQN", "RL"],
      summary:
        "A Deep Q-Learning agent trained to play Snake Game Autonomously",
      details:
        "The project uses replay memory, Bellman optimization, exploration-to-exploitation learning, reward shaping, and multiple play modes to show how an agent learns spatial strategy through trial and error. And learns to play in a contrrolled environment."
    },
    {
      title: "Self-Pruning Neural Network",
      tag: "Model Compression",
      href: "https://github.com/SankalpBorse/Self-Pruning-Neural-Network",
      featured: false,
      techStack: ["PyTorch", "CIFAR-10", "Gating", "Sparsity", "Jupyter Notebook"],
      summary:
        "Applied a differentiable gating mechanism to a ANN that lets a neural network prune weak connections during training.",
      details:
        "Each weight is paired with a learnable gate score. A sparsity penalty pushes unnecessary gates toward zero, producing compact models while preserving accuracy across CIFAR-10 experiments."
    },
    {
      title: "Real-Time Human Behavior Analysis",
      tag: "Multimodal AI",
      href: "https://github.com/SankalpBorse/Real-Time-Human-Behavior-Analysis-System-",
      featured: false,
      techStack: ["FastAPI", "MediaPipe", "FER", "OpenCV"],
      summary:
        "A webcam-based dashboard for live cognitive state estimation from emotion, gaze, iris, and pose signals.",
      details:
        "The system streams browser frames to FastAPI, runs open-source models, computes TESI over a rolling window, and displays emotion, gaze, posture, cognitive state, and history in real time."
    },
    {
      title: "AutoInsight — Autonomous Data Analytics Agent",
      tag: "AI Agent",
      href: "https://github.com/SankalpBorse/AutoInsight---A-Data-Analytics-Agent",
      featured: true,
      techStack: ["Python", "LangGraph", "Groq", "Pandas", "Plotly", "Pydantic", "Scikit-learn"],
      summary: "Drop a dataset and a plain-English question — AutoInsight runs a full analysis pipeline autonomously. Profiles, cleans, analyses, visualises, and writes business insights end-to-end.",
      details: "AutoInsight is a LangGraph-orchestrated agentic pipeline that takes any tabular dataset and a natural language prompt as input and produces a complete data analysis report without manual configuration. An LLM acts as a stateful decision-maker at each stage — choosing the right cleaning strategy, analytics actions, chart types, and insight narrative for the specific dataset and question. The profiler assigns semantic roles (measures, dimensions, datetimes, identifiers) to every column in a single pass, and all downstream stages read from those roles rather than hardcoded column names, making the system fully generalizable across domains. Deterministic Python handles all statistical computation — correlations, IQR outlier detection, KMeans clustering, IsolationForest anomaly detection, and RandomForest regression — while the LLM is used exclusively for routing decisions and writing business-level narratives, ensuring results are numerically exact and reproducible. Every LLM prompt and response is logged verbatim for full auditability."
    }
  ],
  skillGroups: [
    {
      title: "Programming & Core CS",
      note: "Core Computer Science Subjects",
      skills: ["Python", "SQL", "C/C++", "Java", "OOPs", "DSA", "Operating Systems", "Computer Networks"]
    },
    {
      title: "AI / ML",
      note: "Training, Modeling, language systems, agents, retrieval, and evaluation.",
      skills: [
        "Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "Deep Learning",
        "ANN",
        "CNN",
        "RNN",
        "NLP",
        "Agentic AI",
        "LLM",
        "RAG",
        "Prompt Engineering",
        "Fine-tuning",
        "Model Evaluation"
      ]
    },
    {
      title: "Data Engineering",
      note: "Data preparation, validation, feature design, and pipeline thinking.",
      skills: ["ETL/ELT", "Data Modeling", "Feature Engineering", "Data Cleaning", "Data Validation"]
    },
    {
      title: "MLOps & Deployment",
      note: "Interfaces, packaging, monitoring basics, and deployment workflows.",
      skills: ["FastAPI", "Docker", "AWS", "API Integration", "Model Deployment", "Model Versioning", "Monitoring Basics", "Git", "Linux", "Jupyter"]
    },
    {
      title: "Frameworks & Libraries",
      note: "Practical libraries used in building AI/ML Applications.",
      skills: [
        "LangGraph",
        "HuggingFace",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
        "Matplotlib",
        "Seaborn",
        "Streamlit"
      ]
    }
  ],
  backgroundTerms: [
    "Transformer", "Attention", "Self-Attention", "Cross-Attention", "QK^T", "softmax(QK^T / sqrt(d_k))",
    "Embedding", "Token", "Tokenizer", "BPE", "WordPiece", "Context Window", "KV Cache", "Decoder", "Encoder",
    "Feed Forward", "LayerNorm", "Residual", "Multi-Head", "Positional Encoding", "RoPE", "ALiBi", "Logits",
    "P(token | context)", "Temperature", "Top-k", "Top-p", "Beam Search", "Greedy Decode", "Sampling",
    "Loss", "Cross Entropy", "L = -sum y log p", "Perplexity", "Gradient", "dL/dtheta", "Backpropagation",
    "SGD", "AdamW", "Learning Rate", "Weight Decay", "Dropout", "BatchNorm", "Activation", "ReLU", "GELU",
    "Sigmoid", "Tanh", "CNN", "RNN", "LSTM", "GRU", "ANN", "DQN", "Q(s,a)", "Bellman Equation",
    "r + gamma max Q", "Replay Buffer", "Policy", "Value Function", "Reward", "Exploration", "Exploitation",
    "Epsilon Greedy", "Markov State", "Agent", "Environment", "State", "Action", "RAG", "Retriever",
    "Generator", "Vector DB", "ChromaDB", "FAISS", "Embedding Space", "Cosine Similarity", "kNN", "Chunking",
    "Reranker", "Prompt", "System Prompt", "Tool Calling", "Function Calling", "LangGraph", "Memory",
    "Planner", "Critic", "Writer", "Safety Layer", "Privacy Filter", "PII Masking", "Fairness Monitor",
    "Explainability", "Attribution", "Saliency", "Integrated Gradients", "Responsible AI", "Guardrails",
    "Fine-tuning", "LoRA", "QLoRA", "Adapter", "Distillation", "DistilBERT", "BERT", "LLM Router",
    "Latency", "Throughput", "Monitoring", "Model Drift", "Feature Drift", "MLOps", "FastAPI", "Docker",
    "AWS", "SQLite", "ETL", "ELT", "Feature Store", "Data Validation", "Pandas", "NumPy", "PyTorch",
    "TensorFlow", "OpenCV", "MediaPipe", "FER", "SSE", "WebRTC", "Whisper", "TTS", "STT", "TESI",
    "Entropy", "H(X)", "KL Divergence", "D_KL(P || Q)", "Precision", "Recall", "F1", "ROC-AUC",
    "Confusion Matrix", "Train", "Validate", "Test", "Inference", "Batch", "Epoch", "Checkpoint",
    "Sparsity", "Pruning", "Gate Score", "sigmoid(s)", "lambda * ||g||_1", "CIFAR-10", "State Machine"
  ]
};

export type SiteContent = typeof siteContent;
