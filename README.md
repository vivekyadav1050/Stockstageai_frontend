# 🚀 StockStage AI - AI Investment Research Agent

An AI-powered Investment Research Agent that analyzes publicly listed companies and provides an intelligent investment recommendation using AI, live financial data, company research, and recent market news.

---

# 🌐 Live Demo

### Frontend

https://stockstageai-frontend.vercel.app/

### Backend API

https://ai-investment-research-agent-q131.onrender.com

---

# 📂 Source Code

### Backend Repository

https://github.com/vivekyadav1050/Ai_investment_Research_Agent

### Frontend Repository

https://github.com/vivekyadav1050/Stockstageai_frontend

---

# 📌 Overview

StockStage AI is an AI-powered investment research platform that allows users to search for any publicly listed company and receive a complete investment report.

The system performs:

* Company Research
* Financial Analysis
* Latest Market News Analysis
* Investment Score Calculation
* Risk Assessment
* AI-generated Investment Recommendation

Instead of simply showing financial numbers, the application combines structured financial data with AI reasoning to generate an easy-to-understand investment decision.

---

# 🚀 Features

* AI Company Research
* Live Financial Data
* Latest Company News
* Financial Score Calculation
* Investment Recommendation
* Risk Analysis
* Responsive React Dashboard
* LangGraph Workflow
* REST API

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Axios
* CSS

## Backend

* Node.js
* Express.js

## AI

* Google Gemini 2.5 Flash
* LangChain.js
* LangGraph.js

## External APIs

* Yahoo Finance
* NewsAPI

## Deployment

* Frontend → Vercel
* Backend → Render

---

# ⚙️ How to Run

## Backend

Clone repository

```bash
git clone https://github.com/vivekyadav1050/Ai_investment_Research_Agent.git
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

NEWS_API_KEY=YOUR_NEWS_API_KEY

PORT=5000
```

Run server

```bash
npm run dev
```

---

## Frontend

Clone repository

```bash
git clone https://github.com/vivekyadav1050/Stockstageai_frontend.git
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

---

# 🏗 System Architecture

```
                User
                  │
                  ▼
          React Frontend
                  │
                  ▼
            Express Backend
                  │
                  ▼
             LangGraph Flow
                  │
     ┌────────────┼────────────┐
     │            │            │
     ▼            ▼            ▼
Company      Financial      News
Research       Data        Analysis
(Gemini)   (Yahoo Finance) (NewsAPI)
     │            │            │
     └────────────┼────────────┘
                  ▼
         Financial Scoring
                  │
                  ▼
      Gemini Investment Decision
                  │
                  ▼
            JSON Response
                  │
                  ▼
          React Dashboard
```

---

# 🤖 How it Works

1. User enters a company name.
2. Gemini researches the company and generates:

   * Business Summary
   * Competitors
   * Strengths
   * Risks
3. Yahoo Finance fetches:

   * Current Price
   * Market Cap
   * Revenue
   * PE Ratio
   * ROE
   * Cash
   * Debt
4. NewsAPI fetches recent company news.
5. A rule-based scoring engine calculates financial and valuation scores.
6. Gemini combines all collected information and generates:

   * Investment Recommendation
   * Confidence Score
   * Risk Level
   * Time Horizon
   * Summary
   * Positives
   * Concerns

---

# 🧠 LangGraph Workflow

The application uses LangGraph to orchestrate the complete investment research pipeline.

Workflow:

```
START

↓

Company Research

↓

Financial Analysis

↓

News Analysis

↓

Score Calculation

↓

AI Recommendation

↓

END
```

Each node has a single responsibility, making the workflow modular and easy to maintain.

---

# 📈 Investment Decision Logic

The recommendation is generated using multiple factors:

* Business Quality
* Financial Health
* Valuation
* Growth Potential
* News Sentiment
* Financial Score
* Risk Score

Possible Recommendations:

* STRONG INVEST
* INVEST
* HOLD
* PASS

---

# ⚖️ Key Decisions & Trade-offs

## Decisions

* Used Gemini for company understanding and final investment reasoning.
* Used Yahoo Finance for live market and financial data.
* Used NewsAPI for recent company news.
* Used LangGraph to orchestrate AI workflow.
* Added rule-based financial scoring before AI recommendation.

## Trade-offs

* Free Gemini tier has request limits.
* NewsAPI free plan occasionally returns unrelated articles.
* Yahoo Finance does not expose every financial metric.
* Historical stock prediction is not included.

---

# 📊 Example Runs

## Example 1

Company

```
TCS
```

Recommendation

```
INVEST
```

Investment Score

```
82 / 100
```

---

## Example 2

Company

```
Indian Oil Corporation (IOCL)
```

Recommendation

```
INVEST
```

Investment Score

```
78 / 100
```

---

## Example 3

Company

```
Infosys
```

Recommendation

```
STRONG INVEST
```

Investment Score

```
85 / 100
```

---

# 🔮 Future Improvements

* Historical Stock Charts
* Technical Indicators
* Better News Sentiment Analysis
* SEC Filing & Annual Report Analysis (RAG)
* Portfolio Tracking
* Watchlist
* PDF Report Export
* Authentication
* Multiple AI Model Support
* Historical Investment Performance

---

# 🤖 AI Usage

AI was used extensively during the development process.

AI assisted with:

* System Design
* Architecture Planning
* LangGraph Workflow
* Prompt Engineering
* Backend Development
* Frontend Development
* API Integration
* Debugging
* Refactoring
* Code Optimization

The project was developed through continuous interaction with LLMs while ensuring all implementation details were understood and verified.

---

# 🔑 Environment Variables

Backend

```env
GEMINI_API_KEY=

NEWS_API_KEY=

PORT=5000
```

Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

Production

```env
VITE_API_URL=https://ai-investment-research-agent-q131.onrender.com/api
```

---

# 👨‍💻 Developer

**Vivek Yadav**

Software Developer

2026
