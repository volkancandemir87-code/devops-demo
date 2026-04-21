# 🚀 DevOps Öğrenme Yolculuğu — Volkan Can Demir

Sıfırdan Junior DevOps mühendisliği hedefiyle ~8 ayda tamamlanan pratik çalışmalar.

## ✅ Tamamlanan Konular

### 1. 🐧 Linux Temelleri
- Temel komutlar, dosya sistemi yönetimi
- Kullanıcı ve yetki yönetimi
- Dosya sistemi tipleri: ext4, xfs, btrfs, LVM snapshot

### 2. 🐳 Docker
- Dockerfile yazımı ve image build
- Docker Hub'a push (myprecious1987/speedtest:v1)
- Container yönetimi

### 3. ☸️ Kubernetes (K3s)
- Namespace, Deployment, Service, Ingress
- YAML manifest dosyaları
- Pod troubleshooting
- Multi-node cluster (Master + Worker)

### 4. 🌐 Nginx & High Availability
- Nginx web server ve reverse proxy
- HAProxy load balancer
- Keepalived ile VIP ve failover
- 2 sunuculu HA mimarisi

### 5. ⚙️ CI/CD Pipeline (GitHub Actions)
- Self-hosted runner kurulumu
- Docker build → push → Kubernetes deploy otomasyonu
- GitHub Secrets yönetimi
- Otomatik pipeline: git push → canlıya al

### 6. 📊 Monitoring (Prometheus + Grafana)
- Helm ile kube-prometheus-stack kurulumu
- Grafana dashboard ile CPU/Memory/Pod izleme
- NodePort ile dışarıya açma

### 7. 🏗️ Infrastructure as Code (Terraform)
- Docker provider ile container yönetimi
- terraform init / plan / apply / destroy döngüsü
- Altyapıyı kod olarak yönetme

### 8. ☁️ AWS (Amazon Web Services)
- IAM kullanıcı ve Access Key yönetimi
- EC2 instance oluşturma (CLI ile)
- S3 bucket ve statik website hosting
- VPC, Subnet, Internet Gateway, Route Table
- Security Group ile firewall yönetimi

### 9. ☁️ GCP (Google Cloud Platform)
- gcloud CLI kurulumu ve auth
- Compute Engine VM oluşturma
- Firewall kuralları
- Nginx ile web server kurulumu

## 🏗️ Genel Mimari
GitHub (Kod)
↓ git push
GitHub Actions (CI/CD)
↓ Self-hosted Runner
Docker Hub → myprecious1987/devops-demo
↓ kubectl apply
Kubernetes / K3s Cluster (192.168.217.128)
├── devops-demo → Node.js Uygulaması (port 30090)
├── speedtest → Speedtest (speedtest.kultur.gov.tr)
├── monitoring → Prometheus + Grafana (port 30091)
└── kube-system → K3s sistem servisleri

Cloud Ortamları:
├── AWS → EC2 + S3 + VPC (eu-north-1)
└── GCP → Compute Engine + Nginx (europe-north1)


## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| Linux (Ubuntu 22.04) | Temel işletim sistemi |
| Docker | Container yönetimi |
| Kubernetes (K3s) | Container orchestration |
| Nginx | Web server / Reverse proxy |
| HAProxy | Load balancer |
| Keepalived | High availability / VIP |
| GitHub Actions | CI/CD pipeline |
| Prometheus | Metrik toplama |
| Grafana | Metrik görselleştirme |
| Terraform v1.14.8 | Infrastructure as Code |
| AWS (EC2, S3, VPC) | Cloud altyapısı |
| GCP (Compute Engine) | Cloud altyapısı |
| Node.js | Uygulama runtime |
| Helm | Kubernetes paket yöneticisi |

## 📁 Proje Yapısı

devops-demo/
├── app.js # Node.js uygulaması
├── Dockerfile # Container tarifi
├── README.md # Bu dosya
├── k8s/
│ ├── namespace.yaml
│ ├── deployment.yaml
│ └── service.yaml
├── .github/
│ └── workflows/
│ └── ci-cd.yaml # GitHub Actions pipeline
└── terraform-demo/
└── main.tf # Terraform IaC örneği


## 🎯 Öğrenme Hedefi

**8 ay içinde Junior DevOps Mühendisi seviyesine ulaşmak.**

### Sıradaki Konular:
- 🔐 Security & Secrets Management (Vault, SOPS)
- 📝 Advanced Alerting (PagerDuty, Slack entegrasyonu)
- ☁️ Azure (kota sorunu çözüldükten sonra)
- 🔄 GitOps (ArgoCD / Flux)

## 👤 Hakkımda

DevOps mühendisliği öğrenme yolculuğumda pratik projeler geliştiriyorum.

- 🐙 GitHub: [volkancandemir87-code](https://github.com/volkancandemir87-code)
- 🐳 Docker Hub: [myprecious1987](https://hub.docker.com/u/myprecious1987)
