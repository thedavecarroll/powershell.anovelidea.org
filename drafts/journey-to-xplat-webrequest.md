---
layout: single
title: "A Journey to Cross-platform WebRequest"
excerpt: ""
date:
comments: true
tags:
  - source control
category:
  - powershell
---

## Introduction


|Version             |PSEdition  | Primary .NET API                       | Response Object                     | Strict Header Parsing | Headers Values | Content Headers
|-|-|-|-|-|-|-|
|Windows PowerShell  |Desktop    | System.Net.WebRequest                  | System.Net.WebResponse              | No                    | Single string, joined by commas | HttpWebResponse.Headers
|PowerShell Core     |Core       | System.Net.Http.HttpClient (.Net 4.5+) | System.Net.Http.HttpResponseMessage | Yes                   | Sting array                     | HttpResponseMessage.Content.Headers

* `WebRequest` to `HttpClient`
* Strict Header Parsing
* `HttpWebResponse` is now `HttpResponseMessage`
* Headers Values are Now String Arrays

## Windows PowerShell

## PowerShell Core

## How to Pick Which Function to Use

## Summary