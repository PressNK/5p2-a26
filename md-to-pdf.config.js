module.exports = {
  stylesheet: [],
  css: `
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      font-size: 11px;
      line-height: 1.4;
      color: #1a1a1a;
    }
    h1 { font-size: 20px; margin-bottom: 8px; }
    h2 { font-size: 15px; margin-top: 18px; }
    blockquote {
      border-left: 3px solid #999;
      margin: 8px 0;
      padding: 4px 12px;
      color: #444;
      background: #f6f6f6;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      table-layout: fixed;
      margin: 10px 0;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 5px 6px;
      vertical-align: top;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    th {
      background: #2d3748;
      color: #fff;
      text-align: left;
    }
    tr:nth-child(even) td {
      background: #f9f9f9;
    }
    th:nth-child(1), td:nth-child(1) { width: 3%; }
    th:nth-child(2), td:nth-child(2) { width: 16%; }
    th:nth-child(3), td:nth-child(3) { width: 12%; }
    th:nth-child(4), td:nth-child(4) { width: 69%; }
    ol { padding-left: 18px; }
  `,
  pdf_options: {
    format: 'A4',
    landscape: true,
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '10mm',
      right: '10mm',
    },
    printBackground: true,
  },
  launch_options: {
    headless: true,
  },
};

