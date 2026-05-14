# build-and-package.ps1
# This script builds the Next.js Docker image locally and packages it along with the UAT configuration for deployment.

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$OutputZip = "$ProjectRoot\deploy-uat-package.zip"
$TarFile = "$ProjectRoot\dhc-frontend.tar"

Write-Host "Starting build process for dhc-frontend..."
Set-Location $ProjectRoot

Write-Host "1. Building Docker image dhc-frontend:latest..."
# We pass a placeholder URL for build, but runtime env takes precedence in docker-compose
docker build -t dhc-frontend:latest .

Write-Host "2. Saving Docker image to $TarFile..."
docker save -o $TarFile dhc-frontend:latest

Write-Host "3. Creating deployment package $OutputZip..."
if (Test-Path $OutputZip) {
    Remove-Item $OutputZip -Force
}

# Compress the necessary files into a ZIP
Compress-Archive -Path $TarFile, "docker-compose.uat.yml", ".env.uat" -DestinationPath $OutputZip -Force

Write-Host "Cleaning up tar file..."
Remove-Item $TarFile -Force

Write-Host "=========================================================="
Write-Host "Package created successfully: $OutputZip"
Write-Host "Deployment Instructions:"
Write-Host "1. Transfer the package to your Linux UAT Server using scp:"
Write-Host "   scp deploy-uat-package.zip your_username@10.4.0.30:~/"
Write-Host "2. SSH into the server: ssh your_username@10.4.0.30"
Write-Host "3. Unzip the package: unzip deploy-uat-package.zip"
Write-Host "4. Load the image: docker load -i dhc-frontend.tar"
Write-Host "5. Start the stack: docker compose -f docker-compose.uat.yml --env-file .env.uat up -d"
Write-Host "=========================================================="
