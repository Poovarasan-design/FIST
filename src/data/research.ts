export interface ResearchArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusTopics: string[];
  icon: string;
  badge: string;
}

export const researchAreasData: ResearchArea[] = [
  {
    id: 'res-ai',
    title: 'Artificial Intelligence & Neural Models',
    subtitle: 'Foundation models, fine-tuning & autonomous systems',
    description: 'Investigating transformer compression, retrieval-augmented generation (RAG) for academic knowledge bases, and multi-agent coordination frameworks.',
    focusTopics: ['Transformer Pruning', 'Retrieval Augmented Generation', 'Autonomous AI Agents', 'Model Quantization'],
    icon: 'BrainCircuit',
    badge: 'High Impact'
  },
  {
    id: 'res-cv',
    title: 'Computer Vision & Edge Perception',
    subtitle: 'Real-time scene parsing and lightweight on-device inference',
    description: 'Designing low-latency neural architectures for video object recognition, edge surveillance, and non-intrusive student facial biometric authentication.',
    focusTopics: ['Edge Inference', 'Real-Time Object Detection', 'Facial Biometric Anti-Spoofing', 'Video Analytics'],
    icon: 'Eye',
    badge: 'Deployed Lab'
  },
  {
    id: 'res-vr',
    title: 'Virtual & Immersive Spatial Computing',
    subtitle: 'Next-generation educational simulations and 3D interaction',
    description: 'Pioneered by the FIST VR DSA initiative — studying 3D cognitive learning curves, spatial UI ergonomics, and real-time mesh rendering for technical education.',
    focusTopics: ['Spatial Pedagogical Modeling', 'OpenXR Hand-Tracking Interaction', 'Low-Latency Mesh Rendering', 'WebXR Multi-User Synch'],
    icon: 'Glasses',
    badge: 'Flagship R&D'
  },
  {
    id: 'res-iot',
    title: 'Internet of Things & Embedded Telemetry',
    subtitle: 'Smart laboratory sensor matrices and edge telemetry brokers',
    description: 'Deploying microcontroller sensor grids to capture environmental telemetry, power conservation benchmarks, and automated lab safety monitoring.',
    focusTopics: ['ESP32 Mesh Topologies', 'MQTT Telemetry Protocol', 'Edge Anomaly Detection', 'Energy Conservation'],
    icon: 'Cpu',
    badge: 'Active Prototype'
  },
  {
    id: 'res-cloud',
    title: 'Cloud Systems, Sandboxing & Distributed Systems',
    subtitle: 'Safe multi-tenant code execution and container microservices',
    description: 'Researching containerized process isolation, microVM sandboxing for automated code judges, and auto-scaling distributed compute clusters.',
    focusTopics: ['Sandboxed Execution (cgroups)', 'Distributed Task Scheduling', 'Microservices Telemetry', 'Zero-Trust Networks'],
    icon: 'Cloud',
    badge: 'Systems Lab'
  },
  {
    id: 'res-data',
    title: 'Data Analytics & Predictive Intelligence',
    subtitle: 'Pattern discovery, statistical modeling, and data pipelines',
    description: 'Transforming unstructured institutional and societal datasets into actionable predictive models for student performance tracking and curriculum analytics.',
    focusTopics: ['Predictive Academic Modeling', 'Time-Series Analysis', 'Big Data Streaming', 'Explainable Data Insights'],
    icon: 'BarChart3',
    badge: 'Analytical'
  }
];
