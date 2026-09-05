# Internal example application

This directory contains the browser/server demonstration used in part 0.
It is based on the University of Helsinki example application:
<https://github.com/mluukkai/example_app>.

GitHub Pages cannot run the original Express server. A service worker therefore
implements the small JSON API locally in the browser, including the GET and POST
responses used by the course exercises. Notes are stored in the browser cache
and can be restored to the initial data by opening `reset` inside this directory.
