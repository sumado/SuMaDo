var Crawler = require("simplecrawler");

var crawler = Crawler.crawl("http://www.crunchbase.com//organization/datafox");

crawler.interval = 500;
crawler.userAgent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"

crawler.on("fetchcomplete",function(queueItem, responseBuffer, response){
    try{
        console.log(responseBuffer.toString());
    } catch (ex) {
        console.log("Error parsing: ", responseBuffer);
    }
});
