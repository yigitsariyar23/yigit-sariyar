-- Create enums for category and type
CREATE TYPE interest_category AS ENUM (
    'Technical',
    'Social'
);

CREATE TYPE interest_type AS ENUM (
    'Creative Technology',
    'Arts & Culture',
    'Emerging Tech',
    'Design & Psychology',
    'Creative Arts',
    'Philosophy & Ethics',
    'Cultural Studies'
);

-- Create interests table
CREATE TABLE IF NOT EXISTS interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    category interest_category NOT NULL,
    type interest_type NOT NULL,
    tags JSONB NOT NULL DEFAULT '[]',
    icon VARCHAR(100) NOT NULL,
    color VARCHAR(255) NOT NULL,
    featured BOOLEAN DEFAULT FALSE,
    content TEXT, -- Long-form content for individual interest pages
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_interests_slug ON interests(slug);
CREATE INDEX IF NOT EXISTS idx_interests_category ON interests(category);
CREATE INDEX IF NOT EXISTS idx_interests_type ON interests(type);
CREATE INDEX IF NOT EXISTS idx_interests_featured ON interests(featured);
CREATE INDEX IF NOT EXISTS idx_interests_created_at ON interests(created_at);

-- Create a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_interests_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_interests_updated_at
    BEFORE UPDATE ON interests
    FOR EACH ROW
    EXECUTE FUNCTION update_interests_updated_at_column();

-- Insert sample interest data (based on your existing hardcoded data)
INSERT INTO interests (
    title, slug, excerpt, category, type, tags, icon, color, featured, content
) VALUES 
(
    'Game Development & Interactive Media',
    'game-development',
    'Unity development, game design principles, and creating immersive interactive experiences.',
    'Technical'::interest_category,
    'Creative Technology'::interest_type,
    '["Unity", "C#", "Game Design", "Interactive Design"]',
    'Gamepad2',
    'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    true,
    'Game development has been a passion of mine since I first discovered Unity. I love creating interactive experiences that blend technology with creativity. My work focuses on game design principles, user experience in gaming, and the technical challenges of real-time rendering and gameplay mechanics.'
),
(
    'Cinema & Visual Storytelling',
    'cinema-storytelling',
    'How film techniques and narrative structures influence my approach to software design and user experience.',
    'Social'::interest_category,
    'Arts & Culture'::interest_type,
    '["Film Analysis", "Cinematography", "Visual Storytelling", "Media"]',
    'Film',
    'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    false,
    'Cinema has taught me invaluable lessons about visual communication and storytelling. I apply cinematic principles to user interface design, thinking about how users experience software as a narrative journey with pacing, visual hierarchy, and emotional engagement.'
),
(
    'AI & Future Technologies',
    'ai-future-tech',
    'Exploring practical AI applications and the intersection of artificial intelligence with creative processes.',
    'Technical'::interest_category,
    'Emerging Tech'::interest_type,
    '["AI Integration", "Machine Learning", "Automation", "Future Tech"]',
    'Code',
    'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    false,
    'I''m fascinated by how AI can augment human creativity rather than replace it. I explore practical applications of machine learning in software development, automation tools, and how emerging technologies can solve real-world problems while maintaining human-centered design principles.'
),
(
    'Literature & Creative Writing',
    'literature-writing',
    'How storytelling techniques from literature enhance technical documentation and user experience design.',
    'Social'::interest_category,
    'Arts & Culture'::interest_type,
    '["Literature", "Creative Writing", "Storytelling", "Communication"]',
    'BookOpen',
    'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    false,
    'Literature has shaped my approach to communication and documentation. I believe that clear, engaging writing is essential in technology. Whether it''s technical documentation, user guides, or explaining complex concepts, storytelling techniques make information more accessible and memorable.'
),
(
    'UI/UX Design & Human Psychology',
    'ux-psychology',
    'Understanding human behavior and psychology to create more intuitive and engaging user interfaces.',
    'Technical'::interest_category,
    'Design & Psychology'::interest_type,
    '["UI/UX", "Psychology", "Human Behavior", "Design Thinking"]',
    'Palette',
    'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    false,
    'I''m deeply interested in the intersection of psychology and design. Understanding cognitive load, user behavior patterns, and emotional responses helps me create interfaces that feel natural and intuitive. I study how users think and make decisions to design better digital experiences.'
),
(
    'Music Production & Audio Engineering',
    'music-audio',
    'Exploring sound design, music production, and how audio elements enhance digital experiences.',
    'Social'::interest_category,
    'Creative Arts'::interest_type,
    '["Music Production", "Audio Engineering", "Sound Design", "Digital Arts"]',
    'Music',
    'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
    false,
    'Music production has taught me about layering, timing, and creating emotional impact through sound. I apply these principles to user interface sound design and think about how audio can enhance user experiences without being intrusive.'
),
(
    'Philosophy & Ethics in Technology',
    'philosophy-ethics',
    'Examining the philosophical implications of technology and the ethical considerations in software development.',
    'Social'::interest_category,
    'Philosophy & Ethics'::interest_type,
    '["Ethics", "Philosophy", "Technology Impact", "Society"]',
    'Coffee',
    'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
    false,
    'I believe technology should serve humanity thoughtfully. I''m interested in the ethical implications of the software we build, privacy considerations, accessibility, and how technology shapes society. Philosophy helps me think critically about the impact of my work.'
),
(
    'Cultural Studies & Global Perspectives',
    'cultural-studies',
    'Understanding different cultures and perspectives to build more inclusive and globally-minded software solutions.',
    'Social'::interest_category,
    'Cultural Studies'::interest_type,
    '["Culture", "Global Perspectives", "Inclusion", "Diversity"]',
    'Globe',
    'bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
    false,
    'Building software for global audiences requires understanding diverse cultural contexts and perspectives. I study how different cultures interact with technology and strive to create inclusive experiences that work well across different cultural backgrounds and accessibility needs.'
)
ON CONFLICT (slug) DO NOTHING; 