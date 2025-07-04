# Sentravision Dev Server Startup Script
# Automatically kills port 5173 if occupied and starts the development server

Write-Host "🚀 Starting Sentravision Dev Server..." -ForegroundColor Green

# Check if port 5173 is in use
try {
    $connection = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
    
    if ($connection) {
        Write-Host "⚠️  Port 5173 is occupied. Killing process..." -ForegroundColor Yellow
        
        # Get the process ID and kill it
        $processId = $connection.OwningProcess
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
        
        Write-Host "✅ Cleared port 5173" -ForegroundColor Green
        Start-Sleep -Seconds 1
    } else {
        Write-Host "✅ Port 5173 is available" -ForegroundColor Green
    }
} catch {
    Write-Host "ℹ️  Could not check port status, proceeding..." -ForegroundColor Blue
}

# Start the development server
Write-Host "🌐 Starting Vite dev server on http://localhost:5173" -ForegroundColor Cyan
npm run dev 