////Menu section
//var mainnav = document.getElementById("mainnav1");
//var mli = mainnav.children[0].children;
//for (var i = 0; i < mli.length; i++) {
//    mli[i].addEventListener('click', function () {
//        menuActive(this);
//    });
//    mli[i].className = mli[i].className.replace("active", "");
//}

//function menuActive(obj) {
//
//}

var links = document.getElementsByClassName('links');
var myRe = /^[^-]+/;
var newObj;
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        openMe(this);
    });
}

function openMe(obj) {
    var attr = obj.getAttribute("id");
    var subAttr = myRe.exec(attr);
    var i, tabpane;
    tabpane = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabpane.length; i++) {
        tabpane[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(subAttr[0]).style.display = "block";
    obj.className += " active";
    setBackground(subAttr[0]);
}

function setBackground(bg) {
    var attr = document.getElementById("tab-bg");
    attr.style.background = "url('../javascript/img/bgs/" + bg + ".jpg')left center no-repeat";
}
//==========================================

var txlinks = document.getElementsByClassName("tx-links");
for (var j = 0; j < txlinks.length; j++) {
    txlinks[j].addEventListener('click', function () {
        txOpenOnClick(this);
    });
}

function txOpenOnClick(obj) {
    var title = obj.childNodes[1].getAttribute("title");
    var txcitem = document.getElementsByClassName("txc-item");
    for (var i = 0; i < txcitem.length; i++) {
        txcitem[i].style.display = "none";
        txlinks[i].className = txlinks[i].className.replace(" active", "");
    }
    obj.className += " active";
    var attr = obj.getAttribute("id");
    var dataid = obj.children[0].getAttribute("data-id");
    var display;
    if (dataid) {
        display = dataid;
    } else {
        var subAttr = myRe.exec(attr);
        display = subAttr[0];
    }
    document.getElementById(display).style.display = "block";
    document.getElementById("title").innerHTML = title;
}
//fixed menu
$(function () {
    var headerbottom = document.getElementById('header-bottom');
    var department = document.getElementById('department');
    window.onscroll = function () {
        if (window.pageYOffset <= 163) {
            headerbottom.style.position = "relative";
            department.style.marginTop = "0px";
        } else {
            headerbottom.style.position = "fixed";
            department.style.marginTop = "50px";
        }
    }
});
//Side menu
$(function () {
    $("ul.menubar>li.has-sub>a").click(function () {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.children('ul').slideUp(100);
        } else {
            element.addClass('open');
            element.children('ul').slideDown(100);
        }
        return false;
    });
});
//Profile section start
