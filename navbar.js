$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-expand-sm bg-dark navbar-dark">';
    bar += '<a class="navbar-brand" href="#">James Skibinski</a>';
    bar += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
    bar += '<span class="navbar-toggler-icon"></span>';
    bar += '</button>';
    bar += '<div class="collapse navbar-collapse" id="collapsibleNavbar">';
    bar += '<ul class="navbar-nav">';
    bar += '<li class="nav-item">';
    bar += '<a class="nav-link" href="./index.html" target="_top">Home</a>';
    bar += '</li>';
	bar += '<li class="nav-item">';
	bar += '<a class="nav-link" href="#">About</a>';
	bar += '</li>';
	bar += '<li class="nav-item">';
	bar += '<a class="nav-link" href="./resume.html" target="_top">Resume</a>';
	bar += '</li>';
	bar += '<li class="nav-item">';
	bar += '<a class="nav-link" href="./publications.html" target="_top">Publications</a>';
	bar += '</li>';
    bar += '</ul>';
	bar += '</div>';
	bar += '</nav>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}