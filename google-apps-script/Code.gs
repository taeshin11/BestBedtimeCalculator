// ============================================================
// Google Apps Script - Sleep Cycle Optimizer Data Collector
// ============================================================
// 이 코드를 Google Apps Script에 복사-붙여넣기 하세요.
// 설정 방법은 SETUP.md를 참고하세요.

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // 첫 번째 행이 비어있으면 헤더 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Mode",
        "Wake Time",
        "Sleep Time",
        "User Agent",
        "Received At"
      ]);
    }

    // 데이터 행 추가
    sheet.appendRow([
      data.timestamp || "",
      data.mode || "",
      data.wakeTime || "",
      data.sleepTime || "",
      data.userAgent || "",
      new Date().toISOString()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 테스트용
function doGet(e) {
  return ContentService
    .createTextOutput("Sleep Cycle Optimizer - Data Collector is running!")
    .setMimeType(ContentService.MimeType.TEXT);
}
