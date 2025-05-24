/*
  # Create posts table for blog functionality

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `content` (text, required)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
      - `author` (text, required)
      - `image_url` (text, optional)
  
  2. Security
    - Enable RLS on `posts` table
    - Add policies for authenticated users to manage posts
    - Add policy for public users to read posts
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  author text NOT NULL,
  image_url text
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert their own posts
CREATE POLICY "Users can insert their own posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

-- Allow authenticated users to update their own posts
CREATE POLICY "Users can update their own posts"
  ON posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Allow authenticated users to delete their own posts
CREATE POLICY "Users can delete their own posts"
  ON posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Allow anyone to read posts
CREATE POLICY "Public can view posts"
  ON posts
  FOR SELECT
  TO anon, authenticated
  USING (true);