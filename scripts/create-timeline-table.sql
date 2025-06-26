-- Create timeline table
CREATE TABLE timeline (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    year TEXT NOT NULL,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('work', 'education', 'leadership')),
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    technologies TEXT[] DEFAULT '{}',
    achievements TEXT[] DEFAULT '{}',
    status TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index on order_index for sorting
CREATE INDEX idx_timeline_order ON timeline(order_index);

-- Insert initial timeline data
INSERT INTO timeline (year, title, type, description, location, technologies, achievements, status, order_index) VALUES 
('2025', 'Full-Stack Developer at Gardostech', 'work', 'Leading full-stack development for Procusale, a procurement management platform. Built custom web crawlers and integrated Firebase Auth with Firestore for real-time data flow.', 'İzmir, Türkiye', ARRAY['Next.js', 'Firebase', 'Node.js', 'Puppeteer'], NULL, NULL, 1),
('2023-2025', 'Full-Stack Developer - İztech Software Society', 'work', 'Managing development of 3+ software projects including digital membership systems and event management tools, streamlining operations for the university community.', 'Urla, İzmir', ARRAY['Web Development', 'Project Management', 'Community Tools'], NULL, NULL, 2),
('2022-Present', 'Vice President - İYTE Software Society', 'leadership', 'Leading operations across multiple teams, achieving 105% increase in participation and 30% rise in active member engagement through 15+ annual events.', 'Urla, İzmir', NULL, ARRAY['105% increase in team participation', '15+ events organized', '30% rise in member engagement'], NULL, 3),
('2021-2023', 'Lead Developer/Game Designer at Neutron Games', 'work', 'Directed production of 8+ game prototypes across multiple genres using Unity and C#. Led creative and technical efforts for economy-tycoon, horror, and metaverse projects.', 'Urla, İzmir', ARRAY['Unity', 'C#', 'Game Design', 'Project Leadership'], NULL, NULL, 4),
('2021-2026', 'B.Sc. Computer Engineering', 'education', 'Currently pursuing Bachelor''s degree in Computer Engineering, focusing on software development, computer graphics, and system programming.', 'İzmir Institute of Technology', NULL, NULL, 'Expected 2026', 5);

-- Enable row level security
ALTER TABLE timeline ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (adjust as needed)
CREATE POLICY "Enable all operations for timeline" ON timeline
  FOR ALL
  USING (true)
  WITH CHECK (true); 