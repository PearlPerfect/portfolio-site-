export interface Project {
  id: string;
  title: string;
  stage: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  apiDocs?: string;
  blogPost?: string;
  challenges: string[];
  learnings: string[];
  keyEndpoints: string[];
}

export const projects: Project[] = [
  {
    id: 'stage-0-profile',
    title: 'Dynamic Profile API',
    stage: 'Stage 0',
    description: 'A RESTful API endpoint that returns profile information with dynamically fetched cat facts from an external API.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'Axios', 'REST API'],
    features: [
      'Dynamic timestamp generation in ISO 8601 format',
      'Integration with Cat Facts API',
      'Error handling for external API failures',
      'CORS support',
      'Environment variable configuration'
    ],
    githubUrl: 'https://github.com/PearlPerfect/hng13-task-zero',
    liveUrl: 'https://hng13-task-zero.fly.dev/me',
    apiDocs: 'https://hng13-task-zero.fly.dev/api-docs/',
    blogPost: 'https://dev.to/yourpost',
    challenges: [
      'Handling external API timeouts gracefully',
      'Ensuring timestamp accuracy across different time zones',
      'Implementing proper error responses'
    ],
    learnings: [
      'Working with external APIs',
      'Handling asynchronous operations',
      'API error handling best practices'
    ],
    keyEndpoints: [
      'GET /me - Returns profile with cat fact'
    ]
  },
  {
    id: 'stage-1-string-analyzer',
    title: 'String Analyzer Service',
    stage: 'Stage 1',
    description: 'A RESTful API service that analyzes strings and stores their computed properties including length, palindrome detection, and character frequency.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'SHA-256'],
    features: [
      'String analysis with multiple properties',
      'Palindrome detection (case-insensitive)',
      'Character frequency mapping',
      'SHA-256 hash generation for unique identification',
      'Advanced filtering with query parameters',
      'Natural language query processing'
    ],
    githubUrl: 'https://github.com/PearlPerfect/string_analyzer',
    liveUrl: 'https://your-stage-1.railway.app',
    apiDocs: 'https://your-stage-1.railway.app/api-docs',
    blogPost: 'https://dev.to/yourpost',
    challenges: [
      'Implementing efficient character frequency counting',
      'Natural language query parsing',
      'Handling duplicate string detection with SHA-256'
    ],
    learnings: [
      'String manipulation algorithms',
      'Hashing for data deduplication',
      'Complex filtering logic implementation'
    ],
    keyEndpoints: [
      'POST /strings - Analyze and store string',
      'GET /strings/:value - Retrieve specific string',
      'GET /strings - List with filters',
      'GET /strings/filter-by-natural-language - NLP filtering',
      'DELETE /strings/:value - Delete string'
    ]
  },
  {
    id: 'stage-2-country-currency',
    title: 'Country Currency & Exchange API',
    stage: 'Stage 2',
    description: 'RESTful API that fetches country data, exchange rates, and computes estimated GDP with MySQL caching.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'MySQL', 'REST Countries API', 'Exchange Rate API'],
    features: [
      'External API integration (Countries & Exchange Rates)',
      'Computed GDP estimation',
      'Database caching for performance',
      'Advanced filtering by region and currency',
      'Sorting by GDP',
      'Image generation for country summary',
      'Update vs Insert logic for data refresh'
    ],
    githubUrl: 'https://github.com/yourusername/stage-2-countries',
    liveUrl: 'https://your-stage-2.railway.app',
    apiDocs: 'https://your-stage-2.railway.app/swagger',
    blogPost: 'https://hashnode.com/yourpost',
    challenges: [
      'Handling countries with multiple currencies',
      'Efficient database update logic',
      'External API error handling',
      'Image generation for data summary'
    ],
    learnings: [
      'Working with multiple external APIs',
      'Database optimization techniques',
      'Data synchronization strategies',
      'Image generation with Node.js'
    ],
    keyEndpoints: [
      'POST /countries/refresh - Fetch and cache countries',
      'GET /countries - List all with filters',
      'GET /countries/:name - Get specific country',
      'DELETE /countries/:name - Delete country',
      'GET /status - System status',
      'GET /countries/image - Summary image'
    ]
  },
  {
    id: 'stage-3-ai-agent',
    title: 'Holiday Reminder AI Agent',
    stage: 'Stage 3',
    description: 'AI agent built with Mastra framework and integrated with Telex.im for automated holiday reminders.',
    technologies: ['Node.js', 'TypeScript', 'Mastra', 'AI Agents', 'A2A Protocol', 'Telex.im'],
    features: [
      'Intelligent holiday reminder system',
      'Natural language processing',
      'Integration with Telex.im platform',
      'A2A protocol implementation',
      'Automated scheduling',
      'User preference management'
    ],
    githubUrl: 'https://github.com/yourusername/stage-3-ai-agent',
    liveUrl: 'https://your-mastra-agent.railway.app',
    blogPost: 'https://medium.com/yourpost',
    challenges: [
      'Understanding A2A protocol specifications',
      'Building intelligent agent logic with Mastra',
      'Handling real-time messaging on Telex.im',
      'Workflow JSON configuration'
    ],
    learnings: [
      'AI agent development',
      'Mastra framework architecture',
      'Real-time communication protocols',
      'Platform integration strategies'
    ],
    keyEndpoints: [
      '/a2a/agent/holidayReminder - Main agent endpoint'
    ]
  },
  {
    id: 'stage-4-notification-system',
    title: 'Distributed Notification System',
    stage: 'Stage 4',
    description: 'Microservices-based notification system with message queues for email and push notifications.',
    technologies: ['Node.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Microservices', 'Docker', 'SendGrid', 'FCM'],
    features: [
      'API Gateway for request routing',
      'User Service for contact management',
      'Email Service with template support',
      'Push Notification Service',
      'Template Service with versioning',
      'Circuit Breaker pattern',
      'Retry mechanism with exponential backoff',
      'Dead Letter Queue for failed messages',
      'Service discovery',
      'Health checks for all services'
    ],
    githubUrl: 'https://github.com/yourusername/stage-4-notifications',
    liveUrl: 'https://your-notification-gateway.railway.app',
    apiDocs: 'https://your-notification-gateway.railway.app/docs',
    blogPost: 'https://dev.to/yourpost',
    challenges: [
      'Implementing circuit breaker pattern',
      'Managing distributed transactions',
      'Service-to-service communication',
      'Message queue configuration and reliability'
    ],
    learnings: [
      'Microservices architecture',
      'Message queue patterns',
      'Distributed system design',
      'Fault tolerance strategies',
      'Team collaboration in distributed systems'
    ],
    keyEndpoints: [
      'POST /api/v1/notifications - Send notification',
      'POST /api/v1/users - Create user',
      'POST /api/v1/email/status - Email status',
      'POST /api/v1/push/status - Push status',
      'GET /health - Service health'
    ]
  },
  {
    id: 'stage-7-auth-api-keys',
    title: 'Authentication & API Key System',
    stage: 'Stage 7',
    description: 'Complete authentication system with JWT for users and API keys for service-to-service access.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'JWT', 'PostgreSQL', 'bcrypt'],
    features: [
      'User signup and login with JWT',
      'API key generation for services',
      'Permission-based access control',
      'API key expiration and revocation',
      'Middleware for dual authentication',
      'Secure password hashing'
    ],
    githubUrl: 'https://github.com/PearlPerfect/auth_and_api_mgt_system',
    liveUrl: 'https://your-stage-7.railway.app',
    apiDocs: 'https://your-stage-7.railway.app/api-docs',
    blogPost: 'https://hashnode.com/yourpost',
    challenges: [
      'Implementing dual authentication strategy',
      'Managing API key permissions',
      'Secure token generation and validation'
    ],
    learnings: [
      'JWT authentication patterns',
      'API key management best practices',
      'Security considerations for APIs',
      'Authorization vs Authentication'
    ],
    keyEndpoints: [
      'POST /auth/signup - User registration',
      'POST /auth/login - User login',
      'POST /keys/create - Generate API key',
      'DELETE /keys/:id - Revoke API key'
    ]
  },
  {
    id: 'stage-8-wallet-service',
    title: 'Wallet Service with Paystack',
    stage: 'Stage 8',
    description: 'Complete wallet system with Paystack integration, Google authentication, and API key support.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'Paystack', 'PostgreSQL', 'Google OAuth', 'JWT'],
    features: [
      'Google OAuth integration',
      'Wallet creation and management',
      'Paystack deposit integration',
      'Webhook handling for payment verification',
      'Wallet-to-wallet transfers',
      'Transaction history',
      'API key system with permissions',
      'API key expiration and rollover',
      'Maximum 5 active keys per user'
    ],
    githubUrl: 'https://github.com/PearlPerfect/wallet-service',
    liveUrl: 'https://your-stage-8.railway.app',
    apiDocs: 'https://your-stage-8.railway.app/swagger',
    blogPost: 'https://medium.com/yourpost',
    challenges: [
      'Paystack webhook signature verification',
      'Idempotent transaction processing',
      'Atomic wallet balance updates',
      'API key permission management'
    ],
    learnings: [
      'Payment gateway integration',
      'Webhook security',
      'Financial transaction handling',
      'OAuth 2.0 implementation',
      'Idempotency in payments'
    ],
    keyEndpoints: [
      'GET /auth/google - Google OAuth',
      'POST /keys/create - Create API key',
      'POST /keys/rollover - Rollover expired key',
      'POST /wallet/deposit - Initialize deposit',
      'POST /wallet/paystack/webhook - Payment webhook',
      'GET /wallet/balance - Check balance',
      'POST /wallet/transfer - Transfer funds',
      'GET /wallet/transactions - Transaction history'
    ]
  },
  {
    id: 'stage-9-portfolio',
    title: 'Backend Developer Portfolio',
    stage: 'Stage 9',
    description: 'A comprehensive portfolio website showcasing all HNG internship projects with detailed documentation and API endpoints.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'EJS', 'CSS3', 'REST API'],
    features: [
      'Responsive design with dark/light theme toggle',
      'Project showcase with detailed information',
      'API documentation for all projects',
      'Contact form with validation',
      'RESTful API endpoints for project data',
      'Mobile-friendly navigation',
      'Smooth animations and transitions'
    ],
    githubUrl: 'https://github.com/yourusername/stage-9-portfolio',
    liveUrl: 'https://your-portfolio.railway.app',
    apiDocs: 'https://your-portfolio.railway.app/api/projects',
    blogPost: 'https://dev.to/yourpost',
    challenges: [
      'Creating a clean and professional UI/UX',
      'Implementing theme toggle functionality',
      'Organizing project data effectively',
      'Making the site responsive across all devices'
    ],
    learnings: [
      'Frontend development with EJS templating',
      'CSS animations and transitions',
      'Responsive web design principles',
      'Full-stack application architecture'
    ],
    keyEndpoints: [
      'GET / - Homepage with projects',
      'GET /projects - All projects page',
      'GET /projects/:id - Project details',
      'GET /api/projects - JSON API for projects',
      'POST /contact - Contact form submission'
    ]
  }
];

// Helper function to get project by stage
export const getProjectsByStage = (stage: string): Project[] => {
  return projects.filter(p => p.stage.toLowerCase() === stage.toLowerCase());
};

// Helper function to get all unique technologies
export const getAllTechnologies = (): string[] => {
  return [...new Set(projects.flatMap(p => p.technologies))];
};

// Helper function to get all stages
export const getAllStages = (): string[] => {
  return [...new Set(projects.map(p => p.stage))];
};