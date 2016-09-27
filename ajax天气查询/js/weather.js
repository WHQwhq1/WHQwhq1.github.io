function doSearch() {
  getWeatherInfo(document.querySelector('#city').value);
  // getCityNum(document.querySelector('#ipdress').value);
}
function getWeatherInfo(cityName){
  $.ajax({
    url:"http://apis.baidu.com/apistore/weatherservice/recentweathers",
    data:{cityname:cityName},
    method:"get",
    headers:{
      apikey:'ff6081d5a7d3297bb9bb9eaa651cd34f'
    },
    dataType:'json',
    success:function(res){
      console.log(res);
      var div = document.querySelector('#weatherInfo');

      // 定义一个数组
      // 让数组==历史7天记录
      // push上今天的
      // 再加上未来4天的
      if (res.errNum==0) {
        var result = [];
        result = res.retData.history;
        result.push(res.retData.today);
        result = result.concat(res.retData.forecast);
        weatherInfo.innerHTML = template('table',{list:result,title:"近12天天气"});
      }
      else{
        alert('城市名有误，请重新输入');
      }

/*
        var city = res.retData.city;
        var cityid = res.retData.cityid;
        var p = document.querySelector('p');
        p.innerHTML = '城市:'+city +'---'+'城市代码:'+ cityid;
        div.appendChild(p);

        var forecast = {};
        var forecastArr = res.retData.forecast;
        for (var forecast in forecastArr) {
          forecast.date = forecastArr.date;
          forecast.fengli = forecastArr.fengli;
          forecast.hightemp = forecastArr.hightemp;
          forecast.lowtemp = forecastArr.lowtemp;
          forecast.type = forecastArr.type;
          forecast.week = forecastArr.week;
        }
        weatherInfo();
        function weatherInfo(){
          var arr = forecastArr;
          var html = template('table',{list:arr,title:"Forecast"});
          document.querySelector('#forecast').innerHTML = html;
        }

        var history = {};
        var historyArr = res.retData.history;

        for (var history in historyArr) {
          history.date = historyArr.date;
          history.fengli = historyArr.fengli;
          history.hightemp = historyArr.hightemp;
          history.lowtemp = historyArr.lowtemp;
          history.type = historyArr.type;
          history.week = historyArr.week;
        }
        weatherInfoH();
        function weatherInfoH(){
          var arr1 = historyArr;
          var html = template('table',{list:arr1,title:"History"});
          document.querySelector('#history').innerHTML = html;
        }

        var today = {};
        var todayArr = res.retData.today;
         for (var today in todayArr) {
          today.date = todayArr.date;
          today.fengli = todayArr.fengli;
          today.hightemp = todayArr.hightemp;
          today.lowtemp = todayArr.lowtemp;
          today.type = todayArr.type;
          today.week = todayArr.week;
        }
        weatherInfoT();
        function weatherInfoT(){
          var arr2 = today;
          console.log(arr2);
          var html = template('table',{list:arr2,title:"Today"});
          document.querySelector('#today').innerHTML = html;
        }
*/
        // console.dir(forecastArr);
        // console.dir(forecast);
        // console.dir(historyArr);
        // console.dir(todayArr);
        // console.dir(city);
        // console.dir(cityid);
    },
    error:function(err) {
      console.log(err);
    }
  });
}
