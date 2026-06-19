// ════════════════════════════════════════════════════════
//  SWC V1 – Google Apps Script
//  Paste this in: script.google.com → New Project
// ════════════════════════════════════════════════════════

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Facebook Name', 'Username', 'Phone', 'Email']);
    // Style the header
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#c8202a').setFontColor('#ffffff');
  }

  const params = e.parameter;

  sheet.appendRow([
    new Date(),                        // Timestamp
    params.fb_name  || '',             // Facebook Name
    params.username || '',             // Username  ← NEW
    params.phone    || '',             // Phone
    params.email    || '',             // Email
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Also handle GET (for testing in browser)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'SWC Script is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}