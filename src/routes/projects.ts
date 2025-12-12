import express, { Router, Request, Response } from 'express';
import { projects } from '../data/projects';

const router: Router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home page
 *     description: Returns the home page with featured projects
 *     responses:
 *       200:
 *         description: Home page rendered successfully
 */
router.get('/', (req: Request, res: Response) => {
  // Define featured projects for home page
  const featuredProjects = projects.filter(p => 
    ['stage-4-notification-system', 'stage-8-wallet-service', 'stage-2-country-currency'].includes(p.id)
  );
  
  res.render('index', {
    title: 'Backend Developer Portfolio',
    activePage: 'home',
    projects: projects, // Pass all projects to the view
    featuredProjects: featuredProjects, // Pass featured projects
    stats: {
      totalProjects: projects.length,
      stages: [...new Set(projects.map(p => p.stage))].length,
      technologies: [...new Set(projects.flatMap(p => p.technologies))].length
    }
  });
});

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Projects page
 *     description: Returns all projects
 *     responses:
 *       200:
 *         description: Projects page rendered successfully
 */
router.get('/projects', (req: Request, res: Response) => {
  res.render('projects', {
    title: 'All Projects',
    activePage: 'projects',
    projects: projects,
    stats: {
      totalProjects: projects.length,
      stages: [...new Set(projects.map(p => p.stage))].length,
      technologies: [...new Set(projects.flatMap(p => p.technologies))].length
    }
  });
});

/**
 * @swagger
 * /about:
 *   get:
 *     summary: About page
 *     description: Returns about page with developer information
 *     responses:
 *       200:
 *         description: About page rendered successfully
 */
router.get('/about', (req: Request, res: Response) => {
  res.render('about', {
    title: 'About Me',
    activePage: 'about',
    skills: [
      'Node.js', 'TypeScript', 'Express.js', 'REST APIs',
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
      'RabbitMQ', 'Kafka', 'Docker', 'Microservices',
      'JWT Authentication', 'OAuth', 'Paystack Integration',
      'AI Agents', 'Mastra Framework', 'CI/CD'
    ],
    experience: 'HNG Backend Internship - Completed 8+ stages'
  });
});

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Contact page
 *     description: Returns contact form page
 *     responses:
 *       200:
 *         description: Contact page rendered successfully
 */
router.get('/contact', (req: Request, res: Response) => {
  res.render('contact', {
    title: 'Contact Me',
    activePage: 'contact',
    successMessage: req.query.success === 'true' ? 'Message sent successfully!' : null,
    errorMessage: req.query.error ? 'Failed to send message. Please try again.' : null
  });
});

/**
 * @swagger
 * /api-docs-page:
 *   get:
 *     summary: API Documentation page
 *     description: Returns API documentation page
 *     responses:
 *       200:
 *         description: API docs page rendered successfully
 */
router.get('/api-docs-page', (req: Request, res: Response) => {
  res.render('api-docs', {
    title: 'API Documentation',
    activePage: 'api-docs',
    projects: projects
  });
});

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Submit contact form
 *     description: Processes contact form submission
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       302:
 *         description: Redirects to contact page
 *       400:
 *         description: Invalid input
 */
router.post('/contact', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address'
    });
  }
  
  console.log('Contact Form Submission:', { name, email, subject, message });
  res.redirect('/contact?success=true');
});

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     description: Returns a list of all projects with optional filtering
 *     parameters:
 *       - in: query
 *         name: stage
 *         schema:
 *           type: string
 *         description: Filter by project stage
 *       - in: query
 *         name: technology
 *         schema:
 *           type: string
 *         description: Filter by technology
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Project'
 */
router.get('/api/projects', (req: Request, res: Response) => {
  const { stage, technology } = req.query;
  
  let filteredProjects = projects;
  
  if (stage) {
    filteredProjects = filteredProjects.filter(p => 
      p.stage.toLowerCase() === (stage as string).toLowerCase()
    );
  }
  
  if (technology) {
    filteredProjects = filteredProjects.filter(p => 
      p.technologies.some(t => 
        t.toLowerCase().includes((technology as string).toLowerCase())
      )
    );
  }
  
  res.json({
    success: true,
    count: filteredProjects.length,
    data: filteredProjects
  });
});

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get project by ID
 *     description: Returns a single project by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */
router.get('/api/projects/:id', (req: Request, res: Response) => {
  const project = projects.find(p => p.id === req.params.id);
  
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  
  res.json({
    success: true,
    data: project
  });
});

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Project detail page
 *     description: Returns project detail page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project detail page rendered successfully
 *       404:
 *         description: Project not found
 */
router.get('/projects/:id', (req: Request, res: Response) => {
  const project = projects.find(p => p.id === req.params.id);
  
  if (!project) {
    return res.status(404).render('404', {
      title: 'Project Not Found',
      activePage: '',
      message: 'The project you are looking for does not exist.'
    });
  }
  
  res.render('project-detail', {
    title: project.title,
    activePage: '',
    project: project
  });
});

export default router;