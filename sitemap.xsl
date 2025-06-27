<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>WigglyPaint Sitemap</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 14px;
    background-color: #fff;
    margin: 0;
    padding: 20px;
}
.header {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}
.header h1 {
    margin: 0 0 10px 0;
    color: #333;
    font-size: 24px;
}
.header p {
    margin: 0;
    color: #666;
}
table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
}
th {
    background-color: #f8f9fa;
    color: #333;
    font-weight: 600;
    padding: 12px;
    text-align: left;
    border-bottom: 2px solid #dee2e6;
}
td {
    padding: 12px;
    border-bottom: 1px solid #dee2e6;
    vertical-align: top;
}
tr:hover {
    background-color: #f8f9fa;
}
.url {
    color: #0066cc;
    text-decoration: none;
    word-break: break-all;
}
.url:hover {
    text-decoration: underline;
}
.priority {
    font-weight: 600;
    text-align: center;
}
.lastmod {
    font-family: monospace;
    color: #666;
}
.changefreq {
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
}
.count {
    color: #666;
    font-style: italic;
    margin-top: 20px;
}
</style>
</head>
<body>
<div class="header">
    <h1>WigglyPaint XML Sitemap</h1>
    <p>This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</strong> for the WigglyPaint website in multiple languages.</p>
</div>

<table>
<tr>
    <th>URL</th>
    <th>Last Modified</th>
    <th>Change Frequency</th>
    <th>Priority</th>
</tr>
<xsl:for-each select="sitemap:urlset/sitemap:url">
<tr>
    <td>
        <a href="{sitemap:loc}" class="url">
            <xsl:value-of select="sitemap:loc"/>
        </a>
    </td>
    <td class="lastmod">
        <xsl:value-of select="sitemap:lastmod"/>
    </td>
    <td>
        <span class="changefreq">
            <xsl:value-of select="sitemap:changefreq"/>
        </span>
    </td>
    <td class="priority">
        <xsl:value-of select="sitemap:priority"/>
    </td>
</tr>
</xsl:for-each>
</table>

<div class="count">
    Generated for WigglyPaint multilingual website - 
    <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> total pages
</div>

</body>
</html>
</xsl:template>
</xsl:stylesheet> 