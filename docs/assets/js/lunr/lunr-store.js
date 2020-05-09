var store = [{
        "title": "Welcome to My PowerShell Blog",
        "excerpt":"Greetings fellow PowerShell aficionados! I feel I must begin with a confession: I was not an early adopter of PowerShell. I began using PowerShell because I had no other choice. I needed to manage the Live@EDU environment at the college where I worked. Who had time to learn something that...","categories": ["blog"],
        "tags": ["blog","powershell"],
        "url": "https://powershell.anovelidea.org/blog/blog-inception/",
        "teaser": null
      },{
        "title": "Unique Email Domains",
        "excerpt":"So you’re working on getting all of your email domains that’s on-prem into Azure or you simply want to ensure that your on-prem Exchange has been configured for all the domains your user accounts utilize. Your Active Directory domain contains over 30,000 accounts. How would you go about discovering the...","categories": ["powershell"],
        "tags": ["powershell","exchange","azure"],
        "url": "https://powershell.anovelidea.org/powershell/unique-email-domains/",
        "teaser": null
      },{
        "title": "Clear DNS Server Cache",
        "excerpt":"How often have you needed to clear the DNS server cache? Regardless how many domain controllers in your environment, a few simple lines of PowerShell can clear the cache on all of them. First, we need to get the name of the domain. Of course, if you already know the...","categories": ["powershell"],
        "tags": ["powershell","dns","dns cache"],
        "url": "https://powershell.anovelidea.org/powershell/clear-dns-server-cache/",
        "teaser": null
      },{
        "title": "Updatable Help",
        "excerpt":"PowerShell has provided a way to update the help files for modules since version 3.0. Since creating my first two modules, I have tried adding updatable help support, but came across a few issues. Tonight, I finally resolved them for my module PoShEvents. GitHub Bad, GitHub Pages Good My module...","categories": ["powershell"],
        "tags": ["update-help","updatable help","tls","ssl","platyps","powershell"],
        "url": "https://powershell.anovelidea.org/powershell/updatable-help/",
        "teaser": null
      },{
        "title": "How I Blog",
        "excerpt":"Someone asked what I used to produce this blog. This post will provide the methodology and details. The Decision to Blog I’ve hosted a personal website on various platforms since early 2000. I’ve used FTP, SFTP, FrontPage, WebDAV, Dreamweaver, WordPress, and probably some others that I’ve forgotten about. Using WordPress,...","categories": ["blog"],
        "tags": ["blog","jekyll","travis ci","github","staticman"],
        "url": "https://powershell.anovelidea.org/blog/how-i-blog/",
        "teaser": null
      },{
        "title": "Download Newest Sysinternals Tools",
        "excerpt":"Preface I have a new laptop and have been configuring it as my primary PowerShell development system. Today, when I was looking for a way to search for all of my GitHub repositories, I found a couple Gists from Jeff Hicks for New-GitHubGist and SendTo-Gist. Knowing Jeff is a prolific...","categories": ["powershell"],
        "tags": ["powershell","sysinternals"],
        "url": "https://powershell.anovelidea.org/powershell/download-newest-sysinternals/",
        "teaser": null
      },{
        "title": "ForEach-Object -WhatIf",
        "excerpt":"Preface While working on my PoShDynDnsApi module, I came across an issue with with a function I had predominantly borrowed from a TechNet blog post from Jamie Nelson. Specifically, in my function Update-DynDnsRecord that called the Compare-ObjectProperties function, when I used the -WhatIf parameter, I unexpectedly received the following: What...","categories": ["powershell"],
        "tags": ["powershell","foreach-object","function","ad hoc function"],
        "url": "https://powershell.anovelidea.org/powershell/foreach-object-whatif/",
        "teaser": null
      },{
        "title": "How I Implement Module Variables",
        "excerpt":"Preface Originally, I used globally scoped variables for my PoShDynDnsApi module to store the API URL, the authentication token, and the API version. These three variables were created during the initial connection to the service then updated or removed as needed. A week or so ago, I was talking with...","categories": ["powershell"],
        "tags": ["powershell","module","module variables","global variables"],
        "url": "https://powershell.anovelidea.org/powershell/how-i-implement-module-variables/",
        "teaser": null
      },{
        "title": "Windows Forms",
        "excerpt":"Introduction It’s been too long since I’ve posted any content and I wanted to get something out to let you know that I’m still here. Recently, I was tasked to provide a GUI for a PowerShell script. Okay, I think I tasked myself, but it was an interesting foray into...","categories": ["powershell"],
        "tags": ["WindowsForms","Forms","DataGridView","PowerShell GUI"],
        "url": "https://powershell.anovelidea.org/powershell/windows-forms/",
        "teaser": null
      },{
        "title": "Introducing the PoShDynDnsApi Module",
        "excerpt":"Sometime in Early 2018 Manager: Hey, Dave. I need you to add all of our domains as Accepted Domains in Exchange Online. Me: Okay. How many do we have? Manager: Maybe 50? Me *finally gets access to Dyn and checks*: We have over 170 in Dyn. Manager: Yeah, all those....","categories": ["powershell"],
        "tags": ["powershell","module","dns","dyn","rest api","dyndns managed service","dyn managed dns rest api"],
        "url": "https://powershell.anovelidea.org/powershell/module-poshdyndnsapi/",
        "teaser": null
      },{
        "title": "Using the PSGSuite Module for G Suite",
        "excerpt":"Introduction About a week ago, I was scrolling through Reddit and came across a post in r/sysadmin, Get list of aliases in Gsuite/Gmail. I took a few minutes to install and configure PSGSuite, a module for interacting with G Suite (Google Apps) API that I heard about sometime last year....","categories": ["powershell"],
        "tags": ["psgsuite","g suite","google api","google cloud","how to"],
        "url": "https://powershell.anovelidea.org/powershell/using-psgsuite-module/",
        "teaser": null
      },{
        "title": "Design Deep Dive : PoShDynDnsApi",
        "excerpt":"Introduction In January, I published the first release of the PoShDynDnsApi module to the PowerShellGallery, along with a blog post introducing the module. It was the culmination of months of often-distracted work that began nearly a year prior. In this post, I want to give you a peek into my...","categories": ["powershell"],
        "tags": ["powershell","module","xplat","cross platform","rest api","webrequest","httpclient","external help","online help","updatable help","dyn managed dns"],
        "url": "https://powershell.anovelidea.org/powershell/design-deep-dive-poshdyndnsapi/",
        "teaser": null
      },{
        "title": "PowerShell Beginners Have to Start Somewhere",
        "excerpt":"Introduction Iron Scripter grew out of the scripting games at PowerShell Summit and the quote below comes from the introductory post on the Iron Scripter site. The Chairman has decided that it is in the best interests of his Iron Scripters, and those that wish to attain that valued designation,...","categories": ["powershell"],
        "tags": ["powershell","powershell concepts","learn powershell","powershell beginner","iron scripter","iron scripter challenge","iron scripter walk-through"],
        "url": "https://powershell.anovelidea.org/powershell/iron-scripter-challenge-beginner-walk-through/",
        "teaser": null
      },{
        "title": "Get-History Lesson",
        "excerpt":"A Quick History Lesson Today, I did a significant amount of work in a PowerShell session and, even though most of what I did was copy/pasted from a file (open in VS Code), I wanted to grab only the essential commands from the session. Instead of scrolling or arrowing up...","categories": ["powershell"],
        "tags": ["powershell","powershell concepts","learn powershell","powershell beginner","get-history","Microsoft.PowerShell.Commands.HistoryInfo"],
        "url": "https://powershell.anovelidea.org/powershell/get-history-lesson/",
        "teaser": null
      },{
        "title": "Writing Windows Events with Smart EventData",
        "excerpt":"Introduction I’ve spent quite some time researching how to create events using EventData with named Data elements. It’s not easy and is even less easier to write some PowerShell to make it “dynamic”. EventData with Named Data In order to enable named Data elements in your event logs, you have...","categories": ["powershell"],
        "tags": ["powershell","windows","event logs","events","eventdata"],
        "url": "https://powershell.anovelidea.org/powershell/windows-event-logs-eventdata/",
        "teaser": null
      },{
        "title": "PowerShell 7 Changes to JSON Cmdlets",
        "excerpt":"#PS7Now! PowerShell 7 Is Here! Part of #PSBlogWeek, this article is one of many from several community members and PowerShell bloggers, like me, that focus on a given topic. The topic of this #PSBlogWeek is PowerShell 7. Quick Note: I was incredibly flattered when Jeff asked me to participate in...","categories": ["powershell"],
        "tags": ["psblogweek","ps7now","powershell7","pwsh","convertfrom-json","convertto-json","test-json","json","json-schema","json schema"],
        "url": "https://powershell.anovelidea.org/powershell/ps7now-changes-to-json-cmdlets/",
        "teaser": null
      },{
        "title": "PowerShell 7 Experimental Features",
        "excerpt":"#PS7Now! PowerShell 7 Is Here! This #PSBlogWeek focuses on the official release of PowerShell 7 — the newest, fastest, and best PowerShell putting the spotlight on PowerShell’s Experimental Features. Get #PS7Now to experience them yourself! Experimental Features Defined After becoming open-source software, the PowerShell community requested a mechanism for users...","categories": ["powershell"],
        "tags": ["ps7now","powershell 7","pwsh","experimental features","experimental"],
        "url": "https://powershell.anovelidea.org/powershell/ps7now-experimental-features/",
        "teaser": null
      }]
