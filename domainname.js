/* Write a function that when given a URL as a string, parses out just the domain name and returns 
it as a string. For example: */

function domainName(url){
    if (url.indexOf("//") > -1)
        domain = url.split('/')[2]
    else
        domain = url.split(".")[0]

    return result = domain.split('.')[0];
}
    // if (domain.indexOf("www") > -1)
    //     result = domain.split(("w")[3], (".")[0]);
    // else
    //     result = domain.split(".")[0]

    // return result = domain.split(".")[0];

//return result;

console.log(domainName('http://google.com'))