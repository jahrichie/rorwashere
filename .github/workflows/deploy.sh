#!/bin/bash
# Deployment script for rorwashere.com
# This script is run on the server via SSH

set -e

REGISTRY="ghcr.io"
IMAGE_NAME="${GITHUB_REPOSITORY:-rorwashere/rorwashere}"
CONTAINER_NAME="rorwashere"

echo "Logging in to GitHub Container Registry..."
echo "$GITHUB_TOKEN" | docker login ghcr.io -u "$GITHUB_ACTOR" --password-stdin

echo "Pulling latest image..."
docker pull "${REGISTRY}/${IMAGE_NAME}:latest"

echo "Stopping existing container..."
docker stop "$CONTAINER_NAME" || true
docker rm "$CONTAINER_NAME" || true

echo "Starting new container..."
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p 80:80 \
  "${REGISTRY}/${IMAGE_NAME}:latest"

echo "Cleaning up old images..."
docker image prune -f

echo "Deployment complete!"

