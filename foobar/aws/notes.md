AWS ELASTIC BEANSTALK

1. Platform as a Service
2. Allows quick deployment of your application
3. Reduces managment complexity
4. Keeps control in your hands
    choose your instance type
    choosed your database
    set and adjust auto scaling
    update your application
    access server log files
    enable https on load balancer
5. Supports a large range of platforms
    packer builder
    single container, multicontainer or preconfigured docker
    Go
    Jave SE
    Java with Tomcat
    .NET on Windows Server with IIS
    Node.js
    PHP
    Python
    Ruby
6. Easily Implemented (You only need to worry about your code and the implementation of AWS)
    application service
    http service
    operating system
    language interpreter
    host
7. Update your application as easily as you deployed it
    create the application
    upload version
    launch environment (only on intial launch)
    manage environment (circles between upload and manage after initial launch)


START

1. navigate to aws services and search elastic beanstalk
2. create new application
3. enter application name and description
4. create the environment
5. can create custom domain
6. select computing language
7. upload the code folder/file



AWS COMPUTE SERVICES

1. Instance Types
    Amazon EC2(elastic compute cloud)
        computing optimized
        memory optimized
        strorage optimized
    AWS Elastic Beanstalk
2. Containers
    Amazon ECS (elastic container service)
    Amazon EKS (elastic kubernetes service)
3. Serverless
    AWS Lambda
        runs on events etc
    AWS Fargate
        for containers


AWS STORAGE AND DATABASE SERVICES

1. Storage
    Amazon S3
        media hosting
        software delivery
        data backup
2. Relational
    Amazon RDS(relational database service)
        provisioning and patching
        backup and recovery
        failure detection and repair
        databases
            amazon aurora
                ecommerce
                ERP(enterprise resource planning)
                CRM(customer relationship management)
            postgresql
            mysql
            mariadb
            oracle database
            microsoft sql server
3. Non-relational
    Amazon DynamoDB
        web apps
        ecommerce
        game apps


AWS IDENTITY SERVICES

1. AWS Identity and Access Management
    create and manage aws users in groups
    create roles and access for users and applications
2. AWS Directory Service
3. Amazon Cognito
    sign in through social identity providers
        google
        facebook
        etc


AWS Monitoring and auditing services

1. Amazon CloudWatch
    alarms and logs for keeping your app running smoothly
2. AWS CloudTrail
    records action taken via application, command lines, etc


DEVELOPER TOOLS

1. AWS SDK
    makes calling an aws service as easy as calling a method on an object
2. AWS Toolkit for Visual Studio
3. AWS Toolkit for Visual Studio Code
4. AWS Toolkit for JetBrains Rider
5. AWS Tools for PowerShell
6. AWS Command Line Interface
7. .NET Core CLI
8. AWS Toolkit for Azure DevOps
9. AWS CDK


PASSED ASSESSMENT WITH 90%


DEVOPS - Improves the pace at with development, delivery and evolving/improving happens to better serve customers and compete in the market.

1. Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor -> REPEAT
2. Dev -> Developers: change things quickly, release often, measure success by rate of delivery
3. Ops -> Operations: maintain the stability of the application
4. DevOps combines siloed roles to optimize productivity and reliability: development, IT operations, quality engineering and security
5. Cultural philosophies for removing barriers and sharing end-to-end resposibility
6. Processes developed for speed and quality
7. Tools that align with processes and automate repeatable tasks, improving the release process and application reliability

Problems - waterfall development, monolithic applications, manual processes and siloed teams cause bottlenecks and delays
    Waterfall development projects
        slow, not iterative, resisitant to change and have long release cycles
        requirements are rigid, set at project start and will likely not change
        development phases are siloed and only start after the previous phase has ended. hand offs to the next phase are often long
        testing and security come after implementation, making corrective actions responsive and expensive

    Monolithic applications - hard to deploy and update
        developed and deployed as a single unit, so when changes are made the entire application must be redeployed
        has tightly coupled functionality, so maintenance often requires understanding of entire application
        uses a single tech stack so changing techs is difficult and expensive

    Manual processes
        slow, inconsistent and error-prone
            example: manually setting and configuring the infrastructure is time-consuming
        manually repeating processes is no guarantee that a step will not be missed
            example: thoroughly testing code is slow and does not guarantee that a test or two will not be missed

    Siloed teams - business, development, quality assurance, specialists, maintenance and operations
        requires sheduled and rigid hand offs
        each team has own priorities, tools and processes
        reduces efficiency when project members are reporting to different units and aimed at different results
