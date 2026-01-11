# PowerShell Script: Update-InsuranceDates-Final.ps1
# SAFE VERSION - Uses only SIMPLE TEXT REPLACEMENT. No complex regex.

# 1. DEFINE YOUR CONTENT FOLDER PATH
$contentFolder = "C:\Users\NefuTrades\autoinsureguides\src\content\states"

# 2. SPECIFY THE FILES TO UPDATE
$markdownFiles = Get-ChildItem -Path $contentFolder -Recurse -Include "*.md"
Write-Host "Found $($markdownFiles.Count) markdown files." -ForegroundColor Cyan

# 3. DEFINE SIMPLE TEXT REPLACEMENTS (ONLY EXACT MATCHES)
$replacements = @{
    # === 1. FRONTMATTER & ARTICLE DATES ===
    'date: 2024' = 'date: 2026'
    'updatedDate: 2024' = 'updatedDate: 2026'
    'Car Insurance 2024:' = 'Car Insurance 2026:'  # Fixes the title in frontmatter
    'Car Insurance Guide 2024' = 'Car Insurance Guide 2026' # Fixes the main H1 heading
    
    # === 2. COMMON IN-TEXT DATE PHRASES ===
    ' in 2024' = ' in 2026'
    ' for 2024' = ' for 2026'
    '2024 rates' = '2026 rates'
    '2024 estimates' = '2026 estimates'
    '2024 and' = '2026 and'
    
    # === 3. DOLLAR AMOUNT FORMATTING ===
    ',100/year' = '$100/year'
    ',350/year' = '$350/year'
    ',250/year' = '$250/year'
    ',150/month' = '$150/month'
    ',500/year' = '$500/year'
    ',200/month' = '$200/month'
    # Fix liability amounts (seen in your New Mexico file)
    ',000 per person' = '$25,000 per person'
    ',000 per accident' = '$50,000 per accident'
    ',000 property' = '$25,000 property'
}

$filesUpdated = 0

# 4. PROCESS EACH FILE
foreach ($file in $markdownFiles) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $wasUpdated = $false

    # Apply each SIMPLE TEXT REPLACEMENT
    foreach ($oldText in $replacements.Keys) {
        if ($content.Contains($oldText)) {
            $content = $content.Replace($oldText, $replacements[$oldText])
            $wasUpdated = $true
        }
    }

    # Only write back if changes were made
    if ($wasUpdated) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $filesUpdated++
        Write-Host "  Updated: $($file.Name)" -ForegroundColor Green
    }
}

# 5. SUMMARY
Write-Host "`n=== Update Complete ===" -ForegroundColor Yellow
Write-Host "Files scanned: $($markdownFiles.Count)"
Write-Host "Files updated: $filesUpdated"
Write-Host "`nFixed with SIMPLE TEXT REPLACEMENT:" -ForegroundColor Cyan
Write-Host "1. Dates in frontmatter (2024 -> 2026)"
Write-Host "2. 'Car Insurance 2024:' in titles"
Write-Host "3. 'Car Insurance Guide 2024' in headings"
Write-Host "4. Dollar formatting (,100/year -> `$100/year)"
Write-Host "5. Liability amounts (,000 -> `$25,000)"
Write-Host "`nVERIFY a sample file now." -ForegroundColor Yellow