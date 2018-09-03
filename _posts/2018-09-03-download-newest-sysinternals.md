---
layout: pages
title: "Download Newest Sysinternals Tools"
excerpt: "Download recently updated Sysinternals tools"
date: 2018-09-03
comments: true
tags:
  - powershell
  - sysinternals
category:
  - powershell
---

## Preface

I have a new laptop and have been configuring it as my primary PowerShell development system.

Today, when I was looking for a way to search for all of my GitHub repositories, I found a couple Gists from
[Jeff Hicks](https://jdhitsolutions.com/blog/){:target="_blank"} for
[New-GitHubGist](https://gist.github.com/jdhitsolutions/06cb62bf3eb4f0a1f7d82ed39b1e56ca){:target="_blank"} and
[SendTo-Gist](https://gist.github.com/jdhitsolutions/345a6b8e4c47440df5fb1dbcb987cb3e){:target="_blank"}. Knowing Jeff
is a prolific PowerShell blogger, I dug a little deeper and found his
[post](http://jdhitsolutions.com/blog/powershell/4895/friday-fun-a-sysinternals-powershell-workflow/){:target="_blank"}
on using a PowerShell workflow to download Sysinternals.

That made me realize --- I didn't have Sysinternals installed.

## Sysinternals Required

I needed to install Sysinternals suite, but being that I'm a "find a PowerShell way" person, I started searching.

First off, Jeff's workflow, while very enlightening, was a bit overkill for my purpose and I wanted to not be heavy
handed with downloading all tools.

My search revealed
[Robin CM's IT Blog post](https://rcmtech.wordpress.com/2017/01/10/get-or-update-sysinternals-tools-with-powershell/){:target="_blank"}
which I used as a basis for my two functions.

### Get-Sysinternals

The first function, `Get-Sysinternals`, simply retrieves the full list of Sysinternal files from
[Sysinternals Live](https://live.sysinternals.com){:target="_blank"}. The function parses each file and produces an array
of objects with Name, Length, LastWriteTime, and Updated.

The LastWriteTime property will be used to update the local file after downloading.

The Updated property will be used for comparing the remote web file with the local file.
__For some reason, even though I was writing the LastWriteTime, on a few of the files it was off by a few minutes or seconds.__

### Sync-Sysinternals

The `Sync-Sysinternals` function requires a installation path. It validates it (creating the folder if necessary), uses the
`Get-Sysinternals` function to get a current list, gets the files from the installation path, and compares the two.

It then proceeds to download the newer files. After each file is downloaded, the function updates the LastWriteTime of
the local file.

I included a `-Force` switch just in case someone needed to get the lastest and have the LastWriteTime updated, or to replace
corrupted files.

## Scheduling

You could save these files and dot source them in a script that you schedule via Scheduled Tasks or PowerShell Scheduled
Jobs.

## Gist

You can see both functions here:

<script src="https://gist.github.com/thedavecarroll/85873332f0d326cd800a040aa408dbbb.js"></script>

## Summary

These two functions will allow me (and hopefully you) to keep your local Sysinternals folder up-to-date.

Feel free to subscribe to my RSS feed to keep notified when I post something new. The link is located in the site's footer.

Thanks for reading!