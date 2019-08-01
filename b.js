  //找今天星期幾
  var d = new Date();
  var today = d.getDay();
  //找這個月最後一天
  var temp = d.getDate();
  d.setMonth(d.getMonth() + 1);
  d.setDate(1);
  d.setDate(d.getDate() - 1);
  var lastDay = d.getDate();
  var date = (d.getMonth() + 1) + "/" + temp;
  //判斷星期幾要顯示幾個選項
  if (today > 2) {
      for (i = 0; i < 10 - today; i++) {
          if (temp <= lastDay) {
              date = (d.getMonth() + 1) + "/" + temp;
              temp = temp + 1;
          } else {
              date = (d.getMonth() + 2) + "/" + (temp - lastDate);
              temp = temp + 1;
          }
          $("#selectDate").append("<option>" + date + "</option>");
          console.log(date);
      }
  } else {
      for (i = 0; i < 3 - today; i++) {
          if (temp <= lastDate) {
              date = (d.getMonth() + 1) + "/" + temp;
              temp = temp + 1;
          } else {
              date = (d.getMonth() + 2) + "/" + (temp - lastDate);
              temp = temp + 1;
          }
          $("#selectDate").append("<option>" + date + "</option>");
      }
  }