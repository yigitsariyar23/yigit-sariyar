-- Create enums for contact types
CREATE TYPE contact_type AS ENUM (
    'email',
    'phone',
    'location',
    'social',
    'other'
);

-- Create contact_info table
CREATE TABLE IF NOT EXISTS contact_info (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type contact_type NOT NULL,
    label VARCHAR(100) NOT NULL,
    value VARCHAR(500) NOT NULL,
    url VARCHAR(500),
    icon VARCHAR(50),
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_info_type ON contact_info(type);
CREATE INDEX IF NOT EXISTS idx_contact_info_active ON contact_info(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_info_order ON contact_info(display_order);

-- Create a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_contact_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_info_updated_at
    BEFORE UPDATE ON contact_info
    FOR EACH ROW
    EXECUTE FUNCTION update_contact_updated_at_column();

-- Insert contact information data
INSERT INTO contact_info (type, label, value, url, icon, description, display_order) VALUES 
-- Direct contact information
('email', 'Email', 'yigitsariyar23@gmail.com', 'mailto:yigitsariyar23@gmail.com', 'Mail', 'yigitsariyar23@gmail.com', 1),
('location', 'Location', 'İzmir, Türkiye', null, 'MapPin', 'İzmir, Türkiye', 2),

-- Social media links
('social', 'LinkedIn', 'Professional networking', 'https://linkedin.com/in/yigitsariyar', 'Linkedin', 'Professional networking', 3),
('social', 'GitHub', 'Code repositories and projects', 'https://github.com/yigitsariyar23', 'Github', 'Code repositories and projects', 4),
('social', 'Itch.io', 'Game development and projects', 'https://yigitsariyar.itch.io', 'Gamepad2', 'Game development and projects', 5)
ON CONFLICT DO NOTHING; 