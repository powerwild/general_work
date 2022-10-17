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
