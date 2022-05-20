
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "恭喜你找到丛林里的猫咪窝！",
    "body": "这里记录着小猫们的活动日常，以及更多！ 快来看看吧！ → "
    }, {
    "id": 2,
    "url": "/authors",
    "title": "小猫们",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/contact",
    "title": "联系猫咪",
    "body": "  使用喵语发送给 {{site. name}}. 喵喵也许会回复!   "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/first-520/",
    "title": "猫猫的第一个520",
    "body": "2022/05/19 - 这是猫咪们的第一个520哟。 可是小黑猫要复习考试，没办法陪小白猫呜呜 TAT那就先欠着吧。小黑猫欠帐本：  陪猫咪520两杯奶茶两份炸鸡猫咪音乐剧烤红薯松鼠桂鱼清蒸鲈鱼肉夹馍很多亲亲和抱抱还有很多 等考完就可以一项一项还债啦～ 小黑猫 2022. 5. 20 "
    }, {
    "id": 8,
    "url": "/100Days/",
    "title": "猫猫100天留言",
    "body": "2022/04/02 - 小猫咪们已经在一起100天啦！ 大猫咪变成了小猫咪猫爬架，也是小猫咪最喜欢爬的猫爬架。猫猫还有很多地方要一起去呢，小猫咪可以在猫爬架上看遍风景。还会有我们自己的仙女猫呢。嘟嘟嘟嘟～ 2022. 4. 2小黑猫 "
    }, {
    "id": 9,
    "url": "/50days/",
    "title": "猫猫50天留言",
    "body": "2022/02/11 - 两只小猫在一起50天啦! 今天是两只小猫在一起50天的日子啦, 虽然只有50天,但是感觉发生了很多事情,和猫猫在一起的每一天都很有意义,都是值得记忆的一天。一起旅游,一起做饭,一起吃东西,一起学习,一起赶公交车,一切都是那么值得回忆. 我们列表还有很多没有完成呢. 今后一起去完成吧~2022. 02. 11小黑猫 "
    }, {
    "id": 10,
    "url": "/first/",
    "title": "小猫咪第一次吃米其林三星",
    "body": "2021/12/23 - 小黑猫还在调试呜呜…一定可以调好的！ "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});