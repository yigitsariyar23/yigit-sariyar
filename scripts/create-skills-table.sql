-- Create skills table
CREATE TABLE skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    level TEXT NOT NULL CHECK (level IN ('Rudimentary', 'Intermediate', 'Proficient', 'Expert')),
    technologies TEXT[] NOT NULL DEFAULT '{}',
    color TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index on order_index for sorting
CREATE INDEX idx_skills_order ON skills(order_index);

-- Insert initial skills data
INSERT INTO skills (name, level, technologies, color, order_index) VALUES 
('Game Development', 'Proficient', ARRAY['Unity', 'C#', 'Unreal Engine', 'C++'], 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400', 1),
('Web Development', 'Proficient', ARRAY['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400', 2),
('System Programming', 'Intermediate', ARRAY['C', 'C++', 'Socket Programming', 'Linux'], 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400', 3),
('Computer Graphics', 'Rudimentary', ARRAY['OpenGL', 'GLSL', 'Python'], 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400', 4),
('Database & Backend', 'Proficient', ARRAY['PostgreSQL', 'Oracle', 'Spring Boot', 'Node.js'], 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400', 5),
('AI & Automation', 'Intermediate', ARRAY['Puppeteer', 'Selenium', 'AI Integration'], 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400', 6);

-- Enable row level security
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (adjust as needed)
CREATE POLICY "Enable all operations for skills" ON skills
  FOR ALL
  USING (true)
  WITH CHECK (true); 