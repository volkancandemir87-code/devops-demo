# 🚀 DevOps Demo Project

Bu proje, sıfırdan Junior DevOps mühendisliği öğrenme sürecinde tamamlanan pratik çalışmaları içermektedir.

## 📋 Tamamlanan Konular

### 1. 🐧 Linux Temelleri
- Temel Linux komutları
- Dosya sistemi yönetimi (ext4, xfs, btrfs, LVM snapshot)
- Kullanıcı ve yetki yönetimi

### 2. 🐳 Docker
- Dockerfile yazımı
- Image build ve tag işlemleri
- Docker Hub'a push
- Container yönetimi

### 3. ☸️ Kubernetes (K3s)
- Namespace, Deployment, Service, Ingress kavramları
- YAML manifest dosyaları yazımı
- kubectl komutları
- Pod troubleshooting (InvalidImageName, CrashLoopBackOff)

### 4. 🌐 Nginx & Reverse Proxy
- Nginx kurulumu ve yapılandırması
- Reverse proxy kavramı
- HAProxy ve Keepalived ile High Availability kurulumu
- Virtual IP (VIP) ve failover testi

### 5. ⚙️ CI/CD Pipeline (GitHub Actions)
- GitHub Actions workflow yazımı
- Self-hosted runner kurulumu
- Docker build → push → Kubernetes deploy otomasyonu
- Secrets yönetimi

### 6. 📊 Monitoring (Prometheus + Grafana)
- Helm ile kube-prometheus-stack kurulumu
- Grafana dashboard'ları
- Kubernetes cluster kaynak izleme
- CPU/Memory/Pod metrikleri

### 7. 🏗️ Infrastructure as Code (Terraform)
- Terraform kurulumu ve temel kavramlar
- Docker provider ile container yönetimi
- `terraform init / plan / apply / destroy` döngüsü
- Altyapıyı kod olarak yönetme

## 🏗️ Mimari
GitHub (Kod)
↓ git push
GitHub Actions (CI/CD)
↓ Self-hosted Runner
Docker Hub (Image Registry)
↓ kubectl apply
Kubernetes / K3s Cluster
├── devops-demo namespace → Node.js Uygulaması
├── speedtest namespace → Speedtest Uygulaması
├── monitoring namespace → Prometheus + Grafana
└── default namespace → Diğer servisler


## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|----------|----------------|
| Docker | latest | Container yönetimi |
| Kubernetes (K3s) | latest | Container orchestration |
| Nginx | latest | Web server / Reverse proxy |
| HAProxy | latest | Load balancer |
| Keepalived | latest | High availability / VIP |
| GitHub Actions | - | CI/CD pipeline |
| Prometheus | latest | Metrik toplama |
| Grafana | 12.4.3 | Metrik görselleştirme |
| Terraform | v1.14.8 | Infrastructure as Code |
| Node.js | latest | Uygulama runtime |

## 📁 Proje Yapısı

devops-demo/
├── app.js # Node.js uygulaması
├── Dockerfile # Container tarifi
├── README.md # Bu dosya
├── k8s/
│ ├── namespace.yaml # Kubernetes namespace
│ ├── deployment.yaml # Pod deployment
│ └── service.yaml # NodePort service
├── .github/
│ └── workflows/
│ └── ci-cd.yaml # GitHub Actions pipeline
└── terraform-demo/
└── main.tf # Terraform IaC örneği


## 🎯 Öğrenme Hedefi

**8 ay içinde Junior DevOps Mühendisi seviyesine ulaşmak.**

Sıradaki konular:
- ☁️ Cloud (AWS, GCP, Azure)
- 🔐 Security & Secrets Management
- 📝 Advanced Monitoring & Alerting

## 👤 Hakkımda

DevOps mühendisliği öğrenme yolculuğumda pratik projeler geliştiriyorum.

- GitHub: [volkancandemir87-code](https://github.com/volkancandemir87-code)
