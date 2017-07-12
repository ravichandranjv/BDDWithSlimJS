# BDDWithSlimJS
SlimJS is "An Async Node.js SliM server for FitNesse" - https://github.com/noamtcohen/SlimJS

Pre-requisites -  JRE, Fitnesse - http://fitnesse.org/, NodeJs - https://nodejs.org/en/

For the uninitiated to fitnesse

Once fitnesse is installed and you have un-jarred the fitnesse.jar file with "java -jar [fitnesse file].jar" or, if port 80 is already in use, "java -jar [fitnesse file].jar -p 8888 (or xxxx)", your fitnesse server is listening and the below steps can be executed. Please refer to the screenshot - fitnesseserver.png - for the state of the server as it should look in your machine.


Scenario testing for Javascript using SlimJs

1. Install SlimJS with npm install slimjs --save-dev
2. SlimJS requires the fitnesse server. 

After installing fitnesse, create a new test fixture named "FirstBDDTest"(case sensitive, otherwise fitnesse will not recognize this page as a test page), copy/paste the contents in "content.txt" to the page and Save.

3. Modify the SlimJS script in FirstBDDTest to reflect the correct path to the SlimJs installation in your machine - modify these two lines

node E:\fitnesse\node_modules\slimjs\src\SlimJS

!path E:\fitnesse\slimtests

Save the changes.

4. Click on Test and run the test. The two tests should fail.
5. Change the space(s) to make the tests pass
6. Refer to the screenshot in the slimjs_testfixture.png file.
7. Check out the  PDF file to know about BDD using SlimJs

Footnote: The UADD part is fulfilled when the Scenarios are tested, directly, as in this example. The step-by-step implementation of the complete framework is explained in another part - BDD+TDD+UADD. I will update the link to that example here as soon as I push the necessary artifacts. 

Updated: TDD - https://github.com/ravichandranjv/TDDWithMocha
To go to the UADD part - https://github.com/ravichandranjv/UADD
