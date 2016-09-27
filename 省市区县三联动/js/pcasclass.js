// 逻辑：1和2联动，1和3联动，2和3联动
var province = document.querySelector('#province');
var city = document.querySelector('#city');
var section = document.querySelector('#section');

var provinceArr = [{
    id: "0",
    name: "请选择省份"
}, {
    id: "1",
    name: "江苏省"
}, {
    id: "2",
    name: "河南省"
}, {
    id: "3",
    name: "安徽省"
}];
var cityArr = [{
    id: "0",
    name: "请选择城市"
}, {
    id: "1-1",
    name: "南京市",
    fid: "1"
}, {
    id: "1-2",
    name: "泰州市",
    fid: "1"
}, {
    id: "1-3",
    name: "连云港市",
    fid: "1"
}, {
    id: "2-1",
    name: "郑州市",
    fid: "2"
}, {
    id: "2-2",
    name: "开封市",
    fid: "2"
}, {
    id: "3-1",
    name: "合肥市",
    fid: "3"
}, {
    id: "3-2",
    name: "芜湖市",
    fid: "3"
}];
var sectionArr = [{
    id: "1-1-1",
    name: "江宁区",
    fid: "1-1",
    ffid:"1"
}, {
    id: "1-1-2",
    name: "玄武区",
    fid: "1-1",
    ffid:"1"
}, {
    id: "1-1-3",
    name: "秦淮区",
    fid: "1-1",
    ffid:"1"
}, {
    id: "1-1-4",
    name: "建邺区",
    fid: "1-1",
    ffid:"1"
}, {
    id: "1-2-1",
    name: "海陵区",
    fid: "1-2",
    // ffid:"1"
}, {
    id: "1-2-2",
    name: "高港区",
    fid: "1-2",
    // ffid:"1"
}, {
    id: "1-3-1",
    name: "连云区",
    fid: "1-3",
    // ffid:"1"
}, {
    id: "1-3-2",
    name: "灌南区",
    fid: "1-3",
    // ffid:"1"
}, {
    id: "2-1-1",
    name: "管城回族区",
    fid: "2-1",
    ffid:"2"
}, {
    id: "2-1-2",
    name: "中原区",
    fid: "2-1",
    ffid:"2"
}, {
    id: "2-2-1",
    name: "龙亭区",
    fid: "2-2",
    // ffid:"2"
}, {
    id: "2-2-2",
    name: "禹王台区",
    fid: "2-2",
    // ffid:"2"
}, {
    id: "3-1-1",
    name: "蜀山区",
    fid: "3-1",
    ffid:"3"
}, {
    id: "3-1-2",
    name: "肥东区",
    fid: "3-1",
    ffid:"3"
}, {
    id: "3-2-1",
    name: "镜湖区",
    fid: "3-2",
    // ffid:"3"
}, {
    id: "3-2-2",
    name: "三山区",
    fid: "3-2",
    // ffid:"3"
}];
// 第一步 初始化第一个
initProvince();

function initProvince() {
    var strHtml = '';
    provinceArr.forEach(function(item) {

        strHtml += '<option value="' + item.id + '" >' + item.name + '</option>'
    })
    province.innerHTML = strHtml;
}
// 调用select  onchange方法
function proChange() {
    var cityResult = cityArr.filter(function(item) {
        if (item.fid == province.value) {
            return item;
        }
    })
    var sectionResult = sectionArr.filter(function(item){
      if (item.ffid == province.value) {
        return item;
      }
    })
    initCity(cityResult);
    initSection(sectionResult);
}

// 追加第二个select
function initCity(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({
            id: "0",
            name: "请选择城市"
        });
    }
    data.forEach(function(item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>'

    })
    city.innerHTML = strHtml;
}

initcitys();

function initcitys() {
    var strHtml = '';
    cityArr.forEach(function(item) {

        strHtml += '<option value="' + item.id + '">' + item.name + '</option>'
    })
    city.innerHTML = strHtml;
}

function cityChange() {
    var result = sectionArr.filter(function(item) {
        if (item.fid == city.value) {
            return item;
        }
    })
    initSection(result);
}

function initSection(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({
            id: "0",
            name: "市辖区"
        });
    }

    data.forEach(function(item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '<option>'
    })
    section.innerHTML = strHtml;
}
