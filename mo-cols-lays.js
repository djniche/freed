function EJ() {
    var d = [];
    d.push({
        desc: '240&&float',
        col_type: 'x5_webview_single'
    });
    var html = getResCode();
    var arts = parseDomForArray(html, 'body&&.mo-movs-btns');
    var tabs = [];
    for (var i in arts) {
        tabs.push(parseDomForHtml(arts[i], 'Text'))
    }
    var conts = parseDomForArray(html, 'body&&.mo-movs-item');
    var lists = [];
    for (var i in conts) {
        lists.push(parseDomForArray(conts[i], 'ul&&li'))
    }
    var title = parseDomForHtml(html, '.mo-part-full&&alt');
    d.push({
        title: '分类：' + parseDomForHtml(html, '.mo-cols-lays&&li,2--span&&Text') + ' | ' + parseDomForHtml(html, '.mo-cols-lays&&li,3--span&&Text') + ' | ' + parseDomForHtml(html, '.mo-cols-lays&&li,4--span&&Text') + '\n' + parseDomForHtml(html, '.mo-cols-lays&&li&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.mo-cols-lays&&li,1&&Text').substring(0, 15),
        desc: '更新时间：' + parseDomForHtml(html, '.mo-cols-lays&&li,5&&Text').substring(0, 15),
        pic_url: parseDom(html, '.mo-situ-pics&&data-original'),
        url: "hiker://empty$fypage$" + title + `@rule=js:eval(request('https://gitee.com/zbaolin/hksj/raw/master/SS.js'));jusou()`,
        col_type: 'movie_1_vertical_pic'
    });
    try {
        var des_desc = parseDomForHtml(html, '.mo-lhxl-24px&&Text');
        if (des_desc.length > 60) {
            des_desc = des_desc.replace(des_desc, des_desc.substring(0, 60) + "......");
        }

        d.push({
            title: des_desc,
            col_type: 'long_text'
        });
    } catch (e) { }

var _0xodu='jsjiami.com.v6',_0x1195=[_0xodu,'\x40\x6c\x61\x7a\x79\x52\x75\x6c\x65\x3d\x2e\x6a\x73\x3a\x74\x72\x79\x7b\x76\x61\x72\x20\x48\x20\x3d\x20\x72\x65\x71\x75\x65\x73\x74\x28\x69\x6e\x70\x75\x74\x29\x3b\x76\x61\x72\x20\x55\x20\x3d\x20\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x28\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x48\x2c\x20\x27\x2e\x6d\x6f\x2d\x70\x6c\x61\x79\x2d\x6c\x6f\x61\x64\x26\x26\x64\x61\x74\x61\x2d\x70\x6c\x61\x79\x27\x29\x2e\x73\x6c\x69\x63\x65\x28\x33\x29\x29\x3b\x76\x61\x72\x20\x6a\x78\x20\x3d\x20\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x48\x2c\x20\x27\x2e\x6d\x6f\x2d\x70\x6c\x61\x79\x2d\x6c\x6f\x61\x64\x26\x26\x64\x61\x74\x61\x2d\x70\x61\x72\x73\x65\x27\x29\x3b\x69\x66\x28\x55\x2e\x69\x6e\x64\x65\x78\x4f\x66\x28\x27\x68\x74\x6d\x6c\x27\x29\x21\x3d\x2d\x31\x29\x7b\x72\x65\x66\x72\x65\x73\x68\x58\x35\x57\x65\x62\x56\x69\x65\x77\x28\x27\x27\x29\x3b\x76\x61\x72\x20\x75\x72\x6c\x20\x3d\x20\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x72\x65\x71\x75\x65\x73\x74\x28\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x69\x74\x61\x6e\x2e\x6d\x67\x74\x76\x2e\x63\x6f\x6d\x2e\x68\x64\x38\x2e\x70\x77\x2f\x64\x70\x2f\x61\x6e\x61\x6c\x79\x73\x69\x73\x2e\x70\x68\x70\x3f\x76\x3d\x27\x2b\x55\x29\x2c\x27\x62\x6f\x64\x79\x26\x26\x73\x63\x72\x69\x70\x74\x2c\x2d\x31\x26\x26\x48\x74\x6d\x6c\x27\x29\x3b\x65\x76\x61\x6c\x28\x75\x72\x6c\x2e\x73\x70\x6c\x69\x74\x28\x27\x3b\x27\x29\x5b\x30\x5d\x29\x3b\x75\x72\x6c\x73\x7d\x65\x6c\x73\x65\x20\x69\x66\x28\x6a\x78\x2e\x69\x6e\x64\x65\x78\x4f\x66\x28\x27\x6d\x6d\x27\x29\x21\x3d\x2d\x31\x29\x7b\x65\x76\x61\x6c\x28\x67\x65\x74\x43\x72\x79\x70\x74\x6f\x4a\x53\x28\x29\x29\x3b\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6c\x73\x2e\x39\x30\x6d\x6d\x2e\x6d\x65\x2f\x64\x64\x79\x75\x6e\x2f\x27\x20\x2b\x20\x55\x20\x2b\x20\x27\x2f\x6c\x2f\x27\x20\x2b\x20\x43\x72\x79\x70\x74\x6f\x4a\x53\x2e\x4d\x44\x35\x28\x55\x20\x2b\x20\x27\x64\x75\x6f\x64\x75\x6f\x27\x20\x2b\x20\x27\x6c\x27\x20\x2b\x28\x4d\x61\x74\x68\x2e\x66\x6c\x6f\x6f\x72\x28\x6e\x65\x77\x20\x44\x61\x74\x65\x28\x29\x2e\x67\x65\x74\x54\x69\x6d\x65\x28\x29\x20\x2f\x20\x30\x78\x31\x38\x36\x61\x30\x29\x20\x2a\x20\x30\x78\x36\x34\x29\x2e\x74\x6f\x53\x74\x72\x69\x6e\x67\x28\x29\x29\x2b\x20\x27\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x2e\x6d\x33\x75\x38\x27\x7d\x65\x6c\x73\x65\x20\x69\x66\x28\x55\x2e\x69\x6e\x64\x65\x78\x4f\x66\x28\x27\x68\x74\x74\x70\x27\x29\x3d\x3d\x2d\x31\x29\x7b\x65\x76\x61\x6c\x28\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x66\x65\x74\x63\x68\x28\x6a\x78\x2b\x55\x29\x2c\x27\x62\x6f\x64\x79\x26\x26\x73\x63\x72\x69\x70\x74\x26\x26\x48\x74\x6d\x6c\x27\x29\x2e\x73\x70\x6c\x69\x74\x28\x27\x69\x66\x27\x29\x5b\x30\x5d\x29\x3b\x76\x6f\x64\x75\x72\x6c\x2f\x2a\x65\x76\x61\x6c\x28\x67\x65\x74\x43\x72\x79\x70\x74\x6f\x4a\x53\x28\x29\x29\x3b\x65\x76\x61\x6c\x28\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x66\x65\x74\x63\x68\x28\x6a\x78\x2b\x55\x29\x2c\x27\x62\x6f\x64\x79\x26\x26\x73\x63\x72\x69\x70\x74\x26\x26\x48\x74\x6d\x6c\x27\x29\x29\x3b\x76\x61\x72\x20\x74\x69\x6d\x65\x73\x3d\x28\x6e\x65\x77\x20\x44\x61\x74\x65\x28\x29\x29\x2e\x67\x65\x74\x54\x69\x6d\x65\x28\x29\x3b\x76\x61\x72\x20\x73\x68\x3d\x20\x43\x72\x79\x70\x74\x6f\x4a\x53\x2e\x4d\x44\x35\x28\x62\x61\x73\x65\x36\x34\x45\x6e\x63\x6f\x64\x65\x28\x69\x64\x2b\x74\x69\x6d\x65\x73\x29\x29\x2e\x74\x6f\x53\x74\x72\x69\x6e\x67\x28\x43\x72\x79\x70\x74\x6f\x4a\x53\x2e\x65\x6e\x63\x2e\x48\x65\x78\x29\x3b\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x79\x2e\x37\x38\x39\x70\x61\x6e\x2e\x63\x6e\x2f\x6e\x65\x77\x2f\x70\x6c\x61\x79\x31\x2f\x27\x2b\x69\x64\x2b\x27\x7c\x27\x2b\x74\x69\x6d\x65\x73\x2b\x27\x7c\x27\x2b\x73\x68\x2b\x27\x7c\x27\x2b\x27\x31\x27\x2b\x27\x7c\x27\x2b\x27\x69\x6e\x64\x65\x78\x2e\x6d\x33\x75\x38\x27\x2a\x2f\x7d\x65\x6c\x73\x65\x7b\x72\x65\x66\x72\x65\x73\x68\x58\x35\x57\x65\x62\x56\x69\x65\x77\x28\x27\x27\x29\x3b\x55\x7d\x7d\x63\x61\x74\x63\x68\x28\x65\x29\x7b\x69\x6e\x70\x75\x74\x7d','\x6a\x73\x74\x47\x4b\x4d\x6a\x64\x69\x7a\x5a\x61\x74\x5a\x74\x6e\x6d\x69\x4e\x46\x54\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];var _0x34d0=function(_0x3c2d35,_0x551a48){_0x3c2d35=~~'0x'['concat'](_0x3c2d35);var _0x3338b1=_0x1195[_0x3c2d35];return _0x3338b1;};(function(_0x1c19fe,_0x3c4433){var _0x2ede66=0x0;for(_0x3c4433=_0x1c19fe['shift'](_0x2ede66>>0x2);_0x3c4433&&_0x3c4433!==(_0x1c19fe['pop'](_0x2ede66>>0x3)+'')['replace'](/[tGKMdzZtZtnNFT=]/g,'');_0x2ede66++){_0x2ede66=_0x2ede66^0x8357b;}}(_0x1195,_0x34d0));var lazy=_0x34d0('0');;_0xodu='jsjiami.com.v6';

    function setTabs(tabs, vari) {
        d.push({
            title: '‘‘线路’’',
            url: `#noLoading#@lazyRule=.js:let conf = getVar('折叠');if(conf=='关'){putVar({key:'折叠', value:'开'});}else{putVar({key:'折叠', value:'关'})};refreshPage(false);'toast://切换成功';'#noHistory#hiker://empty'`,
            col_type: 'text_center_1'
        })
        if (getVar('折叠') == '开' || getVar('折叠') == '') {
            var title = '';
            for (var i = 0; i < tabs.length; i++) {
                var url = "hiker://empty@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage();'toast://切换成功！'";
                d.push({
                    title: tabs[i] + (getVar(vari, '0') == i ? '✅' : ''),
                    url: url,
                    col_type: tabs.length > 2 ? 'text_3' : 'text_2'
                })
            }
            d.push({
                col_type: 'line_blank'
            })
        }
    }
    function setLists(lists, index) {
        d.push({
            title: '‘‘选集’’',
            url: `#noLoading#@lazyRule=.js:let conf = getVar('shsort');if(conf==' - 逆序'){putVar({key:'shsort', value:' - 正序'});}else{putVar({key:'shsort', value:' - 逆序'})};refreshPage(false);'toast://切换排序成功';'#noHistory#hiker://empty'`,
            col_type: 'text_center_1'
        })
        var list = lists[index];
        if (getVar('shsort') == ' - 逆序') {
            for (var j = list.length - 1; j >= 0; j--) {
                d.push({
                    title: parseDomForHtml(list[j], 'Text'),
                    url: parseDom(list[j], 'a&&href') + lazy,
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        } else {
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: parseDomForHtml(list[j], 'Text'),
                    url: parseDom(list[j], 'a&&href') + lazy,
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    setTabs(tabs, MY_URL);
    setLists(lists, getVar(MY_URL, '0'));
    setResult(d);
}

function SYYJ() {
    var d = [];
    var conts = parseDomForArray(getResCode(), 'body&&.mo-cols-lays:has(ul)');
    for (var i in conts) {
        if (conts.length > 1) {
            d.push({
                title: '‘‘' + parseDomForHtml(conts[i], 'h2&&Text') + '’’',
                url: $(parseDom(conts[i], 'a&&href').replace('.html', '-fypage.html')).rule(() => {
                    var d = [];
                    var list = parseDomForArray(getResCode(), '.mo-cols-lays:has(ul)&&ul,1&&li');
                    for (var j in list) {
                        var img = parseDom(list[j], 'a&&data-original');
                        d.push({
                            title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
                            desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                            img: img + '@Referer=' + img,
                            url: $(parseDom(list[j], 'a&&href')).rule(() => {
                                eval(fetch('hiker://files/jiexi/80.js')); EJ()
                            })
                        });
                    }
                    setResult(d)
                }),
                col_type: 'text_center_1'
            });
        }
        var list = parseDomForArray(conts[i], 'ul,1&&li');
        for (var j in list) {
            var img = parseDom(list[j], 'a&&data-original');
            d.push({
                title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
                desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                img: img + '@Referer=' + img,
                url: parseDom(list[j], 'a&&href')
            });
        }
    }
    setResult(d)
}

function SSYJ() {
    var d = [];
    var list = parseDomForArray(getResCode(), 'body&&dl:has(dd)');
    for (var j in list) {
        d.push({
            title: parseDomForHtml(list[j], 'h1&&Text'),
            desc: parseDomForHtml(list[j], '.mo-coxs-center&&Text'),
            content: parseDomForHtml(list[j], '.mo-cols-lg10--h1&&Text'),
            img: parseDom(list[j], 'a&&data-original'),
            url: parseDom(list[j], 'a&&href')
        });
    }
    setResult(d)
}