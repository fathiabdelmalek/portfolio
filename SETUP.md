# Portfolio Setup Guide

## Overview

This portfolio uses a **static site generation** approach with PostgreSQL:
- Data is fetched from the database at **build time**
- Content is embedded into static files
- Changes require a rebuild to take effect

## Setup Steps

### 1. Database Setup (cPanel)

1. **Create PostgreSQL database** in cPanel:
   - Go to "Databases" → "PostgreSQL Databases"
   - Create a new database (e.g., `portfolio`)
   - Create a user and assign it to the database

2. **Import the schema**:
   - In cPanel, go to "phpMyAdmin" or use "psql" via Terminal
   - Run the contents of `src/lib/server/schema.sql`

3. **Note your connection string**:
   ```
   postgresql://username:password@localhost:5432/database_name
   ```

### 2. GitHub Secrets

Add these secrets to your GitHub repository:

| Secret Name | Value |
|-------------|-------|
| `DATABASE_URL` | Your PostgreSQL connection string |
| `FTP_HOST` | Your FTP server hostname |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |

**To add secrets:**
1. Go to Repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each secret

### 3. Local Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your local database URL
# For local Docker: DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio

# Setup database (first time only)
npm run db:setup

# Fetch data from database and build
npm run build:full

# Run locally
npm run dev
```

### 4. Update Content

Content is managed through the database. To update:

1. **Connect to your PostgreSQL database** (via cPanel phpMyAdmin, DBeaver, or psql)
2. **Insert/Update/Delete** records in these tables:
   - `projects` - Your portfolio projects
   - `skill_categories` - Skill categories and skills
   - `publications` - Research publications

3. **Trigger a rebuild** by pushing a commit to main:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

   GitHub Actions will automatically:
   - Fetch latest data from database
   - Build the static site
   - Deploy to your server

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run db:setup` | Setup database schema and seed data |
| `npm run db:fetch` | Fetch data from database to data files |
| `npm run build:full` | Fetch data + build (full pipeline) |

## Database Tables

### projects
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | VARCHAR | Project title |
| description | TEXT | Project description |
| tags | TEXT[] | Array of technology tags |
| image | VARCHAR | Image URL |
| link | VARCHAR | Project link |
| featured | BOOLEAN | Featured on homepage |
| display_order | INTEGER | Sort order |

### skill_categories
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | VARCHAR | Category name |
| icon | VARCHAR | Emoji icon |
| skills | TEXT[] | Array of skills |
| display_order | INTEGER | Sort order |

### publications
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | VARCHAR | Paper title |
| authors | TEXT | Authors |
| journal | VARCHAR | Journal/conference name |
| year | INTEGER | Publication year |
| doi | VARCHAR | DOI link |
| url | VARCHAR | Paper URL |
| abstract | TEXT | Paper abstract |
| status | VARCHAR | published/under_review/in_preparation |
| display_order | INTEGER | Sort order |

## Troubleshooting

### Database Connection Failed
- Check your `DATABASE_URL` format
- Ensure PostgreSQL is accessible from your build environment
- For cPanel hosting, the host is usually `localhost`

### Build Succeeded But Content Didn't Update
- Verify the database has data
- Check GitHub Actions logs for fetch errors
- Try running `npm run db:fetch` locally to debug

### FTP Deploy Failed
- Verify FTP credentials in GitHub secrets
- Ensure the FTP path is correct
- Check if FTP server allows connections from GitHub
