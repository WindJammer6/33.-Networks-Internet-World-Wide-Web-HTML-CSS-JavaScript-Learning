# 33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning 🌐🕸️ ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=javascript) ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=css) ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=html)
I wanted to officially learn HTML, CSS and JavaScript programming languages, but I quickly found myself feeling like I am missing some prerequisite knowledge as I tried to develop more complex front-end and back-end web applications with them.

Turns out what I was missing was about the general understanding about Networks. Since HTML, CSS and JavaScript are programming languages for the World Wide Web, and the World Wide Web is an application on top of the Internet, which is made up of
Networks, I found it helpful to get some general understanding about Networks, the Internet and the World Wide Web, before diving into learning HTML, CSS and JavaScript programming languages.

<br>

## Table of Contents:
Here is a directory to the explanations of what each folder contains in this Networks, the Internet, the World Wide Web, HTML, CSS and JavaScript learning journey repository:
1. [Networks (Prerequisite)](#networks)  
2. [HTML learn](#html)  
3. [CSS learn](#css)
4. [JavaScript learn](#js)
   + [1. JavaScript basics](#jsbasics)
   + [2. JavaScript OOP](#jsoop)
   + ['What_is_Nodejs.txt. text file](#whatisnodejs)
5. ['Setting_up_HTML_CSS_JavaScript_in_VScode_and_running_HTML_CSS_JavaScript_code_in_VScode.txt' text file](#howsetuphtmlcssjsandruninvscode)

<br>

## [1. Network (Prerequisites)](https://github.com/WindJammer6/33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning/tree/main/1.%20Networks%20(Prerequisite)) <a name = "networks"></a> 🌐🕸️

This folder contains all the MySQL (SQL implementation) files during my SQL programming language with MySQL (SQL implementation) learning journey segregated into 3 folders, '[2. MySQL (SQL implementation) basic syntax](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/2.%20MySQL%20(SQL%20implementation)%20basic%20syntax)', '[3. MySQL (SQL implementation) modifying Relational Databases](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/3.%20MySQL%20(SQL%20implementation)%20modifying%20Relational%20Databases)' and '[4. MySQL (SQL implementation) integrated with Python (as backend) using PyMySQL (Python library)](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/4.%20MySQL%20(SQL%20implementation)%20integrated%20with%20Python%20(as%20backend)%20using%20PyMySQL%20(Python%20library))', organised based on the programming concept of each MySQL (SQL implementation) file. Most of the information from the first and second folders, '[2. MySQL (SQL implementation) basic syntax](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/2.%20MySQL%20(SQL%20implementation)%20basic%20syntax)' and '[3. MySQL (SQL implementation) modifying Relational Databases](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/3.%20MySQL%20(SQL%20implementation)%20modifying%20Relational%20Databases)', is taken from this Youtube playlist: https://www.youtube.com/playlist?list=PL41lfR-6DnOokmJfmYj2hdVMKVGIcF7__ (Quentin Watt Tutorials) and the information from the third folder is taken from these Youtube videos: https://www.youtube.com/watch?v=3vsC05rxZ8c&list=PLzMcBGfZo4-l5kVSNVKGO60V6RkXAVtp-&index=1 (Tech with Tim) and https://www.youtube.com/watch?v=91iNR0eG8kE&list=PLzMcBGfZo4-l5kVSNVKGO60V6RkXAVtp-&index=2 (Tech with Tim). While in all 3 folders I split the respective lessons myself to the individual folders.

This folder also contains 1 text files, ['1. About_these_MySQL_(SQL_implentation)_tutorials.txt' text file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/1.%20About_these_MySQL_(SQL_implentation)_tutorials.txt), 1 MySQL (SQL implementation) file, ['MySQL_(SQL_implementation)_query_that_creates_the_movies_relational_database_in_a_MySQL_(SQL_implementation)_server.sql' SQL file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/MySQL_(SQL_implementation)_query_that_creates_the_movies_relational_database_in_a_MySQL_(SQL_implementation)_server.sql), and 1 Microsoft Excel file, ['movies_relational_database_visual_in_Microsoft_Excel.xlsx' Microsoft Excel file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/movies_relational_database_visual_in_Microsoft_Excel.xlsx).

<br>

However, I did have some deviation for these tutorial folders from their sources:  

For deviation for the first and second tutorial folders from the Youtube playlist by Quentin Watt Tutorials, titled 'MySQL for Beginners':  
- In the Youtube playlist by Quentin Watt Tutorials, titled 'MySQL for Beginners' used MAMP and PHP as the
  IDE, but I used VScode instead (refer to the file 'Setting_up_MySQL_(SQL_implementation)_in_VScode.txt' for how to set 
  up MySQL with VScode).
- In the Youtube playlist by Quentin Watt Tutorials, titled 'MySQL for Beginners' used a pre-made Relational Database by 
  Quentin, but I used a 'moviesdb' Relational Database provided by codebasics in their Youtube video, titled 'SQL Tutorial 
  for Beginners | MySQL Tutorial' (link: https://youtu.be/Rm0xH2Vpfi0?si=QVr3mUdqUGLHN84R)

For deviation for the third tutorial folder from the Youtube videos by Tech with Tim, titled 'Python MySQL Tutorial - Setup & Basic Queries (w/ MySQL Connector)' and 'Python MySQL Tutorial - Creating Tables, Inserting & Selecting':  
- In these Youtube videos by Tech with Tim, titled 'Python MySQL Tutorial - Setup & Basic Queries (w/ MySQL Connector)' and 'Python MySQL Tutorial - Creating Tables, Inserting & Selecting' used 
  the 'mysql.connector' (Python library), but it dosen't work for my computer for some reason so I used the PyMySQL (Python library) instead, which works for my computer and is relatively 
  similar to the 'mysql.connector' (Python library) in functionality and syntax.

*How to use the MySQL (SQL implementation) files in this folder?*  
The MySQL (SQL implementation) files in this folder can only be used after setting up VS code, where instructions can be found from the '[3. 'Setting_up_MySQL_(SQL_implementation)_in_VScode.txt' text file)](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/Setting_up_MySQL_(SQL_implementation)_in_VScode.txt)', setting up the 'moviesdb' MySQL (SQL implementation) Relational Database in a MySQL (SQL implementation) server in the 'MySQL WorkBench' MySQL-specific MySQL (SQL implementation) server management tool/IDE/application, and running these MySQL (SQL implementation) files, where instructions can be found from the '[4. 'How_to_set_up_a_Relational_Database_in_an_empty_MySQL_(SQL implementation)_server_and_how_to_run_MySQL_(SQL_implementation)_queries_in_VScode.txt' text file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/How_to_set_up_a_Relational_Database_in_an_empty_MySQL_(SQL%20implementation)_server_and_how_to_run_MySQL_(SQL_implementation)_queries_in_VScode)'.

<br> 

**[1. 'About_these_MySQL_(SQL_implentation)_tutorials.txt' text file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/1.%20About_these_MySQL_(SQL_implentation)_tutorials.txt) <a name = "mysqlabouttutorials"></a>**  
This file contains information about these MySQL (SQL implementation) files, the sources of the information they are taken from: https://www.youtube.com/playlist?list=PL41lfR-6DnOokmJfmYj2hdVMKVGIcF7__ (Quentin Watt Tutorials), https://www.youtube.com/watch?v=3vsC05rxZ8c&list=PLzMcBGfZo4-l5kVSNVKGO60V6RkXAVtp-&index=1 (Tech with Tim) and 
https://www.youtube.com/watch?v=91iNR0eG8kE&list=PLzMcBGfZo4-l5kVSNVKGO60V6RkXAVtp-&index=2 (Tech with Tim) and the deviations of these MySQL (SQL implementation) files from it (see above in the section 'However, I did have some deviation for these tutorial folders from their sources').

**[2. MySQL (SQL implementation) basic syntax](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/2.%20MySQL%20(SQL%20implementation)%20basic%20syntax) <a name = "mysqlbasics"></a>**  
This folder contains all the MySQL (SQL implementation) files that deals with the basic syntax and structure in the SQL programming language with MySQL (SQL implementation).

**[3. MySQL (SQL implementation) modifying Relational Databases](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/3.%20MySQL%20(SQL%20implementation)%20modifying%20Relational%20Databases) <a name = "mysqlmodifyingrdb"></a>**  
This folder contains all the MySQL (SQL implementation) files that deals with modifying Relational Databases (aka SQL Databases), in the SQL programming language with MySQL (SQL implementation).

**[4. MySQL (SQL implementation) integrated with Python (as backend) using PyMySQL (Python library)](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/tree/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/4.%20MySQL%20(SQL%20implementation)%20integrated%20with%20Python%20(as%20backend)%20using%20PyMySQL%20(Python%20library)) <a name = "mysqlmoviesrdbexcel"></a>**  
This folder contains all the MySQL (SQL implementation) files that deals with the integration of the SQL programming language with MySQL (SQL implementation) to Python (as backend) using the [PyMySQL (Python library)](https://pypi.org/project/PyMySQL/).

**['MySQL_(SQL_implementation)_query_that_creates_the_movies_relational_database_in_a_MySQL_(SQL_implementation)_server.sql' MySQL (SQL implementation) file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/MySQL_(SQL_implementation)_query_that_creates_the_movies_relational_database_in_a_MySQL_(SQL_implementation)_server.sql) <a name = "mysqlmoviesrdb"></a>**  
This file contains the MySQL (SQL implementation) file, that when run, creates the 'moviesdb' Relational Database provided by codebasics in their Youtube video, titled 'SQL Tutorial for Beginners | MySQL Tutorial' (link: https://youtu.be/Rm0xH2Vpfi0?si=QVr3mUdqUGLHN84R) in a MySQL (SQL implementation) server in MySQL Workbench, a MySQL-specific MySQL (SQL implementation) server management tool/IDE/application (see the section below '3. 'Setting_up_MySQL_(SQL_implementation)_in_VScode.txt' text file' for more detail on what MySQL Workbench is).

**['movies_relational_database_visual_in_Microsoft_Excel.xlsx' Microsoft Excel file](https://github.com/WindJammer6/23.-SQL-learn-with-MySQL-SQL-implementation-/blob/main/SQL%20learn%20with%20My%20SQL%20(SQL%20implementation)%20code%20archives/movies_relational_database_visual_in_Microsoft_Excel.xlsx) <a name = "mysqlmoviesrdbexcel"></a>**  
This file contains the Microsoft Excel file, that illustrates/visualises the 'moviesdb' Relational Database provided by codebasics in their Youtube video, titled 'SQL Tutorial for Beginners | MySQL Tutorial' (link: https://youtu.be/Rm0xH2Vpfi0?si=QVr3mUdqUGLHN84R) in a Microsoft Excel.

<br>

*Source(s):*  
+ https://www.youtube.com/playlist?list=PL41lfR-6DnOokmJfmYj2hdVMKVGIcF7__ (Youtube playlist by Quentin Watt Tutorials, titled 'MySQL for Beginners')
+ https://www.youtube.com/watch?v=3vsC05rxZ8c&list=PLzMcBGfZo4-l5kVSNVKGO60V6RkXAVtp-&index=1 (Youtube video by Tech with Tim, titled: 'Python MySQL Tutorial - Setup & Basic Queries (w/ MySQL Connector)')
+ https://www.youtube.com/watch?v=91iNR0eG8kE&list=PLzMcBGfZo4-l5kVSNVKGO60V6RkXAVtp-&index=2 (Youtube video by Tech with Tim, titled: 'Python MySQL Tutorial - Creating Tables, Inserting & Selecting')
  
<br>

## [2. HTML learn](https://github.com/WindJammer6/33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning/tree/main/2.%20HTML%20learn) <a name = "html"></a> ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=html)
This folder shows my learning journey of the HTML programming language.

*Source(s):*  
+ https://chat.openai.com/ (ChatGPT)

<br>

## [3. CSS learn](https://github.com/WindJammer6/33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning/tree/main/3.%20CSS%20learn) <a name = "css"></a> ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=css)
This folder shows my learning journey of the CSS programming language.

*Source(s):*  
+ https://chat.openai.com/ (ChatGPT)
 
<br>

## [4. JavaScript learn](https://github.com/WindJammer6/33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning/tree/main/4.%20JavaScript%20learn) <a name = "js"></a> ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=javascript)
This folder shows my learning journey of the JavaScript programming language.

<br> 

**[1. JavaScript basics](https://github.com/WindJammer6/33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning/tree/main/4.%20JavaScript%20learn/1.%20JavaScript%20basics) <a name = "jsbasics"></a>**  
This folder contains all the JavaScript files that deals with the basic syntax and structure in the JavaScript programming language.

**[2. JavaScript OOP](https://github.com/WindJammer6/16.-Csharp-and-Unity-Learning/tree/main/C%23%20learn%20code%20archives/3.%20C%23%20OOP) <a name = "jsoop"></a>**  
This folder contains all the JavaScript files that deals with Object-Oriented Programming (OOP) concept in the JavaScript programming language.

**['What_is_Nodejs.txt' text file](https://github.com/WindJammer6/16.-Csharp-and-Unity-Learning/blob/main/C%23%20learn%20code%20archives/Setting_up_C%23_in%20VScode.txt) <a name = "settingupcsharpinvscode"></a>**  
This file contains information from the Youtube video on how to set up a C# environment in VS code, and how to use it to run C# code in VS code. (link: https://www.youtube.com/watch?v=CO4BGZOuUkM (Tech Decode Tutorials))


*Source(s):*  
+ https://www.youtube.com/watch?v=PkZNo7MFNFg (freeCodeCamp.org) (YouTube video by freeCodeCamp.org titled, 'Learn JavaScript - Full Course for Beginners')
+ https://www.youtube.com/watch?v=q-xS25lsN3I&t=121s (Code ON 코드온) (YouTube video by Code ON 코드온 titled, 'What is Node.js and how it works (explained in 2 minutes)')

<br>

## [5. 'Setting_up_HTML_CSS_JavaScript_in_VScode_and_running_HTML_CSS_JavaScript_code_in_VScode.txt' text file](https://github.com/WindJammer6/33.-Networks-Internet-World-Wide-Web-HTML-CSS-JavaScript-Learning/blob/main/Setting_up_HTML_CSS_JavaScript_in_VScode_and_running_HTML_CSS_JavaScript_code_in_VScode.txt) <a name = "howsetuphtmlcssjsandruninvscode"></a>
This file contains instructions on how to set up MySQL (SQL implementation) with VS code, such as how to download MySQL (SQL implementation) from the MySQL (SQL implementation) official website: https://www.mysql.com/downloads/, create a MySQL (SQL implementation) server in MySQL Workbench, a MySQL-specific MySQL (SQL implementation) server management tool/IDE/application, and establish a connection link between the created MySQL (SQL implementation) server in MySQL Workbench to VS code.

*Source(s):*  
+ https://www.mysql.com/downloads/ (MySQL)
+ https://youtu.be/Rm0xH2Vpfi0?si=QVr3mUdqUGLHN84R (Youtube video by codebasics, titled: 'SQL Tutorial for Beginners | MySQL Tutorial')
+ https://guidingcode.com/use-mysql-with-visual-studio-code/ (GuidingCode) 
+ https://superuser.com/questions/1438960/error-er-supported-auth-mode-client-does-not-support-authentication-protocal-r (superuser discussion on: 'Error: ER_SUPPORTED_AUTH_MODE: Client does not support authentication protocal requested by server consider upgrading MySQL client')

