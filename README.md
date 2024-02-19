# Über dieses Projekt

Dieser CV dient als Übungsprojekt um Erfahrungen in der Entwicklung und vor allem mit verschiedenen AWS Services zu sammeln. Im Folgenden beschreibe ich die verwendeten Services und wie sie zusammenhängen.

Der Webservice besteht aus einem Angular Frontend und einem NodeJS Express Backend. Die Inhalte des Lebenslaufes werden aus einer DynamoDB Datenbank bezogen. Der Sourcecode liegt in einem GitHub Repository.

Der Server wird in einem Docker Container auf mindestens einer AWS EC2 Instance gehostet. Die genaue Anzahl der EC2 Instances wird durch eine Auto Scaling Group verwaltet, die die Instances in bis zu drei Availability Zones verteilt. Der Container wird durch ein Cluster in AWS Elastic Container Service (ECS) verwaltet. Das dazugehörige Docker Image wird in einem privaten Repository im AWS Elastic Container Registry (ECR) gehostet.

Die gesamte Infrastruktur befindet sich in einer VPC. Die VPC ist durch ein Internet Gateway mit dem Internet verbunden. Der Traffic zum Server wird durch einen Application Load Balancer verteilt. Die Domain alexandergoertz.com ist bei Route53 registriert. Die notwendigen A-Records für die DNS Auflösung zur IP-Adresse des Load Balancers sind ebenfalls in Route53 hinterlegt. Um HTTPS Traffic zu ermöglichen, wurde ein SSL Zertifikat über den AWS Certificate Manager erstellt. Die Authentifizierung für alexandergoertz.com wurde durch Amazon Cognito erstellt und über den Load Balancer integriert.

Via Amazon CodePipeline wurde eine CI/CD Pipeline erstellt. Sobald Änderungen am Sourcecode in den Master Branch im GitHub Repository gepusht werden, wird die Pipeline ausgelöst. Zunächst wird durch Amazon CodeBuild ein neues Docker Image erstellt und in ECR gepusht. Danach bezieht ECS das neue Image aus ECR und deployed es durch ein Rolling Update auf den laufenden EC2 Instances.

## Übersicht verwendeter AWS Services:

DynamoDB
EC2
ECS
ECR
VPC
Route53
ACM
Cognito
CodePipeline
CodeBuild

## Geplante Änderungen

Front- und Backend in separate Container aufteilen.
Die gesamte Infrastruktur in Terraform bereitstellen.
