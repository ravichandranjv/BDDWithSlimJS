# BDDWithSlimJS
SlimJS is "An Async Node.js SliM server for FitNesse" - https://github.com/noamtcohen/SlimJS

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
