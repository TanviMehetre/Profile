// ==========================================================================
// Project Dataset
// ==========================================================================
const projectsData = [
  {
    id: "john-deere-eventbridge",
    title: "Enterprise Connected Data Domain",
    type: "Workplace Production",
    categories: ["workplace", "cloud-data"],
    githubUrl: "https://github.com/TanviMehetre/Projects",
    shortDesc: "Designed and implemented a scalable, event-driven architecture using AWS EventBridge to handle enterprise order management workflows across microservices for John Deere.",
    longDesc: "Led critical development efforts within the software lifecycle to model and support high-volume order management workflows across microservices. Designed decoupled messaging topologies, integrated validation, and deployed robust backend components in a secure, cloud-native environment.",
    tech: ["AWS EventBridge", "Microservices", "Event-Driven Architecture", "Cloud Native", "AWS IAM", "JSON Schema"],
    metrics: [
      { label: "Architecture", value: "Decoupled EDA" },
      { label: "Deployment", value: "Cloud Native" },
      { label: "Domain", value: "Order Management" }
    ],
    architecture: `[Microservices Layer] ──(Publish Events)──> [AWS EventBridge Bus]
                                                  │
                                   ┌──────────────┴──────────────┐
                                   ▼                             ▼
                            [Routing Rules]               [Routing Rules]
                                   │                             │
                                   ▼                             ▼
                           [Target: SQS Queue]           [Target: Lambda Function]
                                   │                             │
                                   ▼                             ▼
                         [Processing Worker]            [Workflow Dispatcher]`,
    keyAccomplishments: [
      "Enhanced and modernized event schemas and routing rules to support complex data propagation between domain microservices.",
      "Developed event routing logic to ensure delivery verification, schema compliance, and low-latency processing.",
      "Utilized modern AI-assisted engineering practices to optimize service interactions and accelerate deployment cycles.",
      "Ensured cloud infrastructure security and access control compliance by implementing granular AWS policies."
    ],
    directory: "Quadyster - John Deere Integration"
  },
  {
    id: "etime-tracking-app",
    title: "Project Time (eTime) Application",
    type: "Workplace Production",
    categories: ["workplace", "cloud-data"],
    images: [
      { src: "images/etime_architecture_p1.png", caption: "AWS Deployment Architecture — VPC, Lambda, API Gateway, CloudFront, S3, RDS" }
    ],
    shortDesc: "A serverless enterprise employee project time-tracking system deployed on AWS with React/Redux Toolkit frontend, 7 Python Lambda microservices, and PostgreSQL on RDS — featuring internationalization, Formik/Yup validation, and 20+ automated tests.",
    longDesc: "Designed and implemented the full-stack architecture of a serverless employee project time-tracking system (eTime). Users can create, view, edit, delete, and filter time entries for project resource allocation. The React frontend uses Redux Toolkit for state management, MUI components for a polished UI, Formik + Yup for form validation, and react-intl for multi-language internationalization (English, Hindi, Telugu). The backend comprises 7 individual Python Lambda functions (getTimelogs, getOneTimelog, createTimelog, editTimelog, deleteTimelog, postFilters, getDropdowns) connected via API Gateway, each using pg8000 to interface with a PostgreSQL database in RDS. The app is deployed securely inside a VPC with public/private subnets, a NAT gateway, an EC2 bastion host for database SSH tunneling, and CloudFront + S3 for global frontend delivery. The full test suite uses Vitest, React Testing Library, and MSW (Mock Service Worker) to validate 20 scenarios including overnight time calculations, form validations, database disconnection handling, network errors, and internationalization fallback.",
    tech: ["React.js", "Redux Toolkit", "MUI (Material UI)", "Formik + Yup", "Vite", "AWS Lambda (Python)", "pg8000", "API Gateway", "PostgreSQL (RDS)", "S3 + CloudFront", "VPC + NAT Gateway", "EC2 Bastion Host", "Vitest", "React Testing Library", "MSW", "react-intl (i18n)", "Day.js"],
    metrics: [
      { label: "Lambda Functions", value: "7 Microservices" },
      { label: "API Endpoints", value: "7 REST Routes" },
      { label: "Test Scenarios", value: "20+ Automated" },
      { label: "Languages", value: "EN / HI / TE" }
    ],
    architecture: `[Users] ──(HTTPS:443)──> [CloudFront CDN] ──> [S3 Bucket (React SPA)]
                                    │
                              (HTTPS:443)
                                    │
                                    ▼
                          [AWS API Gateway]
                                    │
                    ┌───────────────┴───────────────┐
                    ▼ (Private Subnet)              ▼
          [7 Lambda Functions]            [RDS PostgreSQL :5432]
          getTimelogs, createTimelog,            │
          editTimelog, deleteTimelog,            │
          getOneTimelog, postFilters,            │
          getDropdowns                          ▼
                    │                    [EC2 Bastion Host]
                    └───────(pg8000)────> (SSH Tunnel to DB)`,
    keyAccomplishments: [
      "Architected a complete AWS serverless deployment with VPC isolation: Lambda functions and RDS in private subnets, EC2 bastion in public subnet, NAT gateway for outbound internet, and CloudFront + S3 for global frontend delivery.",
      "Built 7 individual Python Lambda microservices (getTimelogs, getOneTimelog, createTimelog, editTimelog, deleteTimelog, postFilters, getDropdowns) using pg8000 for direct PostgreSQL connections via API Gateway triggers.",
      "Developed a React SPA with Redux Toolkit (createAsyncThunk, createSlice) for async state management, implementing full CRUD operations with Axios against the API Gateway endpoints.",
      "Implemented form validation using Formik + Yup schemas including overnight/next-day time calculations, 16-hour daily cap enforcement, and overlapping entry detection.",
      "Added multi-language internationalization via react-intl supporting English, Hindi (हिन्दी), and Telugu (తెలుగు) with locale-aware formatting throughout the application.",
      "Wrote a comprehensive test suite of 20+ test scenarios using Vitest, React Testing Library, and MSW covering: CRUD operations, form validation flows, database disconnection handling, network error states, and internationalization fallback behavior.",
      "Designed the MUI-based responsive UI with a navigation bar, list page with date/project/member filter dropdowns, and a detail page supporting view, edit, and create modes with time duration auto-calculation."
    ],
    githubUrl: "https://github.com/TanviMehetre/Projects",
    directory: "Local Workspace: Task10"
  },
  {
    id: "databricks-elt-pipeline",
    title: "Databricks ELT Pipeline (Medallion)",
    type: "Workplace Production",
    categories: ["workplace", "cloud-data"],
    shortDesc: "Built an automated ELT pipeline using Databricks and the Medallion Architecture to process, clean, and analyze U.S. flight data for 2024.",
    longDesc: "Developed a production-grade data pipeline to ingest raw flight data CSV files, perform PySpark schema transformations, and produce fact and dimension tables. Utilizes a Lakehouse approach to generate airport performance analytics, calculate cancellation rates, and determine flight delay trends.",
    tech: ["Databricks Notebooks", "PySpark", "Medallion Architecture", "Bronze-Silver-Gold", "Delta Lake", "Databricks Jobs Scheduler"],
    metrics: [
      { label: "Raw Ingestion", value: "Autoloader (Bronze)" },
      { label: "Format", value: "Delta Lake Tables" },
      { label: "Data Span", value: "U.S. Flights 2024" },
      { label: "Orchestration", value: "Databricks Jobs" }
    ],
    architecture: `[Raw CSV Flight Data] ──(Autoloader Ingestion)──> [Bronze Delta Table]
                                                                     │
                                                                     ▼  (PySpark Transform)
                                                               [Silver Delta Table]
                                                                     │
                                                 ┌───────────────────┴───────────────────┐
                                                 ▼ (Fact Table)                          ▼ (Dimension Tables)
                                         [Fact Flight Metrics]                 [Airport & Date Dimensions]`,
    keyAccomplishments: [
      "Implemented a Medallion Architecture consisting of Bronze (raw ingestion), Silver (cleaned/enriched), and Gold (analytics ready) layers.",
      "Calculated complex silver-layer airport metrics including peak operating hours, average arrival/departure delay, and cancellation rates.",
      "Designed a Gold-layer star schema with Airport Dimensions (surrogate keys), Date Dimensions (weekend indicators), and Fact Tables.",
      "Classified airport performance rankings divided by operating volume (>10k vs <=10k flights) to isolate worst and best performing hubs.",
      "Automated and scheduled pipeline runs using Databricks Jobs, triggered by new files uploaded to the catalog volume."
    ],
    githubUrl: "https://github.com/TanviMehetre/Projects",
    directory: "Local Workspace: Task11"
  },
  {
    id: "power-bi-dashboards",
    title: "Power BI - Reports & Dashboards",
    type: "Workplace Production",
    categories: ["workplace", "cloud-data"],
    documents: [
      {
        title: "Flights Metrics Report — Executive Summary",
        subtitle: "11-page formatted paginated report • PDF Download",
        url: "Flights Metrics Report PDF.pdf",
        icon: "fa-solid fa-file-pdf",
        color: "#c0392b"
      },
      {
        title: "Flight Metrics Database — Excel Export",
        subtitle: "Weekly flight & delay metrics spreadsheet • Excel Download",
        url: "Flight Metrics Excel.xlsx",
        icon: "fa-solid fa-file-excel",
        color: "#27ae60"
      }
    ],
    images: [
      { src: "images/powerbi_Dashboard.jpeg", caption: "Executive Dashboard — Overall metrics, flight status decomposition, and weekly performance trends" },
      { src: "images/powerbi_Weekly_Performance_Chart.jpeg", caption: "Weekly Performance Report — Comprehensive cancellation rates, delay trends, and tabular metrics" },
      { src: "images/powerbi_Top_10_Airports_High_Volume.jpeg", caption: "Top 10 Airports (High Volume) — Performance details for major airports (traffic > 10,000)" },
      { src: "images/powerbi_Top_10_Airports_Low_Volume.jpeg", caption: "Top 10 Airports (Low Volume) — Analytics for regional airports (traffic < 10,000)" }
    ],
    shortDesc: "Developed interactive executive dashboards, analytical reports, and paginated reports using Power BI and DAX to evaluate performance, delays, and cancellation rates across 130 U.S. airports.",
    longDesc: "Designed visually compelling executive reports and interactive dashboards to analyze trends over time for the flight dataset transformed by the Databricks pipeline. The project deliverables include:\n<ul class='modal-desc-list' style='margin-top: 12px;'>\n  <li><strong>Executive Dashboard:</strong> Highlights overall KPIs including total flight volume, a status decomposition (on-time, delayed, cancelled), and multi-week performance trends for high and low volume airports.</li>\n  <li><strong>Weekly Performance Report:</strong> Provides detailed weekly operations, cancellation rates, and average delay calculations coupled with metrics performance charts.</li>\n  <li><strong>Top 10 Airports (Low Volume):</strong> Details analytics for regional hubs (traffic under 10k flights), matching total volume against average delay in a scatter plot.</li>\n  <li><strong>Top 10 Airports (High Volume):</strong> Details traffic volumes, cancellation rates, average delays, and peak departure hours for major hubs (traffic over 10k flights).</li>\n  <li><strong>Paginated Report Builder:</strong> Automated report generation delivering publication-ready PDF and Excel data tables for 130 airports.</li>\n</ul>",
    tech: ["Power BI Desktop", "DAX Formulas", "Power BI Report Builder", "Star Schema modeling", "Excel Data Modeling", "Data Visualization", "Trend Analysis"],
    metrics: [
      { label: "Total Flights Analyzed", value: "1,048,575" },
      { label: "Airports Tracked", value: "130 Hubs" },
      { label: "Average Delay", value: "8.26 Minutes" },
      { label: "Cancellation Rate", value: "3.0%" }
    ],
    architecture: `[Gold Lakehouse Tables] ──(DirectQuery / Import)──> [Power BI Data Model]
                                                                           │
                                                                           ▼  (DAX & Relational Mapping)
                                                                 [Interactive Reports]
                                                                           │
                                                    ┌──────────────────────┴──────────────────────┐
                                                    ▼ (Power BI Service)                         ▼ (Report Builder)
                                          [Interactive Dashboard]                       [Paginated PDF / Excel]`,
    keyAccomplishments: [
      "Engineered a star schema data model within Power BI, joining transformed Gold-layer flight facts with date and airport dimensions.",
      "Formulated DAX measures to calculate complex KPIs, including rolling weekly cancellation rates, average delays, and relative performance scores.",
      "Designed the Weekly Performance Report showing weekly operational efficiency with a tabular breakdown of 1,048,575 total flights.",
      "Created comparative reports for High Volume (>10k flights) and Low Volume (<10k flights) airports to identify localized inefficiencies.",
      "Constructed a high-level Executive Dashboard displaying flight decomposition (on-time vs. delayed vs. cancelled) and top-traffic airports.",
      "Developed automated paginated reports using Power BI Report Builder, formatting multi-page grids for PDF and Excel exports."
    ],
    githubUrl: "https://github.com/TanviMehetre/Projects",
    directory: "Local Workspace: Task12"
  },
  {
    id: "lims-maple-dot",
    title: "LIMS & MAPLE Enterprise Systems",
    type: "Workplace Production",
    categories: ["workplace"],
    shortDesc: "Developed and maintained Laboratory Information Management Systems (LIMS) and MAPLE enterprise projects for the Iowa Department of Transportation.",
    longDesc: "Currently contributing to the ongoing LIMS (Laboratory Information Management System) and MAPLE projects as an intern. Utilizing web development technologies, including Razor Pages, C#, JavaScript, HTML, ASP.NET, and SQL databases. Gaining valuable experience in web development and working within a professional environment.",
    tech: ["ASP.NET MVC", "Razor Pages", "C#", "SQL Server", "JavaScript", "HTML/CSS", "Git", "Bug Triage"],
    metrics: [
      { label: "Bug Fixes", value: "7 Resolved" },
      { label: "Features", value: "15 Enhanced" },
      { label: "Refactors", value: "10 Completed" },
      { label: "Period", value: "1 Year" }
    ],
    architecture: `[Client Web Browser] ──(HTTP)──> [ASP.NET MVC Routing] ──> [C# Controllers]
                                                                             │
                                                                             ▼  (Entity Framework)
                                                                    [Microsoft SQL Server]`,
    keyAccomplishments: [
      "Collaborated in a cross-functional agile development environment to support crucial state transportation databases.",
      "Delivered 7 production bug fixes, 15 custom feature enhancements, and 10 major code refactors in a 3-month cycle.",
      "Participated actively in team code reviews, repository audits, bug triage, and production release preparation.",
      "Enhanced the LIMS website through bug fixes, feature additions, and code improvements."
    ],
    directory: "Iowa Department of Transportation"
  },
  {
    id: "rtl-statistical-analysis",
    title: "Digital Design for Statistical Analysis (EE 465)",
    type: "University Academic",
    categories: ["university", "hardware-systems"],
    documents: [
      {
        title: "EE 465 Final Project — Complete Lab Report",
        subtitle: "20-page technical design & optimization report • PDF Download",
        url: "EE 465 Final Project Lab Report.pdf",
        icon: "fa-solid fa-file-pdf",
        color: "#c0392b"
      }
    ],
    images: [
      { src: "images/ee465_img_p18_2.png", caption: "FSM State Machine — Four-state logic flow (IDLE, SAMPLE_STATE, CALCULATE, DONE_STATE)" },
      { src: "images/ee465_img_p2_1.png", caption: "Datapath Diagram — Hand-drawn hardware architecture for statistical operations" },
      { src: "images/ee465_img_p15_1.png", caption: "FSM Physical Layout — Place & Route gate mapping in Cadence Innovus" },
      { src: "images/ee465_img_p16_1.png", caption: "FSM Clock Tree Synthesis — Timing distribution paths in Cadence Innovus" }
    ],
    shortDesc: "Designed and optimized a Verilog RTL ASIC implementation computing moving averages and standard deviations of temperature readings for the USDA, achieving 38.2% power and 7.7% area savings.",
    longDesc: "Collaborated on designing a hardware-efficient RTL system in Verilog to perform real-time statistical calculations on sequential USDA temperature samples over a 14-sample window. The project covers baseline design, FSM optimization, logic synthesis, and Place-and-Route layout mapping:\n<ul class='modal-desc-list' style='margin-top: 12px;'>\n  <li><strong>Mathematical Datapath:</strong> Calculates moving average (MODE=0) and moving standard deviation (MODE=1) for a rolling buffer. It mitigates division rounding errors via count/2 offset addition, and implements standard deviation using an iterative Babylonian square root approximation.</li>\n  <li><strong>Baseline Design:</strong> Built using a shift register that updates values every clock cycle (Clock Period: 15.4ns, Area: 18,268 μm², Power: 1.018mW).</li>\n  <li><strong>FSM-Optimized Design:</strong> Replaced the shift register with a 4-state controller (IDLE, SAMPLE_STATE, CALCULATE, DONE_STATE) operating at 50 MHz (Clock Period: 20ns) to enable clock gating, logic reuse, and idle states.</li>\n  <li><strong>ASIC Flow Achievements:</strong> Reduced power consumption from 1.018mW to 0.629mW (38.2% savings), decreased physical area from 18,268 μm² to 16,859 μm² (7.7% savings), and reduced energy consumption per reading from 0.0339mJ to 0.02097mJ (38.1% savings).</li>\n</ul>",
    tech: ["Verilog", "Cadence Genus Synthesis", "Cadence Innovus (PnR)", "Questa Simulation", "RTL FSM Design", "Babylonian Square Root", "ASIC Design Flows"],
    metrics: [
      { label: "Power Savings", value: "38.2% Reduction" },
      { label: "Area Savings", value: "7.7% Reduction" },
      { label: "Energy / Reading", value: "0.02097 mJ" },
      { label: "FSM Clock Speed", value: "50 MHz (20ns)" }
    ],
    architecture: `[USDA Temp Samples TN] ──> [Shift Window Buffer (Tvals: 14)]
                                                   │
                                                   ▼
     [4-State Control FSM] ──(MODE Selector)──> [Execution Logic]
       IDLE, SAMPLE, CALCULATE, DONE               │
                                                   ▼
                                         [Math Calculation Unit]
                                         ├─ Average (Offset rounded)
                                         └─ Std Dev (Newton-Raphson)
                                                   │
                                                   ▼
                                         [AVG_SD 12-bit Output]`,
    keyAccomplishments: [
      "Co-authored synthesizable Verilog RTL models computing rolling sums, variances, and standard deviations for a 14-sample USDA window.",
      "Implemented a 4-state Finite State Machine (FSM) that reused arithmetic logic blocks, minimizing switching power and reducing cell area.",
      "Conducted logical netlist synthesis in Cadence Genus (RTL-to-gates) and finalized physical Place-and-Route mapping using Cadence Innovus.",
      "Accomplished 38.2% power savings (down to 0.629 mW) and 7.7% silicon area reduction (down to 16,859.5 μm²) by leveraging layout routing optimizations.",
      "Resolved division rounding offset discrepancies and verified mathematical accuracy under Questa Simulator with custom testbenches.",
      "Constructed physical layouts, clock tree syntheses, timing constraints, and verified zero routing slacks (Slack = 0 ps)."
    ],
    directory: "Iowa State University Academic Projects"
  },
  {
    id: "microprocessor-architecture",
    title: "VHDL Microprocessor Architectures",
    type: "University Academic",
    categories: ["university", "hardware-systems"],
    shortDesc: "Designed and simulated both single-cycle and multi-cycle microprocessor architectures in VHDL.",
    longDesc: "This project involved the design and development of a microprocessor using VHDL, structured to support both single-cycle and multi-cycle architectures. The objective was to create a versatile processor capable of executing instructions efficiently under both architectures, allowing for a deeper understanding of how these design approaches impact processing speed, resource usage, and overall performance. We used Questa for simulation and verification, which ensured that the processor behaved as expected across various test scenarios.",
    tech: ["VHDL", "Questa", "Microprocessor Design", "Timing Verification", "ASIC Design Flows"],
    metrics: [
      { label: "Frequency Range", value: "50 MHz to 1 GHz" },
      { label: "Architecture", value: "Single & Multi-Cycle" },
      { label: "Hardware Description", value: "VHDL" },
      { label: "Simulation", value: "Questa Verification" }
    ],
    architecture: `[PC Register] ──> [Instruction Memory] ──> [Instruction Decoder]
                                                          │
                                         ┌────────────────┴────────────────┐
                                         ▼                                 ▼
                                  [Register File] ──────────────────> [Control FSM]
                                         │                                 │
                                         ▼                                 ▼
                                    [ALU Core] <──(Execution Control)──────┘
                                         │
                                         ▼
                                   [Data Memory]`,
    keyAccomplishments: [
      "My main responsibilities on this project were to develop and verify the architecture of the microprocessor.",
      "In order to incorporate both single-cycle and multi-cycle operating capabilities, I concentrated on coding and improving the VHDL architecture.",
      "Oversaw the Questa simulation phase, creating test benches and locating and resolving processor bottlenecks.",
      "Worked with another team member to optimize and debug the hardware implementation, making sure the CPU complied with all project specifications.",
      "Gained advanced proficiency in VHDL, CPU logic design, Questa simulation tools, and troubleshooting hardware implementations."
    ],
    directory: "Iowa State University Academic Projects"
  },
  {
    id: "space-cyclone-debris",
    title: "Space Cyclone – Orbital Debris Capture Payload",
    type: "University Academic",
    categories: ["university", "hardware-systems"],
    seniorDesignUrl: "https://sdmay25-09.sd.ece.iastate.edu/",
    documents: [
      {
        title: "Space Cyclone — Full Design Document (Spring 2025)",
        subtitle: "75-page technical report • PDF Download",
        url: "Design Document [Use For Spring] (1).pdf",
        icon: "fa-solid fa-file-pdf",
        color: "#c0392b"
      }
    ],
    images: [
      { src: "images/space_cyclone_poster.jpg", caption: "Senior Design Capstone Poster — COSMIC Capstone Challenge (C3) Presentation" },
      { src: "images/design_doc_p35_img1.png", caption: "CAD Model — Magazine with Spring-Loaded Capsule Mechanism" },
      { src: "images/design_doc_p36_img1.png", caption: "CAD Model — Capsule with Cold-Gas Thrusters" },
      { src: "images/design_doc_p34_img1.png", caption: "CAD Model — Capsule Deployment Launcher" },
      { src: "images/design_doc_p46_img1.png", caption: "Electrical Prototype — Arduino + IR Sensor Integration" },
      { src: "images/design_doc_p47_img1.jpeg", caption: "Physical Prototype — Components Disassembled" },
      { src: "images/design_doc_p47_img2.jpeg", caption: "Physical Prototype — Magazine Housing Assembly" },
      { src: "images/design_doc_p49_img1.jpeg", caption: "Capture Net — Deployed with Weighted Corner Masses" },
      { src: "images/design_doc_p32_img1.png", caption: "Initial Design Sketch — Net Launcher Housing Concept" }
    ],
    shortDesc: "Autonomous satellite payload designed for orbital debris mitigation on the BCT X-SAT Venus Class bus targeting 10cm–1m debris in LEO via guided net-capture and controlled deorbit.",
    longDesc: "Space Cyclone is a self-contained autonomous payload designed for orbital debris mitigation, intended to be hosted on a BCT X-SAT Venus Class satellite bus. The system targets 10 cm to 1 meter debris in Low Earth Orbit (LEO) using guided net capturing followed by controlled deorbiting. The payload features a rotating magazine holding multiple self-propelled net capsules. Each capsule contains a folded net, onboard cold-gas thrusters, and infrared (IR) sensors to detect and track nearby debris. Upon launch, the magazine deploys a capsule in the direction of the target, which expands using centrifugal force. Using real-time feedback from IR sensors, the capsule adjusts its trajectory mid-flight, ensuring accurate debris capture. Once the debris is secured within the net, the capsule uses its thrusters to redirect the debris into a lower orbit, enabling passive atmospheric reentry and disintegration. After each deployment, the spring-loaded reloading mechanism rotates the next capsule into firing position, allowing the system to repeat this process autonomously without ground intervention.",
    tech: ["CAD Modeling (SolidWorks)", "Cold-Gas Thrusters", "IR Sensor Integration", "Space Systems Design", "ISAM Operations", "BCT X-SAT Bus Interface", "COSMIC Capstone Challenge"],
    metrics: [
      { label: "Target Debris", value: "10cm – 1m in LEO" },
      { label: "Satellite Bus", value: "BCT X-SAT Venus Class" },
      { label: "Challenge", value: "COSMIC C3 ISAM" },
      { label: "Operation", value: "Fully Autonomous" }
    ],
    architecture: `[Rotating Magazine] ──(Deploy Capsule)──> [Net Capsule (in-flight)]
                                                                 │
                                              ┌──────────────────┴──────────────────┐
                                              ▼ (Real-time feedback)                ▼
                                     [IR Sensor Array]                    [Cold-Gas Thruster Adjust]
                                              │                                      │
                                              └──────────┬───────────────────────────┘
                                                         ▼
                                                  [Net Expansion & Capture]
                                                         │
                                                         ▼  (Redirect via Thrusters)
                                                  [Controlled Deorbit]
                                                         │
                                                         ▼
                                          [Spring Reload → Next Capsule Ready]`,
    keyAccomplishments: [
      "Designed and prototyped a rotating magazine payload capable of deploying multiple self-propelled net capsules autonomously without ground intervention.",
      "Engineered net capsules equipped with onboard cold-gas thrusters and infrared (IR) sensors for real-time target tracking and trajectory correction in mid-flight.",
      "Achieved three continuous ISAM goals: autonomous target identification, debris capture via net expansion, and controlled orbital adjustment for passive reentry.",
      "Designed the mechanical net trigger and spring-loaded reloading mechanism using SolidWorks CAD, meeting strict LEO mass, volume, and power constraints for the BCT X-SAT bus.",
      "Coordinated with a multi-disciplinary team of Computer, Electrical, and Mechanical engineers through 10 weekly reports and 8 lightning talks.",
      "Delivered the project to meet COSMIC Capstone Challenge (C3) requirements for scalable, non-destructive orbital debris management solutions."
    ],
    directory: "ISU Senior Design Team sdmay25-09 | COSMIC Capstone Challenge"
  },
  {
    id: "rpc-system-monitoring",
    title: "Remote System Monitoring via RPC",
    type: "University Academic",
    categories: ["university", "hardware-systems"],
    shortDesc: "Built a multithreaded distributed client-server system in C to query real-time CPU and memory load of Linux hosts using RPC.",
    longDesc: "Designed and implemented a low-overhead system monitoring utility. The server extracts hardware load metrics directly from /proc virtual filesystems on Linux, packages them using XDR representations, and answers queries from remote clients via Remote Procedure Calls.",
    tech: ["C", "RPC (ONC/RPC)", "XDR Encoding", "Linux System APIs", "Multithreaded Programming", "Network Programming"],
    metrics: [
      { label: "Language", value: "C" },
      { label: "Encoding", value: "XDR Representation" },
      { label: "Host OS", value: "Linux Platforms" },
      { label: "Queries", value: "Real-time Polls" }
    ],
    architecture: `[Client Application] ──(RPC Query)──> [XDR Serialization] ──> [Network Socket]
                                                                                │
                                                                                ▼
     [Linux /proc Files] <──(Kernel Fetch)── [Query Handler] <── [RPC Server Daemon]`,
    keyAccomplishments: [
      "Designed a custom RPC interface definition file (.x) and compiled stubs using rpcgen to execute distributed queries.",
      "Leveraged Linux kernel systems programming to fetch real-time memory stats, load average metrics, and CPU usage fractions.",
      "Built a concurrent, multithreaded server daemon in C capable of handling concurrent queries from multiple client monitors."
    ],
    directory: "Iowa State University Coursework"
  },
  {
    id: "llm-bug-classification",
    title: "LLM-Based File System Bug Classification",
    type: "University Academic",
    categories: ["university", "cloud-data"],
    shortDesc: "Researched and built a natural language classification pipeline by fine-tuning LLMs on historical bug reports to predict file system bugs.",
    longDesc: "Conducted research on automating debugging workflows for operating systems. Fine-tuned pre-trained Large Language Models using datasets of file system patches and bug reports to classify software issues into logical modules.",
    tech: ["Python", "Hugging Face", "LLM Fine-Tuning", "PatchDB Dataset", "OS Bug Diagnostics"],
    metrics: [
      { label: "Core Dataset", value: "PatchDB / Bug Reports" },
      { label: "Goal", value: "Automatic Classification" },
      { label: "Automation", value: "NLP Debugging Pipelines" }
    ],
    architecture: `[Raw Git Commit Patches] ──> [Text Pre-processing] ──> [Feature Extraction]
                                                                               │
                                                                               ▼
     [OS Bug Classification] <──(Prediction)── [Fine-tuned LLM Model] <── [Training Loop]`,
    keyAccomplishments: [
      "Processed patch scripts and code changelogs into tokenized text sets compatible with transformer model structures.",
      "Fine-tuned pre-trained LLMs to detect filesystem bug categories, achieving high classification match against human-annotated labels.",
      "Evaluated performance characteristics and compared predictions to analyze bottlenecks in automated debugging workflows."
    ],
    directory: "Iowa State University Research Project"
  },
  {
    id: "grid-escape-simulation",
    title: "Pursue-Escape Grid Simulation",
    type: "University Academic",
    categories: ["university"],
    shortDesc: "Developed real-time adversarial agents using Greedy search and Minimax algorithms with depth-limited decision logic.",
    longDesc: "Implemented a multi-agent grid simulation in Python where pursue agents search for escaping targets. Programmed decision algorithms with depth constraints and custom spatial heuristics to evaluate optimal actions in real-time grid movements.",
    tech: ["Python", "Adversarial Search", "Minimax Algorithm", "Heuristic Evaluation", "Pathfinding Algorithms"],
    metrics: [
      { label: "Language", value: "Python" },
      { label: "Core Logic", value: "Depth-Limited Minimax" },
      { label: "Agents", style: "Adversarial Grid" }
    ],
    architecture: `[Grid Environment State] ──> [Heuristic Distance Calculation]
                                                      │
                                                      ▼
                                        [Adversarial Minimax Tree]
                                                      │ (Alpha-Beta Pruning)
                                                      ▼
                                        [Optimal Agent Decision Move]`,
    keyAccomplishments: [
      "Coded recursive depth-limited Minimax and Greedy search algorithms for multi-agent environments in Python.",
      "Designed and refined heuristic valuation formulas calculating spatial metrics like Manhattan distance and wall obstructions.",
      "Analyzed runtimes and agent win-loss percentages across various grid map difficulties."
    ],
    directory: "Local Workspace: Task3 (Logic)"
  },
  {
    id: "corba-order-system",
    title: "Distributed Order Management System",
    type: "University Academic",
    categories: ["university"],
    shortDesc: "Designed and implemented a client-server distributed system in Java using CORBA middleware.",
    longDesc: "Created a distributed client-server application implementing order operations, customer checkout systems, and manager inventory views. The system uses CORBA (Common Object Request Broker Architecture) for distributed node-to-node communication.",
    tech: ["Java", "CORBA Middleware", "Distributed Systems", "Object Request Broker", "Java IDL"],
    metrics: [
      { label: "Language", value: "Java" },
      { label: "Middleware", value: "CORBA (ORB Daemon)" },
      { label: "Role Models", value: "Customer / Manager Roles" }
    ],
    architecture: `[Customer Client Node] ──(Java IDL Call)──> [CORBA Object Broker (ORB)]
                                                                    │
                                                                    ▼
        [Distributed DB] <────────────────── [Java Server Object Implementation]`,
    keyAccomplishments: [
      "Define distributed service interfaces using Interface Definition Language (IDL) mapping variables to Java objects.",
      "Implemented thread-safe user management and manager interfaces supporting real-time tracking across client nodes.",
      "Managed distributed exception safety, transaction abort sequences, and remote state consistency."
    ],
    directory: "Iowa State University Distributed Programming Course"
  },
  {
    id: "autonomous-robot-simulation",
    title: "Autonomous Embedded Tree-Cutter",
    type: "University Academic",
    categories: ["university", "hardware-systems"],
    shortDesc: "Programmed real-time embedded control logic on hardware for an autonomous robot using UART-based sensor integrations.",
    longDesc: "This project focused on developing an autonomous robot designed to assist lumberjacks by simulating a tree-cutting environment. Our goal was to create a robot capable of navigating rough terrain and accurately identifying tree-like objects while avoiding hazards such as cliffs and other obstacles. We equipped the robot with UART sensors for detecting cliffs, measuring distances, and determining the width of objects, allowing it to identify and avoid areas unsafe for movement. The robot was successfully deployed and tested in a simulation environment where pipes were used to depict trees and cliff sensor tapes to display holes, where it demonstrated reliable navigation and obstacle detection, showcasing its potential as a supportive tool for lumberjacks in tree-cutting tasks.",
    tech: ["Embedded C", "UART Serial Protocol", "Micro-controllers", "Sensor Integration", "Hardware Debugging"],
    metrics: [
      { label: "Programming", value: "Bare-Metal Embedded C" },
      { label: "Serial Bus", value: "UART Protocol" },
      { label: "Hardware", value: "Cliff & Distance Sensors" }
    ],
    architecture: `[Sensors (Cliff/Distance)] ──(UART Serial)──> [Microcontroller Core]
                                                                    │
                                                                    ▼ (PWM Duty Signals)
                                                           [Motor Actuators (Drive)]`,
    keyAccomplishments: [
      "My role involved programming and integrating the UART sensors for cliff detection, distance measurement, and width analysis.",
      "Developed algorithms to interpret sensor data, enabling the robot to navigate accurately and identify obstacles like cliffs and pipes.",
      "Collaborated closely with my team to refine the navigation system and ensure smooth wireless communication setup for remote control and monitoring.",
      "Gained hands-on experience in sensor integration and calibration, navigation algorithms, and wireless communication configurations."
    ],
    directory: "Iowa State University Lab Project"
  },
  {
    id: "globe-gatherer-android",
    title: "Globe Gatherer Travel Application",
    type: "University Academic",
    categories: ["university"],
    shortDesc: "Contributed to a team-based Android travel assistant application developed in Java.",
    longDesc: "This project was focused on creating a travel itinerary planning app that offers a feature-rich experience with integrated maps, social features, and an intuitive interface. The app enables users to easily organize trips, interact with other travelers, and access relevant destination information. This project’s potential impact goes beyond the classroom, with real-world applications that could genuinely enhance the travel experience for users.",
    tech: ["Java", "Android Studio", "Android SDK", "Git", "CI/CD", "WebSockets", "SQLite"],
    metrics: [
      { label: "Platform", value: "Android SDK" },
      { label: "Frontend role", value: "UI/UX Layouts" },
      { label: "Real-time data", value: "WebSockets" }
    ],
    architecture: `[Android Mobile UI] ──> [Local SQLite SQLiteOpenHelper]
                                      │
                                      ▼ (REST API)
                             [Remote Backend API]`,
    keyAccomplishments: [
      "As a frontend developer, worked closely with another teammate to implement user interface components and ensure a smooth and visually appealing experience.",
      "Primary contributions included creating seamless navigation, building layouts, and focusing on the usability of the app’s interface.",
      "Through this project, developed technical skills in Android Studio, Git for version control, CI/CD workflows, and WebSockets for real-time transmission.",
      "Gained valuable experience in time management, task division, and feature development in team environments."
    ],
    githubUrl: "https://github.com/TanviMehetre/Assignment_02",
    directory: "Iowa State University Team Software Engineering Project"
  },
  {
    id: "meal-planner-app",
    title: "Smart Meal Planner Web App",
    type: "Personal Project",
    categories: ["university"],
    githubUrl: "https://github.com/TanviMehetre/Meal-Planner",
    shortDesc: "A full-stack meal planning web application with a Node.js/Express backend and a dynamic JavaScript frontend that fetches recipes from an external API.",
    longDesc: "Designed and built a complete meal planning application featuring interactive ingredient-based recipe search, weekly meal scheduling, and a shopping list generator. The app leverages an Express.js API server as a backend proxy to securely fetch recipe data from a third-party external API, avoiding CORS issues on the client-side. The frontend features a clean, responsive layout built from scratch with vanilla HTML, CSS, and JavaScript.",
    tech: ["Node.js", "Express.js", "JavaScript (Vanilla)", "HTML5", "CSS3", "REST API Integration", "npm"],
    metrics: [
      { label: "Backend", value: "Node.js / Express" },
      { label: "Frontend", value: "Vanilla JS / HTML / CSS" },
      { label: "API Source", value: "External Recipe API" },
      { label: "Platform", value: "GitHub Hosted" }
    ],
    architecture: `[Browser (HTML/CSS/JS)] ──(Fetch Request)──> [Express.js Server (server.js)]
                                                                    │
                                                                    ▼  (Proxy API Request)
                                                           [External Recipe API]
                                                                    │
                                                                    ▼
                                                           [JSON Response ──> UI Render]`,
    keyAccomplishments: [
      "Built a full-stack meal planning web application from scratch using vanilla JavaScript, HTML5, and CSS3 for the frontend.",
      "Implemented an Express.js server (server.js) as an API proxy layer to securely call external recipe REST APIs without exposing keys client-side.",
      "Designed interactive UI components for dynamic recipe search by ingredient, weekly schedule planning, and auto-generated grocery shopping list creation.",
      "Structured the project with clean code separation between server logic (server.js), client interactivity (index.js), and UI markup (index.html)."
    ],
    directory: "Personal GitHub Project — TanviMehetre/Meal-Planner"
  }
];

// ==========================================================================
// Initialization & Events
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initProjectsGrid();
  initFilters();
  initModals();
  initContactForm();
  initScrollSpy();
});

// ==========================================================================
// Navbar Styling on Scroll & Mobile Toggle
// ==========================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = navToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Close mobile menu when link clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.querySelector("i").className = "fa-solid fa-bars";
    });
  });
}

// ==========================================================================
// Render Projects Cards Grid
// ==========================================================================
function initProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  projectsData.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-id", proj.id);
    card.setAttribute("data-categories", proj.categories.join(" "));

    // Generate tags HTML
    const tagsHTML = proj.tech.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="project-body">
        <div class="project-meta">
          <span class="project-type">${proj.type}</span>
          <span class="badge">${proj.categories.includes("cloud-data") ? "Cloud/Data" : proj.categories.includes("hardware-systems") ? "Hardware/System" : "Software"}</span>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="project-tags">
          ${tagsHTML}
          ${proj.tech.length > 4 ? `<span class="project-tag">+${proj.tech.length - 4} more</span>` : ""}
        </div>
        <div class="project-footer">
          <span class="project-link">
            Learn Details &amp; Architecture <i class="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ==========================================================================
// Filter Projects Categories
// ==========================================================================
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const categories = card.getAttribute("data-categories").split(" ");

        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "flex";
          // Subtle fade-in transition
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ==========================================================================
// Project Details & Resume Modals
// ==========================================================================
function initModals() {
  const projectModal = document.getElementById("project-modal");
  const resumeModal = document.getElementById("resume-modal");

  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOverlayClose = document.getElementById("modal-overlay-close");

  const resumeCloseBtn = document.getElementById("resume-close-btn");
  const resumeOverlayClose = document.getElementById("resume-overlay-close");

  const viewResumeBtn = document.getElementById("view-resume-btn");
  const modalBodyContent = document.getElementById("modal-body-content");

  // Close modals helper
  const closeAllModals = () => {
    projectModal.classList.remove("active");
    resumeModal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable background scrolling
  };

  // Close bindings
  modalCloseBtn.addEventListener("click", closeAllModals);
  modalOverlayClose.addEventListener("click", closeAllModals);
  resumeCloseBtn.addEventListener("click", closeAllModals);
  resumeOverlayClose.addEventListener("click", closeAllModals);

  // Close modals on ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });

  // Open Resume Modal
  viewResumeBtn.addEventListener("click", () => {
    resumeModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll
  });

  // Open Project Details Modal on Card Click
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-id");
      const project = projectsData.find(p => p.id === projId);

      if (project) {
        populateProjectModal(project, modalBodyContent);
        projectModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable scroll
      }
    });
  });
}

function populateProjectModal(project, container) {
  // Generate tech list badges
  const techHTML = project.tech.map(t => `<span class="badge">${t}</span>`).join(" ");

  // Generate stats cards
  const statsHTML = project.metrics.map(m => `
    <div class="modal-stat-card">
      <div class="modal-stat-value">${m.value}</div>
      <div class="modal-stat-label">${m.label}</div>
    </div>
  `).join("");

  // Generate accomplishments list
  const bulletsHTML = project.keyAccomplishments.map(bullet => `<li>${bullet}</li>`).join("");

  // Generate architecture block if it exists
  let architectureHTML = "";
  if (project.architecture) {
    // Escape standard symbols to look clean
    const formattedArch = project.architecture
      .replace(/──>/g, '<span class="flow-conn">──&gt;</span>')
      .replace(/<──/g, '<span class="flow-conn">&lt;──</span>')
      .replace(/──/g, '<span class="flow-conn">──</span>')
      .replace(/│/g, '<span class="flow-conn">│</span>')
      .replace(/▼/g, '<span class="flow-conn">▼</span>')
      .replace(/▲/g, '<span class="flow-conn">▲</span>')
      .replace(/┌/g, '<span class="flow-conn">┌</span>')
      .replace(/┐/g, '<span class="flow-conn">┐</span>')
      .replace(/└/g, '<span class="flow-conn">└</span>')
      .replace(/┘/g, '<span class="flow-conn">┘</span>')
      .replace(/┴/g, '<span class="flow-conn">┴</span>')
      .replace(/├/g, '<span class="flow-conn">├</span>')
      .replace(/┤/g, '<span class="flow-conn">┤</span>')
      .replace(/┬/g, '<span class="flow-conn">┬</span>')
      .replace(/\[([^\]]+)\]/g, '<span class="flow-node">[$1]</span>');

    architectureHTML = `
      <div class="modal-section">
        <h4>System Architecture Diagram</h4>
        <pre class="architecture-diagram">${formattedArch}</pre>
      </div>
    `;
  }

  // Generate image gallery if project has images
  let galleryHTML = "";
  if (project.images && project.images.length > 0) {
    const thumbnailsHTML = project.images.map((img, idx) => `
      <div class="gallery-item" onclick="openLightbox('${img.src}', '${img.caption.replace(/'/g, "\\'")}')">
        <img src="${img.src}" alt="${img.caption}" loading="lazy" />
        <div class="gallery-caption">${img.caption}</div>
      </div>
    `).join("");

    galleryHTML = `
      <div class="modal-section">
        <h4><i class="fa-solid fa-images"></i> Project Gallery</h4>
        <div class="project-gallery">
          ${thumbnailsHTML}
        </div>
      </div>
    `;
  }

  // Generate project documents if available
  let documentsHTML = "";
  if (project.documents && project.documents.length > 0) {
    const cardsHTML = project.documents.map(doc => `
      <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="design-doc-link">
        <div class="design-doc-card">
          <i class="${doc.icon || 'fa-solid fa-file'} design-doc-icon" style="${doc.color ? `color: ${doc.color};` : ''}"></i>
          <div class="design-doc-info">
            <span class="design-doc-title">${doc.title}</span>
            <span class="design-doc-subtitle">${doc.subtitle}</span>
          </div>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </a>
    `).join("");

    documentsHTML = `
      <div class="modal-section">
        <h4><i class="fa-solid fa-file-invoice"></i> Project Resources & Reports</h4>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          ${cardsHTML}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="modal-header-section">
      <span class="modal-proj-type">${project.type}</span>
      <h3 class="modal-proj-title">${project.title}</h3>
      <div class="modal-tech-list">
        ${techHTML}
      </div>
      <div class="badge" style="background-color: var(--color-cream-dark); color: var(--color-dark-green); border: none;">
        <i class="fa-solid fa-folder-open"></i> ${project.directory}
      </div>
    </div>

    <div class="modal-section">
      <h4>Project Summary</h4>
      <p class="about-text">${project.longDesc}</p>
    </div>

    <div class="modal-section">
      <h4>Key Project Metrics</h4>
      <div class="modal-highlight-grid">
        ${statsHTML}
      </div>
    </div>

    ${architectureHTML}

    ${galleryHTML}

    ${documentsHTML}

    <div class="modal-section">
      <h4>Technical Accomplishments & Impact</h4>
      <ul class="modal-desc-list">
        ${bulletsHTML}
      </ul>
    </div>

    <div class="modal-actions">
      <button class="btn btn-primary" onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow = '';">
        Back to Gallery
      </button>
      ${project.githubUrl ? `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color: var(--color-sage); color: var(--color-sage);">
        <i class="fa-brands fa-github"></i> View on GitHub
      </a>` : ''}
      ${project.seniorDesignUrl ? `
      <a href="${project.seniorDesignUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color: var(--color-gold); color: var(--color-gold);">
        <i class="fa-solid fa-rocket"></i> Senior Design Website
      </a>` : ''}
      <a href="#contact" class="btn btn-outline" style="border-color: var(--color-sage); color: var(--color-sage);" onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow = '';">
        Inquire About This Project
      </a>
    </div>
  `;
}

// ==========================================================================
// Contact Form Mock Submission
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitBtn = document.getElementById("form-submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Disable inputs & show sending state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    feedback.style.display = "block";
    feedback.textContent = "Sending message...";
    feedback.className = "form-feedback-message";

    // Gather form values
    const formData = {
      name: document.getElementById("form-name").value,
      email: document.getElementById("form-email").value,
      subject: document.getElementById("form-subject").value,
      message: document.getElementById("form-message").value
    };

    // Send via AJAX to FormSubmit
    fetch("https://formsubmit.co/ajax/tanvi.mehetre03@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Unable to send message.");
      })
      .then(data => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

        feedback.textContent = "Thank you! Your message has been sent successfully. Tanvi will get back to you shortly.";
        feedback.className = "form-feedback-message success";

        // Auto-hide feedback after 6 seconds
        setTimeout(() => {
          feedback.style.display = "none";
        }, 6000);
      })
      .catch(error => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

        feedback.textContent = "Oops! There was a problem sending your message. Please try again or contact me directly.";
        feedback.className = "form-feedback-message error";

        setTimeout(() => {
          feedback.style.display = "none";
        }, 6000);
      });
  });
}

// ==========================================================================
// ScrollSpy Navigation Active Highlight
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Triggers active state when section is 150px from top
      if (window.scrollY >= (sectionTop - 150)) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// Image Lightbox for Project Gallery
// ==========================================================================
function openLightbox(src, caption) {
  // Remove existing lightbox if any
  const existing = document.getElementById("image-lightbox");
  if (existing) existing.remove();

  const lightbox = document.createElement("div");
  lightbox.id = "image-lightbox";
  lightbox.className = "lightbox-overlay";
  lightbox.innerHTML = `
    <div class="lightbox-backdrop" onclick="closeLightbox()"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close lightbox">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <img src="${src}" alt="${caption}" class="lightbox-image" />
      <p class="lightbox-caption">${caption}</p>
    </div>
  `;
  document.body.appendChild(lightbox);

  // Animate in
  requestAnimationFrame(() => {
    lightbox.classList.add("active");
  });

  // Close on ESC
  const escHandler = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      window.removeEventListener("keydown", escHandler);
    }
  };
  window.addEventListener("keydown", escHandler);
}

function closeLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    setTimeout(() => lightbox.remove(), 300);
  }
}
