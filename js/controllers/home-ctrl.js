'use strict'
app.controller("home", function($scope, details) {

  // Grab the data
  var data = [],
      axisy = [6,5,4,3,2,1],
      axisx = [1,2,3,4,5,6];
  var details = [{"home":0,"away":1,"percent":5.2632,"splitUp":"20/380"},{"home":0,"away":2,"percent":5.5263,"splitUp":"21/380"},{"home":0,"away":3,"percent":1.8421,"splitUp":"7/380"},{"home":0,"away":4,"percent":0.7895,"splitUp":"3/380"},{"home":0,"away":5,"percent":0.7895,"splitUp":"3/380"},{"home":1,"away":0,"percent":8.6842,"splitUp":"33/380"},{"home":1,"away":1,"percent":11.8421,"splitUp":"45/380"},{"home":1,"away":2,"percent":8.9474,"splitUp":"34/380"},{"home":1,"away":3,"percent":2.1053,"splitUp":"8/380"},{"home":1,"away":4,"percent":0.5263,"splitUp":"2/380"},{"home":1,"away":5,"percent":0.7895,"splitUp":"3/380"},{"home":1,"away":6,"percent":0.5263,"splitUp":"2/380"},{"home":2,"away":0,"percent":7.8947,"splitUp":"30/380"},{"home":2,"away":1,"percent":7.8947,"splitUp":"30/380"},{"home":2,"away":2,"percent":3.6842,"splitUp":"14/380"},{"home":2,"away":3,"percent":2.8947,"splitUp":"11/380"},{"home":2,"away":4,"percent":0.2632,"splitUp":"1/380"},{"home":3,"away":0,"percent":5.5263,"splitUp":"21/380"},{"home":3,"away":1,"percent":6.0526,"splitUp":"23/380"},{"home":3,"away":2,"percent":1.8421,"splitUp":"7/380"},{"home":3,"away":3,"percent":1.3158,"splitUp":"5/380"},{"home":3,"away":5,"percent":0.2632,"splitUp":"1/380"},{"home":4,"away":0,"percent":2.3684,"splitUp":"9/380"},{"home":4,"away":1,"percent":1.0526,"splitUp":"4/380"},{"home":4,"away":2,"percent":0.5263,"splitUp":"2/380"},{"home":4,"away":3,"percent":0.2632,"splitUp":"1/380"},{"home":4,"away":4,"percent":0.5263,"splitUp":"2/380"},{"home":5,"away":0,"percent":1.0526,"splitUp":"4/380"},{"home":5,"away":1,"percent":0.2632,"splitUp":"1/380"},{"home":5,"away":2,"percent":0.5263,"splitUp":"2/380"},{"home":6,"away":0,"percent":0.2632,"splitUp":"1/380"},{"home":6,"away":1,"percent":0.2632,"splitUp":"1/380"},{"home":7,"away":1,"percent":0.2632,"splitUp":"1/380"},{"home":8,"away":2,"percent":0.2632,"splitUp":"1/380"},{"home":0,"away":0,"percent":7.1053,"splitUp":"27/380"}];
  angular.forEach(details, function (obj, index) {
    data.push(obj.percent * 10);
  });


    // Draw
  var width = 400,
      height = 400,
      leftgutter = 80,
      bottomgutter = 20,
      r = Raphael("chart", width, height),
      txt = {"font": '10px Fontin-Sans, Arial', stroke: "none", fill: "#000"},
      X = (width - leftgutter) / axisx.length,
      Y = (height - bottomgutter-50) / axisy.length,
      max = Math.round(X / 2) - 1;

      r.text(50, 350, "0");

      r.text(250, 390, "Home");
      r.text(10, 150, "Away").rotate(-90);



  // r.rect(0, 0, width, height, 5).attr({fill: "#000", stroke: "none"});
  for (var i = 0; i < axisx.length; i++) {
      r.text(leftgutter + X * (i + .5), 350, axisx[i]).attr(txt);
  }
  for (var i = 0; i < axisy.length; i++) {
      r.text(50, Y * (i + .5), axisy[i]).attr(txt);
  }
  var o = 0;
  for (var i = 0, ii = axisy.length; i < ii; i++) {
      for (var j = 0, jj = axisx.length; j < jj; j++) {
          var R = data[o] && Math.min(Math.round(Math.sqrt(data[o] / Math.PI) * 4), max);
          if (R) {
              (function (dx, dy, R, value) {
                  var color = "hsb(" + [(1 - R / max) * .5, 1, .75] + ")",
                      dt = r.circle(dx + 60 + R, dy + 10, R).attr({stroke: "none", fill: color});
                  if (R < 6) {
                      var bg = r.circle(dx + 60 + R, dy + 10, 6).attr({stroke: "none", fill: "#000", opacity: .4}).hide();
                  }
                  var lbl = r.text(dx + 105 + R, dy + 10, "Home:" + details[o].home)
                          .attr({"font": '10px "Helvetica Neue", Arial', stroke: "none", fill: "#000", align:"left"}).hide()
                          .rotate(45)
                  var lbl1 = r.text(dx + 90 + R, dy + 10, "Away:" +details[o].away)
                          .attr({"font": '10px "Helvetica Neue", Arial', stroke: "none", fill: "#000", align:"left"}).hide()
                          .rotate(45)
                  var lbl2 = r.text(dx + 75 + R, dy + 10, "Percent:" +details[o].percent)
                          .attr({"font": '10px "Helvetica Neue", Arial', stroke: "none", fill: "#000", align:"left"}).hide()
                          .rotate(45)
                  var lbl3 = r.text(dx + 60 + R, dy + 10, "splitUp:" +details[o].splitUp)
                          .attr({"font": '10px "Helvetica Neue", Arial', stroke: "none", fill: "#000", align:"left"}).hide()
                          .rotate(45)

                  var dot = r.circle(dx + 60 + R, dy + 10, max).attr({stroke: "none", fill: "#000", opacity: 0});
                  dot.hover(function () {
                      if (bg) {
                          bg.show();
                      } else {
                          var clr = Raphael.rgb2hsb(color);
                          clr.b = .5;
                          dt.attr("fill", Raphael.hsb2rgb(clr).hex);
                      }
                      lbl.show();
                      lbl1.show();
                      lbl2.show();
                      lbl3.show();
                  }, function () {
                      if (bg) {
                          bg.hide();
                      } else {
                          dt.attr("fill", color);
                      }
                      lbl.hide();
                      lbl1.hide();
                      lbl2.hide();
                      lbl3.hide();
                  });
              })(leftgutter + X * (j + .5) - 60 - R, Y * (i + .5) - 10, R, data[o]);
          }
          o++;
      }
  }
});
