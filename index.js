document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({
        clientId: "aa595366165a4cf28b834cf107b08f64",
        divId: "adobe-dc-view",
    });
    adobeDCView.previewFile({
        content: {
            location: {
                url: "Resume.pdf",
            },
        },
        metaData: {
            fileName: "Resume.pdf"
        }
    }, {
        embedMode: "SIZED_CONTAINER",
        exitPDFViewerType: "CLOSE"
    });
});