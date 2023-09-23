chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const id = details.url.split('/')[4];
        return { redirectUrl: "https://cachexiv.quk.one/download?id="+id };
        },
    {
        urls: ["*://arxiv.org/pdf/*"]
    },
    ["blocking"]
    );