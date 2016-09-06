# Taking the Modern Tutorial to Production

Let's walk through the steps of creating the app we've been working on above in a real world environment.

##Download the Ext JS Framework

If you have not already done so, download and unpack the Ext JS framework from either the Products section 
of the main Sencha website [sencha.com](www.sencha.com) or from the downloads section of the Sencha Support portal. 

##Add Cmd to your App

Once you have your application where you want it, "cd" into its directory in your Command Line Interface (CLI).  Then, 
issue the following command:

	sencha app install --framework=/path/to/extjs/

This command will wrap your app code folder with a Sencha Cmd framework that allows your application to benefit 
from Cmd's many features.

**Note:** "/path/to/extjs/" should be replaced with the path to wherever you unzipped the Ext JS framework on your machine.

**Hint:** If you're having trouble getting Sencha Cmd installed, see the following Cmd Starter Overview.

##Download the Sample Application
Download the contents of this repository that we're currently in.

##Move Zip to Application
Copy the contents of the downloaded application into the ModernTutorial folder.

##Build Your Application
Finally, cd into your ModernTutorial folder and run:

  	sencha app build

You can now visit your application at its local address on your web server.  You can also run this command so 
that Cmd will generate a web server for you:

	sencha app watch

You can now visit the resulting address displayed in your console.  It will usually be found here:

  	http://localhost:1841
