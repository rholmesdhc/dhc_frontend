npm run build
if ($?) {
    docker build -f Dockerfile.uat -t dhc-frontend:latest .
    if ($?) {
        docker save -o dhc-frontend.tar dhc-frontend:latest
        if ($?) {
            python -m zipfile -c deploy-uat-package.zip docker-compose.uat.yml .env.uat dhc-frontend.tar
            if ($?) {
                node deploy.js
            } else {
                Write-Error "Zipping failed"
            }
        } else {
            Write-Error "Docker save failed"
        }
    } else {
        Write-Error "Docker build failed"
    }
} else {
    Write-Error "Local Next.js build failed"
}


