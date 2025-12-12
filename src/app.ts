import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import projectRoutes from './routes/projects';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Developer Portfolio API',
      version: '1.0.0',
      description: 'API documentation for backend portfolio projects',
      contact: {
        name: 'Backend Developer',
        email: 'your.email@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      },
      {
        url: 'https://your-portfolio.railway.app',
        description: 'Production server'
      }
    ],
    components: {
      schemas: {
        Project: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the project'
            },
            title: {
              type: 'string',
              description: 'Project title'
            },
            stage: {
              type: 'string',
              description: 'HNG internship stage'
            },
            description: {
              type: 'string',
              description: 'Project description'
            },
            technologies: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Technologies used'
            },
            features: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Key features'
            },
            githubUrl: {
              type: 'string',
              description: 'GitHub repository URL'
            },
            liveUrl: {
              type: 'string',
              description: 'Live demo URL'
            },
            apiDocs: {
              type: 'string',
              description: 'API documentation URL'
            },
            blogPost: {
              type: 'string',
              description: 'Blog post URL'
            },
            challenges: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Technical challenges faced'
            },
            learnings: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Key learnings'
            },
            keyEndpoints: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Key API endpoints'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.ts'] // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Logging
app.use(morgan('dev'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/', projectRoutes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    activePage: '',
    message: 'The page you are looking for does not exist.'
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: 'Error',
    activePage: '',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;