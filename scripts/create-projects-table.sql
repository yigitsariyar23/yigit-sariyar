-- Create enums for category and status
CREATE TYPE project_category AS ENUM (
    'Web Application',
    'Game Development', 
    'System Programming',
    'Collaboration'
);

CREATE TYPE project_status AS ENUM (
    'In Progress',
    'Completed',
    'Planning',
    'On Hold',
    'Cancelled'
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    category project_category NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT NOT NULL,
    image VARCHAR(500),
    tags JSONB NOT NULL DEFAULT '[]',
    status project_status NOT NULL DEFAULT 'In Progress',
    project_date DATE NOT NULL, -- Changed from year to store month/year
    duration VARCHAR(100) NOT NULL,
    team VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    challenges JSONB NOT NULL DEFAULT '[]',
    solutions JSONB NOT NULL DEFAULT '[]',
    tech_stack JSONB NOT NULL DEFAULT '{}',
    features JSONB NOT NULL DEFAULT '[]',
    screenshots JSONB NOT NULL DEFAULT '[]',
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    slug VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_date ON projects(project_date); -- Updated index name
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);

-- Create a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample project data (based on your existing hardcoded data)
INSERT INTO projects (
    title, category, description, long_description, image, tags, status, project_date, 
    duration, team, role, challenges, solutions, tech_stack, features, 
    screenshots, slug
) VALUES (
    'AGMS - Automated Graduation Management System',
    'Web Application'::project_category,
    'A comprehensive role-based web application designed to streamline graduation workflows for educational institutions.',
    'AGMS is a full-stack web application that automates and manages the complex graduation process for universities. The system handles multiple user roles including students, advisors, department heads, and administrators, each with specific permissions and workflows. Built with modern technologies and deployed on cloud infrastructure for scalability and reliability.',
    '/placeholder.svg?height=400&width=800',
    '["Next.js", "Spring Boot", "PostgreSQL", "JWT", "Azure", "Vercel", "TypeScript", "Java"]',
    'Completed'::project_status,
    '2024-01-01'::DATE, -- Changed from '2024' to a proper date
    '4 months',
    '3 developers',
    'Full-Stack Developer & Project Lead',
    '["Complex role-based permission system with multiple user types", "Real-time notifications and status updates across the system", "Integration with existing university database systems", "Scalable architecture to handle thousands of concurrent users"]',
    '["Implemented JWT-based authentication with role-based access control", "Used WebSocket connections for real-time updates and notifications", "Created API adapters for seamless integration with legacy systems", "Deployed on Azure with auto-scaling capabilities and Vercel for frontend"]',
    '{"frontend": ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"], "backend": ["Spring Boot", "Java", "JWT Authentication", "RESTful APIs"], "database": ["PostgreSQL", "Redis for caching"], "deployment": ["Azure App Service", "Vercel", "Docker"]}',
    '["Multi-role user management system", "Automated workflow processing", "Real-time notifications", "Document management and approval", "Analytics and reporting dashboard", "Mobile-responsive design"]',
    '["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"]',
    'agms'
) ON CONFLICT (slug) DO NOTHING; 