# PowerShell Script: Add-Marker-Fixed.ps1
# SIMPLER VERSION - Adds marker after frontmatter.

$contentFolder = "C:\Users\NefuTrades\autoinsureguides\src\content\states"
$markdownFiles = Get-ChildItem -Path $contentFolder -Recurse -Include "*.md"

Write-Host "Adding marker to $($markdownFiles.Count) state guide files..." -ForegroundColor Cyan

foreach ($file in $markdownFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Find the SECOND occurrence of "---" (end of frontmatter)
    $firstDash = $content.IndexOf("---")
    $secondDash = $content.IndexOf("---", $firstDash + 3)
    
    if ($secondDash -gt 0) {
        # Insert marker after the second "---" and a newline
        $newContent = $content.Insert($secondDash + 3, "`r`n`r`n###COFFEEMUG###`r`n`r`n")
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "  Marked: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "  ERROR: Could not find frontmatter end in $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "`n=== Marker Added ===" -ForegroundColor Yellow
Write-Host "Now use VS Code to replace '###COFFEEMUG###' with disclosure." -ForegroundColor Cyan