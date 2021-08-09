# NIFTI-QA-Testing-Tools

Author:Jonathan Madrigal Solorzano

Guide: https://confluence.criticalmass.com/pages/viewpage.action?spaceKey=NNA&title=Extensions+QA-TOOLS 

There are 2 extensions:

QA-TOOLS:

This extension has been created to test different process on QA-Nissan, these are the following test:
1. Copy test: This tool read the requirement copy from .xlsx file to test the copy against the page. The text color in page change to green if it is matching against reference(.xlsx) and red if it doest not.
2. Disclaimer test: It displays all disclaimers in page with ID,copy and copy related with disclaimer sorted as shown in page.
3. Seo test: It displays all QA-SEO scope, title,description,headers,robots,filenames and alt tags from images.
4. Prices test: It displays all Prices on overview,specs,trims and config-NGST.
5. Specs test: It displays all availability from each specs on each trim according with references(X,O,N/A).
6. Some templates have been added to create a bug,process,demote,approved a ticket on jira.
7.  Some utilities have been added to see href on each CTA, open dropdowns automatically, see filename or alt text from any image, change the * disclaimers for id number and underline the evidence before a screenshot.

CTAS-TOOL:

1. This text review all CTAS on MYU-scope.
2. It sends a request to see if CTA status is correct or if it redirect to other page or if it is broken.


