# web-multiple-ports
API calls over different port than origin using CORS. The use case being to bypass an originating html server for api calls and still remain on the same host. Depending on browser support you may want to go with [jsonp](http://caniuse.com/#feat=cors)

# usage
```bash
# run apache on port 80
$ apachectl start
# run node on port 1234
$ node server.js
```
### request
```javascript
function getData(url, cb) {
  var http = new XMLHttpRequest()
  http.onreadystatechange = function(e) {
    if (http.readyState == 4 && http.status == 200)
      cb(null, http.responseText);
  }
  http.open("GET", url, true)
  http.send(null)
}

getData('http://localhost:1234', function(err, data){
  console.log(data)
})
```

# license
MIT
