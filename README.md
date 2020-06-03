<p align="center">
  <a>
    <img alt="React" src="https://img.icons8.com/color/144/000000/react-native.png"/>
  </a>
</p>
<h1 align="center">
  TubeSTore
</h1>

<p align="center">
  <a href="https://github.com/Uyadav207/TubeStore/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="weatherly-react-app: Weatherly is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <img src="https://img.shields.io/github/followers/Uyadav207?label=Follow&style=social"/>
</p>


CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers
 
INTRODUCTION
------------

The Administration Menu module displays the entire administrative menu tree
(and most local tasks) in a drop-down menu, providing administrators one- or
two-click access to most pages.  Other modules may also add menu links to the
menu using hook_admin_menu_output_alter().

 * For a full description of the module, visit the project page:
   https://www.drupal.org/project/admin_menu

 * To submit bug reports and feature suggestions, or track changes:
   https://www.drupal.org/project/issues/admin_menu
   
   
REQUIREMENTS
------------

This module requires the following modules:

 * Views (https://www.drupal.org/project/views)
 * Panels (https://www.drupal.org/project/panels)

RECOMMENDED MODULES
-------------------

 * Markdown filter (https://www.drupal.org/project/markdown):
   When enabled, display of the project's README.md help will be rendered
   with markdown.
   
 CONFIGURATION
-------------

The module has no menu or modifiable settings. There is no configuration. When
enabled, the module will prevent the links from appearing. To get the links
back, disable the module and clear caches.

TROUBLESHOOTING
---------------

 * If the menu does not display, check the following:

   - Are the "Access administration menu" and "Use the administration pages
     and help" permissions enabled for the appropriate roles?

   - Does html.tpl.php of your theme output the $page_bottom variable?

FAQ
---

Q: I enabled "Aggregate and compress CSS files", but admin_menu.css is still
   there. Is this normal?

A: Yes, this is the intended behavior. the administration menu module only loads
   its stylesheet as needed (i.e., on page requests by logged-on, administrative
   users).
   
   
MAINTAINERS
-----------

Current maintainers:
 * Daniel F. Kudwien (sun) - https://www.drupal.org/user/54136
 * Peter Wolanin (pwolanin) - https://www.drupal.org/user/49851
 * Stefan M. Kudwien (smk-ka) - https://www.drupal.org/user/48898
 * Dave Reid (Dave Reid) - https://www.drupal.org/user/53892

This project has been sponsored by:
 * UNLEASHED MIND
   Specialized in consulting and planning of Drupal powered sites, UNLEASHED
   MIND offers installation, development, theming, customization, and hosting
   to get you started. Visit https://www.unleashedmind.com for more information.
