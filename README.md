# Blox Assignement

I have created two databases to solve the question no 2 and 5. I have completely configured the server with migeration and seeder so that it will be easy to run this project<br>

<h1>Question 1 answers</h1>

<h3>a. What did the system do?</h3>
<p>
I started my career as a freelancer, and one of my early projects was for a trust organization dedicated to helping financially underprivileged individuals in areas like education, medical aid, and welfare. The organization was facing significant challenges in managing their processes, particularly in the domains of scholarship disbursement, loan recovery, and record management.

At the time, they relied on a manual system to maintain records, which made it extremely tedious to handle tasks like storing, searching, and retrieving student data. For instance, finding the record of a student who had received a scholarship a decade ago would take considerable time and effort. Additionally, they wanted to query data, such as identifying the number of beneficiaries from a single family—something that was nearly impossible with their existing system. To address these issues, I developed a centralized digital system to streamline their processes.

The software I built covered three core sections: Education, Medical, and Welfare. The first module I developed, was the Education Module, focusing on scholarships and loans. It was designed to replace the manual file-based system and provide a more efficient and user-friendly workflow.

**How the System Works:**<br>
The system consists of various user panels designed for different roles within the organization, including:

Data Entry Panel<br>
HOD (Head of Department) Panel<br>
CEO Panel<br>
Trustee Panel<br>
Accounts Panel<br>
Administrator Panel<br>
**Here’s how the process flows through the system:**<br>

1. Application Submission and Initial Processing<br>
A student applying for a scholarship submits a physical form to the Data Entry Operator (DEO).<br>
The DEO inputs the student’s details into the system and initiates the application process.<br>
2. Review and Approval Workflow<br>
The application is forwarded to the HOD for review. If the HOD identifies any discrepancies or requires additional information, they can return the application to the DEO with remarks.
The DEO makes the necessary corrections and resubmits the form to the HOD.
Once the HOD is satisfied, they either approve or reject the form. If the scholarship amount exceeds a predefined limit, the HOD recommends the application to a higher authority (e.g., CEO or Trustee).
This approval workflow continues through the CEO and Trustee, depending on the application's specifics.<br>
3. Accounts Processing<br>
Approved applications are sent to the Accounts Panel, where the operator generates a list of bank details, including student identifiers, for processing payments.
This list is sent to the bank, which returns a statement indicating the status of payments.
Based on the bank’s response, the account operator updates the system. If payments fail due to incorrect details, the application is sent back to the DEO for correction, restarting the loop until the issue is resolved.<br>
4. Administrative Oversight<br>
The Administrator Panel enables the tracking of user activity and credential management.
When a new employee joins the organization, the admin issues a unique username. The employee can then register and set a password using a login/registration page.
If an employee misuses their credentials, the administrator can deactivate their account to prevent unauthorized actions.<br>
**Key Features and Benefits**<br>
**Centralized Database:** A unified system to manage all records, making data retrieval fast and efficient.<br>
**Role-Based Workflow:** Each user role has specific permissions and tasks, ensuring a structured and secure process.<br>
**Error Resolution:** The feedback loop between the DEO and Accounts ensures corrections are made promptly for payment failures.<br>
**User Management:** The administrator can monitor activities, issue credentials, and take corrective actions as needed.<br>
**Time Efficiency:** By digitizing the entire process, the organization has significantly reduced the time required for record management and decision-making.<br>

This system has transformed the way the trust organization operates, especially in managing its education initiatives. By replacing the cumbersome manual process with a centralized and automated solution, the organization can now efficiently handle complex workflows, ensure data accuracy, and focus more on helping those in need.
</p>

<h3>b. What other systems have you seen in the wild like that? </h3>
<p>
The system I developed shares similarities with several types of real-world systems designed to streamline workflows, manage records, and handle approvals efficiently. Here are some examples of systems "in the wild" that resemble aspects of your project:

1. Enterprise Resource Planning (ERP) Systems Example: ERP solutions like Microsoft Dynamo 365.
Similarities:
    a. Centralized data storage across multiple departments.
    b. Role-based access and detailed workflow management.
    c. Audit and activity tracking for compliance.
Differences:
ERP systems are broader and include modules for HR, inventory, procurement, and more, whereas my system focuses on a niche workflow.

How I know differences?
Because I had the opportunity to work on an ERP-like project in my current organization, I understand the differences between the system I developed during my freelancing career and a full-fledged ERP system.
</p>

<h3>c. How do you approach the development problem?</h3>
<p>
When I received the trust organization project, my first step was to carefully analyze the requirements and decide which technologies would be best suited to solve the problem effectively. The selection of technology was based on various factors, including:

Project requirements: The volume of data to be handled, features needed, and expected system performance.
UI/UX considerations: Ensuring an intuitive and user-friendly interface for the end users.
Scalability and future needs: Considering the possibility of expanding features in the future.

For example, if the project involves real-time data processing and predictive analytics, I would opt for a technology stack like Node.js for handling real-time operations and Python for prediction algorithms and machine learning models. However, for this specific project, the focus was on data management and workflows, so I chose technologies that provided robust database management, smooth workflows, and a structured backend architecture.
</p>

<h3>d. What were interesting aspects where you copied code from Stack Overflow?</h3>
<p>
I found a Stack Overflow snippet for dynamically rendering data tables in Angular. It handled edge cases like sorting and pagination, which were crucial for our dashboard. I modified the code to integrate it with our API responses and added custom styles.
</p>

<h3>e. What did you learn from some very specific copy-paste? Mention explicitly some of them</h3>
<p>
One specific instance where I faced a challenge was in understanding the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) and how SSR could be implemented in Angular. Initially, I struggled to grasp the concept and its practical application. However, I came across a solution that guided me through the process of implementing SSR in Angular for specific pages.

Although I didn’t fully understand the concepts at the beginning, completing the implementation helped me gain a clear understanding of how Angular SSR works and how to configure pages for SSR. This experience not only enhanced my knowledge of SSR but also taught me how it can significantly improve website performance by optimizing initial page load times and making the site more SEO-friendly.

I later applied this knowledge to successfully develop Angular websites with SSR-enabled pages, ensuring better performance and user experience..
</p>




# Technology Used
1. NodeJS 
2. ExpressJs 
3. Prisma
3. Postgres

<h1>Getting Started</h1>
<p>These instructions will get you a copy of the project up and running on your local machine for development .</p>

<h2>Prerequisites</h2>
<code>node == v18.20.6 or up</code>
<code>ExpressJs v4.16.1</code>


<h2>Installing</h2>
<pre>open terminal and type</pre>
<code>git clone https://github.com/Mohammad-Sufiyan/blox-assignement.git</code><br><br>

<h4>or simply download using the url below</h4>
<code>https://github.com/Mohammad-Sufiyan/blox-assignement.git</code><br>

<h2>Change the following env variable with your postgress URL settings</h2>
<code>
DATABASE_URL_LOCAL="postgresql://username:password@localhost:portnumber/db1?schema=public"
DATABASE_URL_CLOUD="postgresql://username:password@localhost:portnumber/db2?schema=public"</code><br>

<h2>Run the following commands in your terminal</h2>
<code>cd project-folder-name</code><br>
<code>npm i</code><br>

<h2>Run the following commands for migration one by one</h2>
<code>npx prisma generate --schema=prisma/local/schema.prisma</code><br>
<code>npx prisma generate --schema=prisma/cloud/schema.prisma</code><br>
<code>npx prisma migrate dev --schema=prisma/local/schema.prisma</code><br>
<code>npx prisma migrate dev --schema=prisma/cloud/schema.prisma</code><br>

<h2>Run the following commands for seeder one by one</h2>
<code>npm run seederDB1</code>
<code>npm run seederDB2</code>

<h2>if you have faced any error for seeder then run following command</h2>
<code>chmod +x prisma/local/seed.js</code>
<code>chmod +x prisma/cloud/seed.js</code>


<h2> To run the program in local use the following command in your terminal </h2>
<code>npm start</code><br.>

<p>Then go to http://127.0.0.1:3030/ in your Postman</p><br>

<h2>To Verify the Question Number 2 impelemetaion</h2>

<p>
As per the question, we have two databases involved in the solution: one local and one cloud-based. Unfortunately, I do not have access to a live environment to implement this setup. Therefore, I have created two databases, treating one as local and the other as cloud-based, to simulate the required environment.
</p>
<cod>
There are Four GET API to check<br>
1. http://127.0.0.1:3030/api/count/tableName<br>
2. http://127.0.0.1:3030/api/rows/tableName<br>
3. http://127.0.0.1:3030/api/sample/tableName<br>
4. http://127.0.0.1:3030/api/checksum/tableName<br>
5. http://127.0.0.1:3030/api/schema/tableName<br>


Here tablename passing as parameter So please make sure to pass tablename as (sampletable) which is in our migration
</code>


<h2>To Verify the Question Number 5 impelemetaion</h2>

<p>To address the problem, we consider a scenario involving two banks: Bank A and Bank B. Each bank maintains its own separate database to manage accounts and transactions. Since the sender and receiver have accounts in different banks, I have designed the solution using two distinct databases: one local(db1) database representing Bank A, and a cloud-hosted(db2) database representing Bank B.

To implement this solution, I have structured the databases with the following four tables and their relationships:

User: Stores information about the account holders.
Account: Represents individual bank accounts, linked to users and banks.
Bank: Contains details of the banks involved.
AccountTransaction: Tracks all transactions, ensuring records are reflected in both banks (i.e., both databases).
When a transaction occurs between accounts in different banks, the corresponding transaction details are recorded in the AccountTransaction table of both databases to ensure consistency and maintain a clear audit trail.
</p>
<cod>
There are One POST API to check<br>
1. http://127.0.0.1:3030/api/transaction/transfer<br><br>
<code>req{
    "fromAccountId":1,
    "toAccountId":3,
    "amount":10,
    "userId":1
}</code><br>
<code>res{
    "message": "Transaction successful"
}</code>

You can use same value as i provided in above request becuase req which i have given is same as which i have store in seeder
</code>

<h2>Author</h2>
<blockquote>

  Mohammad Sufiyan<br>
  Email:mdsufiyanidrisi786@gmail.com<br>

</blockquote>

<div align="center">
    <h3>========Thank You !!!=========</h3>
</div>
