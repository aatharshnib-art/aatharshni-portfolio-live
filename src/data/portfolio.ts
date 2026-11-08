export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
  { id: 'contact', label: 'Contact' },
] as const;

export const NAV_IDS = NAV_ITEMS.map((item) => item.id);

// Placeholders: replace with final contact details.
export const CONTACT = {
  email: 'your.email@example.com',
  emailHref: 'mailto:your.email@example.com',
  linkedinHref: '#',
  githubHref: '#',
};

export const HERO_ROLES = [
  'Bioinformatics & Data Science Undergraduate',
  'Research Enthusiast',
  'Multidisciplinary Thinker',
  'Aspiring Entrepreneur',
];

export const DIMENSIONS = [
  'Research and Innovation',
  'Communication and Leadership',
  'Creativity and Independent Thinking',
  'Entrepreneurship and Business Ambition',
];

export interface Project {
  id: string;
  number: string;
  categories: string[];
  title: string;
  summary: string;
  details: string[];
  tags: string[];
  role?: string;
  framework?: string[];
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'agrigene',
    number: '01',
    categories: ['Bioinformatics', 'Computational Research', 'Agricultural Innovation'],
    title:
      'Evidence-Based Decision Support Platform for Prioritising Disease-Resistance Gene Candidates in Wild and Cultivated Millets Using Multiple Sequence Alignment.',
    summary:
      'An undergraduate research and development project exploring computational approaches to comparing candidate gene sequences in wild and cultivated millets.',
    details: [
      'The platform focuses on nucleotide FASTA validation, Multiple Sequence Alignment, conservation analysis, sequence variation and pairwise identity.',
      'Presented as an undergraduate project and development initiative. It is not a validated production platform, and its sequence scores do not predict drought tolerance, disease resistance or breeding success.',
    ],
    tags: [
      'Python',
      'FastAPI',
      'Biopython',
      'Clustal Omega',
      'React',
      'TypeScript',
      'Multiple Sequence Alignment',
    ],
    role: 'Project Lead and primary driver of the project\u2019s conceptual development, research direction, analytical framework and overall project work. I led a five-member team and coordinated its preparation and collective presentation. Team members contributed to scheduled meetings, presentation preparation and the final delivery.',
  },
  {
    id: 'biovalue',
    number: '02',
    categories: ['Rural Innovation', 'Sustainability', 'Entrepreneurship'],
    title: 'BIOVALUE 2047',
    summary:
      'A rural-development concept exploring how villages can retain and create greater economic value through agricultural resources, local capabilities and stronger value-chain connections.',
    details: [
      'Focuses on identifying resources, discovering value-chain gaps, connecting stakeholders, testing practical solutions and measuring outcomes.',
      'Presented at the Viksit Bharat \u2013 Model Village Challenge 2047 national-level event. It is a concept under exploration; no field pilot or measurable rural impact is claimed.',
    ],
    tags: ['Value Chains', 'Rural Development', 'Stakeholder Connection'],
    framework: ['Map', 'Find', 'Connect', 'Test', 'Measure'],
  },
  {
    id: 'dna-sonification',
    number: '03',
    categories: ['Computational Biology', 'Creative Technology'],
    title: 'DNA Sonification',
    summary:
      'An interdisciplinary exploration of translating DNA sequence information into musical notes and frequencies to make sequence patterns and differences perceptible through sound.',
    details: [
      'Translates DNA sequence information into musical notes and frequencies, so that patterns and differences can be heard as well as seen.',
    ],
    tags: ['Sequence-to-Note Mapping', 'Frequency Patterns', 'Sound Design'],
    note: 'Presented at the GENE.AI 2026 Summit, a DST\u2013TIDE sponsored event.',
  },
];

export type AchievementType =
  | 'Presentation'
  | 'Participation'
  | 'Award'
  | 'Course'
  | 'Role'
  | 'Workshop'
  | 'Publication';

export interface AchievementItem {
  text: string;
  type: AchievementType;
}

export interface AchievementGroup {
  title: string;
  items: AchievementItem[];
}

export const ACHIEVEMENTS: AchievementGroup[] = [
  {
    title: 'Research and Innovation',
    items: [
      { text: 'Presented DNA Sonification at GENE.AI 2026 Summit.', type: 'Presentation' },
      { text: 'Presented AgriGene Insight at BioBlitz \u201826.', type: 'Presentation' },
      {
        text: 'Contributed a chapter on AgriGene Insight to the proceedings of the National Intercollege Symposium on Next Generation Sequencing.',
        type: 'Publication',
      },
    ],
  },
  {
    title: 'National-Level Participation',
    items: [
      {
        text: 'Participated in the Viksit Bharat \u2013 Model Village Challenge 2047 with BIOVALUE 2047.',
        type: 'Participation',
      },
      {
        text: 'Presented an innovation concept and received feedback from the judging panel.',
        type: 'Participation',
      },
    ],
  },
  {
    title: 'Academic Recognition',
    items: [
      { text: 'NPTEL Silver Medal \u2014 Internet of Things.', type: 'Award' },
      {
        text: 'NPTEL courses in Computational Genomics, Epigenetics and Next Generation Sequencing.',
        type: 'Course',
      },
    ],
  },
  {
    title: 'Institutional Involvement',
    items: [
      {
        text: 'IIC Student Ambassador at Sathyabama Institute of Science and Technology.',
        type: 'Role',
      },
    ],
  },
  {
    title: 'Academic Exposure',
    items: [
      { text: 'Flow Cytometry workshop at IIT Madras.', type: 'Workshop' },
      { text: 'Data Science workshop at IIT Madras.', type: 'Workshop' },
      { text: 'Quantum-Driven Drug Discovery workshop at Sathyabama.', type: 'Workshop' },
    ],
  },
];

export interface LeadershipGroup {
  title: string;
  items: string[];
}

export const LEADERSHIP_GROUPS: LeadershipGroup[] = [
  {
    title: 'Public Speaking and Communication',
    items: [
      'Anchoring and hosting institutional events.',
      'Comparing programmes and events.',
      'Delivering academic seminars, scientific presentations and speeches.',
      'Communicating ideas with clarity, confidence and conviction.',
      'Engaging with and motivating fellow students and juniors.',
    ],
  },
  {
    title: 'Leadership and Coordination',
    items: [
      'Leading a five-member team for AgriGene Insight.',
      'Taking initiative in project development and team preparation.',
      'Participating in event organisation and backstage coordination.',
      'Managing responsibilities across academic and extracurricular activities.',
    ],
  },
  {
    title: 'Institutional Contribution',
    items: [
      'IIC Student Ambassador.',
      'Student engagement and institutional activities.',
      'Supporting events and encouraging participation.',
    ],
  },
];

export interface SkillGroupData {
  title: string;
  items: string[];
}

export const SKILL_GROUPS: {
  programming: SkillGroupData;
  tools: SkillGroupData;
  digital: SkillGroupData;
  strengths: SkillGroupData;
} = {
  programming: {
    title: 'Programming and Data',
    items: [
      'Python',
      'C',
      'Bioinformatics',
      'Biopython',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Biological Data Analysis',
      'Sequence Analysis',
      'Genomics',
    ],
  },
  tools: {
    title: 'Tools and Technologies',
    items: [
      'Clustal Omega',
      'Jupyter Notebook',
      'Google Colab',
      'GitHub',
      'VS Code',
      'Cytoscape',
      'Microsoft Excel',
      'PowerPoint',
    ],
  },
  digital: {
    title: 'Digital and Creative',
    items: [
      'Website Design',
      'Digital Content Creation',
      'Digital Marketing Fundamentals',
      'E-commerce Knowledge',
      'Online Business Exploration',
    ],
  },
  strengths: {
    title: 'Professional Strengths',
    items: [
      'Public Speaking',
      'Communication',
      'Leadership',
      'Event Management',
      'Presentation Skills',
      'Research',
      'Analytical Thinking',
      'Problem-Solving',
    ],
  },
};

export const INTERESTS = [
  'Computational Biology',
  'Neuroscience',
  'Neurogenomics',
  'Artificial Intelligence',
  'Technology',
  'Genomics',
  'Research and Innovation',
  'Business',
  'Entrepreneurship',
  'Interdisciplinary Learning',
];
