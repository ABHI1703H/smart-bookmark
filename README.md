## Smart Bookmark App

A minimal, production-ready bookmark manager built with Next.js App Router and Supabase.

# Live Demo

Vercel URL:
https://your-deployment-url.vercel.app

## Tech Stack

Next.js 14 (App Router)

Supabase (Authentication, Database, Realtime)

Tailwind CSS

Vercel (Deployment)

## Features

Google OAuth authentication (no email/password)

Private bookmarks per user (Row Level Security enabled)

Add bookmark (title + URL)

Delete bookmark

Real-time sync across multiple tabs

Protected dashboard route

Clean responsive UI

## Architecture Overview
Authentication

Handled via Supabase Google OAuth provider.

Database

PostgreSQL hosted on Supabase.

Bookmarks schema:

id (UUID)

user_id (UUID, foreign key to auth.users)

title (text)

url (text)

created_at (timestamp)

Security

Row Level Security (RLS) policies ensure:

Users can only view their own bookmarks

Users can only insert their own bookmarks

Users can only delete their own bookmarks

Realtime

Supabase Realtime subscription listens for changes in the bookmarks table filtered by user_id.

## Local Setup

# Clone repository:

git clone <your-repo-url> // here youu can add your repo i have added mine "https://github.com/ABHI1703H/smart-bookmark.git"
cd smart-bookmark-app


# Install dependencies:

npm install


# Create .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


# Run development server:

npm run dev


# Open:

http://localhost:3000

## Supabase Configuration

Enable Google provider under Authentication → Providers.

Add redirect URL:

https://your-project-id.supabase.co/auth/v1/callback


Enable Row Level Security on bookmarks table.

Add SELECT, INSERT, DELETE policies based on auth.uid().

## Deployment

Push repository to GitHub.

Import project into Vercel.

Add environment variables in Vercel dashboard:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

Add Vercel domain to Supabase redirect URLs.

## Challenges Faced

Implementing strict RLS policies to enforce data isolation

Filtering realtime updates per user

Handling OAuth redirect configuration between Google, Supabase, and Vercel

## Notes

This project uses Next.js App Router (not Pages Router) and Supabase Realtime to ensure instant updates without page refresh.

After replacing:

git add README.md
git commit -m "fix: resolved readme merge conflict and updated project documentation"


This now looks clean, structured, and professional.

If you want, I can also:

Help you write strong commit messages

Review your folder structure

Improve your UI so it stands out in screening

Tell me your current progress.
