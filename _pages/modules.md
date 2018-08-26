---
permalink: /modules/
title: My Modules
search: true
---

{% for module in site.data.modules %}
    ## {{ module.name }}

    {{ module.description }}

    | Feature | Status |
    | - | - |
    | Help | {{ module.help }} |
    | Online Help | {{ module.onlinehelp }} |
    | Updatable Help | {{ module.updatablehelp }} |
    | Pester Tests | {{ module.pester }} |
    | Build Script | {{ module.build }} |
    | GitHub Repo | [{{ module.name }}](https://github.com/thedavecarroll/{{ module.name }}){:target="_blank"} |
    | PowerShell Gallery | [![PowerShell Gallery](https://img.shields.io/powershellgallery/dt/{{ module.name }}.svg?style=for-the-badge)](https://www.powershellgallery.com/packages/{{ module.name }}/) |

{% endfor %}
