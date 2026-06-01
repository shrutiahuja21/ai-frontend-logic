# AI Logistics Control Tower

Next-generation AI Logistics Control Tower for real-time shipment tracking, demand forecasting, and supply chain optimization.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Variables
- **Charts**: Chart.js / Recharts
- **Icons**: Tabler Icons
- **State Management**: Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in the required keys.
   ```bash
   cp .env.example .env
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components`: Reusable UI components.
- `src/pages`: Main page views.
- `src/store`: Zustand state management.
- `src/hooks`: Custom React hooks.
- `src/services`: API services.
- `src/types`: TypeScript interfaces.
- `src/utils`: Helper functions.
- `src/constants`: App-wide constants.
- `src/styles`: Global CSS and Tailwind config.

## Note on Disk Space

If you encounter `ENOSPC` errors during `npm install`, please ensure you have sufficient disk space on your system (especially the drive containing your npm cache).
