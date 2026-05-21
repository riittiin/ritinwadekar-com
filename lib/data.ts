/* Content source of truth.
   Technical identifiers that are proper names (ICD-10, GPT-4o, o3-mini,
   scikit-learn) keep their hyphens. All other compound-modifier hyphens
   and em-dashes in prose have been removed. */

import type {
  Role,
  Metric,
  Project,
  CapabilityGroup,
  JourneyStop,
} from "./types";

export const ROLES: Role[] = [
  {
    id: "ai-engineer",
    co: "Onpoint Insights",
    role: "AI Engineer",
    loc: "San Francisco, CA",
    dates: "Jan 2026 to Present",
    current: true,
    flagship: true,
    summary:
      "Researched, architected, and shipped a government compliant automated medical coding pipeline as an AI Engineer for a healthcare client.",
    stats: [
      {
        num: "7.66%",
        unit: "",
        label: "Coding error rate, well below the 10–20% industry standard",
      },
      {
        num: "3×",
        unit: "",
        label: "More accurate than a standard baseline",
      },
      {
        num: "$8.4B",
        unit: "",
        label: "Market we are targeting in medical coding",
      },
    ],
    achievements: [
      {
        t: "Delivered an automated medical coding pipeline in 2 months, owning the project end to end as an AI Engineer.",
        b: "Led end to end R&D as an AI Engineer for a medical coding pipeline, delivering a production ready, government compliant product in two months. Built the solution for a market projected to reach $8.4B by 2033, helping position the client at the forefront of medical coding automation.",
      },
      {
        t: "Identified a flawed LLM baseline sitting below 70% accuracy before it became the foundation of the entire system.",
        b: "Researched automated ICD 10 prediction approaches, identifying that a vanilla LLM baseline failed to exceed 70% coding accuracy and was not viable for clinical use. Established a retrieval based architecture as the team's technical foundation, preventing the team from building on a flawed baseline.",
      },
      {
        t: "Built a retrieval system grounded in government sources, achieving 7.66% error rate vs a 10–20% industry baseline.",
        b: "Integrated three official government CMS coding sources into the pipeline's retrieval layer, grounding every prediction in clinically and legally accepted standards. Achieved an error rate under 7.66%, significantly outperforming the 10–20% error rate typical of manual medical coding.",
      },
      {
        t: "Designed a two stage AI pipeline that tripled prediction accuracy over a standard LLM approach.",
        b: "Designed a two stage AI pipeline that progressively narrows ICD 10 candidates before classification, outperforming standard LLM baselines by over 3× in prediction accuracy. The staged architecture mirrors expert coding workflows, making the system both accurate and interpretable.",
      },
      {
        t: "Embedded Medicaid and Medicare compliance rules directly into the pipeline to handle government payer requirements.",
        b: "Incorporated Medicaid and Medicare compliance rules directly into the automated coding pipeline, ensuring outputs meet government payer requirements at the architecture level. This targets the $1B+ annual loss the healthcare industry incurs from coding errors and non compliant claims.",
      },
    ],
    tech: [
      "Python",
      "RAG",
      "Vector Databases",
      "LLMs",
      "ICD 10",
      "CPT",
      "Retrieval Architecture",
      "Medical Coding",
      "Healthcare AI",
      "Government Compliance",
    ],
  },
  {
    id: "data-scientist",
    co: "Onpoint Insights",
    role: "Data Scientist",
    loc: "Andover, MA",
    dates: "Jan 2025 to Dec 2025",
    summary:
      "Built and shipped AI pipelines that automated data workflows and improved decision making across pharma and retail clients.",
    stats: [
      { num: "40%", label: "Reduction in analyst effort by automating data workflows" },
      { num: "17%", label: "More accurate answers over a standard search baseline" },
      { num: "4.2%", label: "Better return on campaign spend through causal modeling" },
    ],
    achievements: [
      {
        t: "Built a multi agent LLM pipeline to query 20K+ records, cutting analyst effort by 40%.",
        b: "Designed and deployed an end to end agentic AI framework on Azure using GPT 4o and o3 mini models for a leading PPE manufacturer, featuring sequential agents for query decomposition, SQL construction, validation, and response synthesis. Automated product data retrieval over 20K+ records using a multi agent approach, reducing analyst effort by 40%.",
      },
      {
        t: "Designed a RAG assistant over 20+ documents, outperforming standard search question answering by 17%.",
        b: "Designed a RAG based querying assistant over 20+ documents using transformer based embeddings, FAISS vector indexing, and LLM driven intent routing to intelligently direct queries to the most relevant documents. Outperformed standard search question answering by 17%, enabling faster and more reliable document querying for client teams.",
      },
      {
        t: "Ran causal regression models for a top 3 pharma client, delivering a 4.2% ROI lift.",
        b: "Applied causal regression modeling integrated with counterfactual reasoning to optimize marketing investment allocation for a top 3 global pharma client. Conducted analysis across CTR, impressions, conversions, CPC, and spend to isolate individual campaign impacts, delivering data driven recommendations that resulted in a 4.2% ROI lift.",
      },
      {
        t: "Deployed an OCR workflow to extract data from PDF invoices, achieving 92% accuracy.",
        b: "Developed an end to end automation system using Microsoft Power Automate to extract and structure data from PDF invoices into Excel datasets. Leveraged email triggered workflows and data extraction models to achieve 92% extraction accuracy, significantly enhancing client data processing efficiency and eliminating manual data entry efforts.",
      },
    ],
    tech: [
      "Multi Agent Systems",
      "OCR",
      "Causal Modeling",
      "NLP",
      "Azure",
      "Statistical Analysis",
      "Power Automate",
      "SQL",
      "Databricks",
    ],
  },
  {
    id: "ds-intern",
    co: "Onpoint Insights",
    role: "Data Science Intern",
    loc: "Andover, MA",
    dates: "May 2024 to Aug 2024",
    summary:
      "Built data and ML systems to improve product recommendations, data consistency, and sales forecasting across retail and supply chain operations.",
    stats: [
      { num: "10M+", label: "Transaction records extracted to build a hybrid recommendation system" },
      { num: "6.7%", label: "Lift in average order size by building a hybrid recommendation system" },
      { num: "12%", label: "Error rate on sales forecasting, well within industry acceptable range" },
    ],
    achievements: [
      {
        t: "Built a hybrid recommendation system over 10M+ records, driving a 6.7% lift in Average Order Size.",
        b: "Built a hybrid recommendation engine for a B2B warehouse distributor by integrating Market Basket Analysis, Word2Vec, and hybrid models over 10M+ historical transactions extracted via SQL. Generated association rules and contextual product recommendations, deployed in production to enhance cross selling and drive a 6.7% lift in average order size.",
      },
      {
        t: "Built an NLP based entity resolution system to reconcile partial company names, reducing reporting inconsistencies.",
        b: "Engineered an NLP driven fuzzy matching system using Named Entity Recognition and cosine similarity to reconcile partial company names within order datasets for a packaging industry client. Integrated with Power BI to optimize entity recognition, significantly reducing manual validation time and improving data consistency across reporting pipelines.",
      },
      {
        t: "Built sales forecasting models achieving a 12% error rate to support inventory and production planning.",
        b: "Forecasted monthly sales for a blinds manufacturer using three years of historical data, exploring additive and multiplicative time series methods to identify seasonal patterns and trends. Implemented the optimal model achieving a 12% error rate, enabling reliable short term forecasts to support inventory and production planning.",
      },
    ],
    tech: [
      "Python",
      "NLP",
      "Recommendation Systems",
      "Time Series Forecasting",
      "Entity Resolution",
      "Power BI",
      "Vector Similarity",
      "SQL",
    ],
  },
  {
    id: "conagra",
    co: "Conagra Brands",
    role: "Student Consultant Data Scientist",
    loc: "Dallas, TX",
    dates: "Jan 2024 to May 2024",
    summary:
      "Built analytical frameworks across pricing, promotion, and consumer demand to drive growth strategy and optimize spend for Conagra's Meat Substitutes category.",
    stats: [
      { num: "7%", label: "Projected sales uplift in Conagra's Meat Substitutes from optimized strategy" },
      { num: "$80K", label: "Cost savings unlocked through promotional spend reallocation" },
      { num: "100+", label: "Product attributes analyzed across 4 years of regional sales data" },
    ],
    achievements: [
      {
        t: "Analyzed Meat Substitutes sales across U.S. regions, projecting a 7% sales uplift from region specific pricing and product strategy.",
        b: "Analyzed Conagra's Meat Substitutes sales data across multiple U.S. regions using Python and SAS, identifying key growth drivers. Developed region specific pricing and product strategies, recommending increased investment in high performing variants. Projected these optimizations to drive a 7% overall sales increase.",
      },
      {
        t: "Built Clout and Vulnerability Maps to benchmark plant based brands, driving promotion reallocation and cost savings.",
        b: "Developed Clout and Vulnerability Maps to benchmark leading plant based brands, analyzing consumer demand sensitivity to price changes. Identified opportunities to reallocate promotional spend away from underperforming products, resulting in cost savings and sustained sales performance. The framework informed future brand investment strategies.",
      },
      {
        t: "Analyzed supermarket scanner data, addressing statistical challenges to enable reliable causal inference.",
        b: "Analyzed supermarket scanner data, addressing statistical challenges like heteroscedasticity, heterogeneity, and endogeneity through model testing and validation.",
      },
    ],
    tech: [
      "Python",
      "SAS",
      "Pricing Strategy",
      "Promotion Optimization",
      "Demand Modeling",
      "Causal Modeling",
      "Multivariate Analysis",
      "Scanner Data",
      "CPG Analytics",
    ],
  },
  {
    id: "galileo",
    co: "Creative Galileo",
    role: "Data Science Intern",
    loc: "Pune, India",
    dates: "Apr 2023 to Jul 2023",
    summary:
      "Built ML and telemetry systems to drive user retention and platform performance for a Series A EdTech startup with 10M+ app downloads.",
    stats: [
      { num: "10M+", label: "App downloads at the Series A EdTech platform" },
      { num: "10%", label: "Reduction in app load times from targeted performance optimizations" },
      { num: "12%", label: "Reduction in payment page churn from funnel bottleneck fixes" },
    ],
    achievements: [
      {
        t: "Built churn prediction models on user behavioral data for a Series A EdTech with 10M+ app downloads, generating risk scores to drive retention initiatives.",
        b: "Leveraged user behavioral data to build churn prediction models, performing model evaluation in Python (pandas, scikit learn) and AWS SageMaker, generating risk scores for retention initiatives at a Series A EdTech platform with 10M+ app downloads.",
      },
      {
        t: "Diagnosed user telemetry on AWS S3 to surface latency bottlenecks, cutting app load times 10% and payment page churn 12%.",
        b: "Diagnosed user telemetry data stored in AWS S3 to identify latency related funnel drop offs and rank performance bottlenecks, enabling targeted system optimizations that reduced application load times by 10% and payment page churn by 12%.",
      },
    ],
    tech: [
      "Python",
      "scikit learn",
      "AWS SageMaker",
      "AWS S3",
      "Churn Modeling",
      "Telemetry Analysis",
      "Funnel Optimization",
      "Behavioral Analytics",
      "EdTech",
    ],
  },
];

export const METRICS: Metric[] = [
  {
    label: "Medical Coding Error Rate",
    num: "7.66",
    unit: "%",
    desc: "error rate from the CMS-grounded medical coding pipeline I shipped",
    spark: "down",
    projectId: "medical-coding",
  },
  {
    label: "Accuracy vs Default AI",
    num: "3",
    unit: "×",
    desc: "more accurate than a stock LLM, via the two-stage retrieval pipeline I designed",
    spark: "up",
    projectId: "medical-coding",
  },
  {
    label: "Projected Market",
    num: "8.4",
    unit: "B",
    prefix: "$",
    desc: "medical coding market the automation pipeline I shipped is built for (by 2033)",
    spark: "up",
    projectId: "medical-coding",
  },
  {
    label: "Analyst Time Saved",
    num: "40",
    unit: "%",
    desc: "cut in analyst workflows from the multi-agent SQL system I built on Azure",
    spark: "down",
    projectId: "multi-agent",
  },
  { label: "AI Doc Search vs Keyword", num: "17", unit: "%", desc: "lift over keyword search from the RAG doc assistant I built (FAISS + intent routing)", spark: "up", projectId: "rag-assistant" },
  { label: "Marketing ROI Lift", num: "4.2", unit: "%", desc: "ROI lift for a top-3 pharma client from the causal attribution models I built", spark: "up", projectId: "causal" },
  { label: "Invoice-Reading Accuracy", num: "92", unit: "%", desc: "extraction accuracy from the end-to-end OCR invoice pipeline I shipped", spark: "up", projectId: "ocr" },
  { label: "Transactions Processed", num: "10M", unit: "+", desc: "warehouse transactions I mined to train a hybrid product recommender", spark: "up", projectId: "recsys" },
  { label: "Avg Order Size Lift", num: "6.7", unit: "%", desc: "AOV lift from the hybrid recommender I built (Market Basket + Word2Vec)", spark: "up", projectId: "recsys" },
  { label: "Sales Forecast Error", num: "12", unit: "%", desc: "error on the monthly sales forecasting model I built for a manufacturer", spark: "down", projectId: "forecast" },
  { label: "Projected Sales Lift", num: "7", unit: "%", desc: "projected uplift from the regional pricing strategy I built for Conagra", spark: "up", projectId: "conagra-strategy" },
  { label: "Product Attributes Analyzed", num: "100", unit: "+", desc: "Conagra attributes I analyzed across 4 years of scanner data (Python + SAS)", spark: "up", projectId: "conagra-strategy" },
  { label: "App Downloads", num: "10M", unit: "+", desc: "Series A EdTech app where I built churn models and ran S3 telemetry diagnostics", spark: "up", projectId: "galileo-churn" },
  { label: "App Load Time Cut", num: "10", unit: "%", desc: "cut by ranking app latency bottlenecks from the AWS S3 user telemetry I analyzed", spark: "down", projectId: "galileo-churn" },
  { label: "Lost-Payment Rate Cut", num: "12", unit: "%", desc: "drop in payment-page churn after the funnel diagnostics I ran on S3 data", spark: "down", projectId: "galileo-churn" },
  { label: "Conagra Cost Savings", num: "80", unit: "K", prefix: "$", desc: "saved by reallocating promo spend via the Clout & Vulnerability maps I built for Conagra", spark: "up", projectId: "conagra-strategy" },
];

export const PROJECTS: Project[] = [
  {
    id: "medical-coding",
    name: "Automated Medical Coding Pipeline",
    co: "Onpoint Insights",
    flagship: true,
    problem:
      "Manual medical coding runs a 10–20% error rate and bleeds $1B+ annually from non-compliant claims, in a market projected to reach $8.4B by 2033.",
    built:
      "Two-stage retrieval pipeline grounded in three official CMS sources, with Medicaid and Medicare compliance rules built into the foundation of the system.",
    approach:
      "Step 1: find candidate codes from authoritative sources. Step 2: pick the right code under strict rules. Step 3: check compliance. Replaced a default large-language-model approach that capped below 70% accuracy.",
    tech: ["Python", "RAG", "Vector DB", "LLMs", "ICD-10", "CPT", "CMS Sources"],
    impact: "Under 7.66% error rate · 3× off the shelf AI baseline · shipped in 2 months",
  },
  {
    id: "multi-agent",
    name: "AI Agents That Answer Analyst Questions on 20K+ Records",
    co: "Onpoint Insights",
    problem:
      "Analysts at a PPE (personal protective equipment) manufacturer spent a lot of time running custom database queries against 20K+ product records.",
    built:
      "Sequential team of AI agents: query decomposition → SQL construction → validation → response synthesis.",
    approach:
      "Azure-deployed agents using GPT-4o and o3-mini, with validation gates between each stage.",
    tech: ["Azure", "GPT-4o", "o3-mini", "Multi-Agent", "SQL"],
    impact: "40% reduction in analyst effort",
  },
  {
    id: "rag-assistant",
    name: "AI Document Assistant: Search Across 20+ Sources",
    co: "Onpoint Insights",
    problem:
      "Client teams couldn't answer questions across 20+ scattered documents with standard keyword search.",
    built: "AI assistant that retrieves answers across documents, with intent routing to the right source.",
    approach: "Transformer embeddings + FAISS vector index + LLM-driven intent routing.",
    tech: ["FAISS", "Transformers", "RAG", "Intent Routing"],
    impact: "17% more accurate than standard keyword search",
  },
  {
    id: "causal",
    name: "Marketing Attribution for a Top-3 Pharma Client",
    co: "Onpoint Insights",
    problem:
      "A top-3 pharma client needed to isolate the true ROI of individual marketing campaigns.",
    built:
      "Causal regression with counterfactual reasoning over clicks, impressions, conversions, cost-per-click, and spend.",
    approach: "Per-campaign impact isolation feeding data-driven reallocation recommendations.",
    tech: ["Causal Inference", "Counterfactuals", "Statistical Analysis"],
    impact: "4.2% ROI lift on campaign spend",
  },
  {
    id: "ocr",
    name: "Automated PDF Invoice Reader (OCR)",
    co: "Onpoint Insights",
    problem: "Manual invoice data entry was a bottleneck in client operations.",
    built: "End-to-end automation extracting structured data from PDF invoices into Excel.",
    approach: "Email-triggered workflows + data extraction models on Microsoft Power Automate.",
    tech: ["Power Automate", "OCR", "PDF Parsing"],
    impact: "92% extraction accuracy",
  },
  {
    id: "recsys",
    name: "Product Recommendations Across 10M+ Transactions",
    co: "Onpoint Insights",
    problem:
      "A B2B warehouse distributor needed contextual cross-sell across millions of historical transactions.",
    built: "Hybrid recommender combining Market Basket Analysis, Word2Vec, and learned hybrid models.",
    approach:
      "SQL-extracted 10M+ transactions → association rules + contextual recs deployed in production.",
    tech: ["Word2Vec", "Market Basket", "SQL", "Recommendation"],
    impact: "6.7% lift in Average Order Size",
  },
  {
    id: "entity",
    name: "Matching Messy Company Names Across Datasets",
    co: "Onpoint Insights",
    problem:
      "Partial company names across order datasets created reporting inconsistencies for a packaging client.",
    built: "NLP-driven fuzzy matching system to reconcile partial entities (think 'IBM' vs 'I.B.M. Corp').",
    approach: "Named Entity Recognition + cosine similarity, integrated with Power BI dashboards.",
    tech: ["NER", "Cosine Similarity", "Power BI", "NLP"],
    impact: "Significant reduction in manual validation time",
  },
  {
    id: "forecast",
    name: "Sales Forecasting System",
    co: "Onpoint Insights",
    problem:
      "A blinds manufacturer needed reliable monthly forecasts for inventory and production planning.",
    built: "Time-series forecasting on three years of historical sales data.",
    approach:
      "Compared additive and multiplicative methods to capture seasonality before shipping the optimal model.",
    tech: ["Time Series", "Forecasting", "Seasonality"],
    impact: "12% error rate within acceptable range",
  },
  {
    id: "conagra-strategy",
    name: "Conagra Meat Substitutes Growth Strategy",
    co: "Conagra Brands",
    problem: "Conagra needed region-specific growth strategy for the Meat Substitutes category.",
    built: "Pricing, promotion, and demand-sensitivity framework with Clout & Vulnerability maps.",
    approach:
      "Python + SAS analysis across 100+ attributes and 4 years of regional sales data; controlled for statistical pitfalls (heteroscedasticity, endogeneity) in scanner data.",
    tech: ["Python", "SAS", "Pricing", "Scanner Data", "Causal"],
    impact: "Projected 7% sales uplift · $80K savings reallocation",
  },
  {
    id: "galileo-churn",
    name: "Predicting Drop-Off and Fixing Slow Spots in a 10M-Download App",
    co: "Creative Galileo",
    problem: "An early-stage EdTech (Series A) with 10M+ downloads was losing users at the payment page.",
    built: "Churn prediction models + user-behavior diagnostics surfacing slow spots in the app.",
    approach:
      "scikit-learn + AWS SageMaker for risk scoring; S3 user-behavior data analysis for funnel drop-off ranking.",
    tech: ["scikit-learn", "SageMaker", "AWS S3", "Telemetry"],
    impact: "10% faster load · 12% less lost-payment rate",
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: "Languages & Libraries",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PySpark",
      "Keras",
      "Matplotlib",
      "Plotly",
      "R",
      "SAS",
    ],
  },
  {
    title: "Tools",
    items: [
      "Tableau",
      "PowerBI",
      "Alteryx",
      "Databricks",
      "Mixpanel",
      "Excel",
      "Power Automate",
      "Git",
      "GitHub Actions",
      "Cursor",
      "Claude Code",
    ],
  },
  {
    title: "Database Technologies",
    items: ["MySQL", "PostgreSQL", "MS SQL Server", "MongoDB", "Oracle", "Apache Hadoop", "Snowflake"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS", "S3", "Redshift", "QuickSight", "Athena", "Glue", "Azure", "Azure Kubernetes", "Azure Blob Storage"],
  },
];

export const JOURNEY: JourneyStop[] = [
  { yr: "2019", pl: "Pune University", ct: "B.E., Electronics & Telecom · Honors AI/ML" },
  { yr: "2023 Apr", pl: "Creative Galileo", ct: "First production ML · Pune, India" },
  { yr: "2023 Aug", pl: "UT Dallas", ct: "M.S., Business Analytics & AI" },
  { yr: "2024", pl: "Onpoint Insights", ct: "Data Science Intern → Data Scientist" },
  { yr: "2026", pl: "Onpoint Insights", ct: "AI Engineer · San Francisco, CA" },
];

export const SITE = {
  name: "Ritin Wadekar",
  role: "AI Engineer",
  location: "San Francisco, CA",
  url: "https://ritinwadekar.com",
  email: "ritinwadekar6@gmail.com",
  phone: "(972) 822-5748",
  linkedin: "https://www.linkedin.com/in/ritin-wadekar/",
  description:
    "Ritin Wadekar, AI Engineer in San Francisco. I build production AI systems for healthcare, pharma, and retail. Recently shipped an automated medical coding pipeline for a healthcare client, built on official government data.",
};
