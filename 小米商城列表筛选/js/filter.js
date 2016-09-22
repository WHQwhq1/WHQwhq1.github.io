var search = document.querySelector('#search');
var list = document.querySelector('#list');
var data = [{
  name:"红米Note4",
  description:"Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
  price:"899元 起",
  engLishName:"hongMiNote4"
},{
  name:"红米Pro",
  description:"硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身",
  price:"1499元 起",
  engLishName:"hongMiPro"
},{
  name:"红米手机3S",
  description:"指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池",
  price:"699元 起",
  engLishName:"hongMiShouJi3S"
},{
  name:"红米Note3",
  description:"【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏",
  price:"799元 起",
  engLishName:"hongMiNote3"
},{
  name:"小米Max全网通",
  description:"6.44大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃",
  price:"1299元 起",
  engLishName:"xiaoMiMaxQuanWangTong"
},{
  name:"小米手机5 标准版/高配版",
  description:"骁龙820处理器 / 4轴防抖相机 / 新增支持双开微信，能刷公交卡、银行卡",
  price:"1799元 起",
  engLishName:"xiaoMiShouJi5 BiaoZhunBan/GaoPeiBan"
}];
function initCtrl(data){
var strHtml = '';
data.forEach(function(item){
  // strHtml +='<div>' + item.name + '</div>' ;
  strHtml +=`<div class="section">
    <div class="J_linksign-customize">
      <div class="item">
        <div class="img">
          <img class="ico lazy" src="http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg" data-src="http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg"
          style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
          <img class="tag lazy" src="http://c1.mifile.cn/f/i/f/mishop/iic/st.png">
        </div>
        <div class="info">
          <div class="name">
            <p id="list">
            ${item.name}
            </p>
          </div>
          <div class="brief">
            <p>${item.description}</p>
          </div>
          <div class="price">
            <p>${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
});
list.innerHTML = strHtml;
}
search.onkeyup = function(e){
  var str = search.value;
  var result = data.filter(function(item){
    if (item.name.toLowerCase().indexOf(str.toLowerCase())>-1
    || item.engLishName.toLowerCase().indexOf(str.toLowerCase())>-1){
      if (!str) {
        return;
      }
      else {
          return item;
      }
    }
  });
initCtrl(result);
}
