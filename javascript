google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'ปีงบประมาณ');
  data.addColumn('number', 'ภาษีเงินได้บุคคลธรรมดา');
  data.addColumn('number', 'ภาษีเงินได้นิติบุคคล');
  data.addColumn('number', 'ภาษีมูลค่าเพิ่ม');

  data.addRows([
    ['2552', 198.16, 392.19, 431.78],
    ['2553', 208.38, 454.62, 502.26],
    ['2554', 236.49, 574.60, 577.73],
    ['2555', 266.22, 544.56, 659.81],
    ['2556', 299.00, 592.22, 697.74],
    ['2557', 280.94, 570.16, 711.53],
    ['2558', 302.50, 566.25, 709.03],
    ['2559', 319.12, 604.93, 716.39],
    ['2560', 314.52, 626.02, 742.25],
    ['2561', 319.02, 663.53, 793.00]

  ]);

  var options = {
    title: "ผลการจัดเก็บภาษี กรมสรรพากร ปีงบประมาณ 2552-2561",
    width: 800,
    height: 400,
    bar: {
      groupWidth: "60%"
    },
    axes: {
      y: {
        0: {
          label: 'จำนวนเงิน(หมื่นล้านบาท)'
        }
      }
    },
  };
  var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
  materialChart.draw(data, google.charts.Bar.convertOptions(options));

}



