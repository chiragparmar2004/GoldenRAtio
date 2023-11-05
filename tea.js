//  // JavaScript code here
//  let my = {}
//  function init() {
//      let version = '0.91'
//      let w = 440;
//      my.wd = w
//      my.aClr = "#0000ff";
//      my.bClr = "#FF8C00";
//      my.tClr = "#000088";
//      my.goldClr = "#FFD700";
//      my.notClr = "#778899";
//      my.phi = 1.61803398874989484820;
//      my.landQ = true;
//      let s = "";
//      s += '<div class="js" style="position: relative; text-align: center; margin:auto; max-width:' + w + 'px;  ">';
//      s += wrap({
//          id: 'num',
//          cls: 'input',
//          style: 'width:100px; text-align:center; margin-bottom:2px;',
//          txt: '100'
//      })
//      s += '<canvas id="canvasArrows" style=" z-index:-1; display: none "></canvas>';
//      s += '<input type="range" id="r1"  value="72" min="0" max="100" step=".01" style="z-index:2; margin 0 0 0 7px; width:414px; height:17px; border: none;" oninput="go()" onchange="go()" />';
//      s += '<div style="height:15px;"></div>'
//      s += wrap({
//          cls: 'control',
//          style: 'height:50px; width:170px;',
//          txt: '<div id="f2t" style=" color:' + my.tClr + '; position:absolute; left:10px; top:5px; min-width:60px; text-align:center;"></div>' + '<div id="f2a" style=" color:' + my.aClr + '; position:absolute; left:10px; top:29px; min-width:60px; text-align:center; border-top: 2px solid darkblue;"></div>' + '<div style="font: bold 13pt Arial; position:absolute; left:80px; top:19px; text-align:center;">=</div>' + '<div id="f2" style="font-size: 1.2em; color:' + my.tClr + '; position:absolute; left:100px; top:14px; text-align:center ;"></div>'
//      })
//      s += wrap({
//          cls: 'control',
//          style: 'height:50px; width:170px;',
//          txt: '<div id="f1a" style=" color:' + my.aClr + '; position:absolute; left:10px; top:5px; min-width:60px; text-align:center;"></div>' + '<div id="f1b" style=" color:' + my.bClr + '; position:absolute; left:10px; top:29px; min-width:60px; text-align:center; border-top: 2px solid darkblue;"></div>' + '<div style="font: bold 13pt Arial; position:absolute; left:80px; top:19px; text-align:center;">=</div>' + '<div id="f1" style="font-size: 1.2em; color:' + my.aClr + '; position:absolute; left:100px; top:14px; text-align:center;"></div>'
//      })
//      s += wrap({
//          pos: 'abs',
//          style: 'left:180px; top:160px;',
//          txt: wrap({
//              id: 'instr',
//              style: 'display:inline-block;  width:165px;'
//          }) + '<button id="phiBtn" style="z-index:2;" class="btn"  onclick="makePhi()" >&nbsp;=&nbsp;</button>'
//      })
//      s += '<button id="landBtn" style="z-index:2;margin-top:0px;" class="btn"  onclick="toggleLand()" >Landscape</button>';
//      s += wrap({
//          txt: '<canvas id="canvasRect" style=" z-index:-1; "></canvas>' + wrap({
//              id: 'rectw',
//              cls: 'output',
//              pos: 'abs'
//          }) + wrap({
//              id: 'recth',
//              cls: 'output',
//              pos: 'abs'
//          })
//      })
 
//      s += wrap({
//          id: 'resize',
//          pos: 'abs',
//          style: 'right: 0; bottom: 0;'
//      })
//      s += '</div>';
//      docInsert(s)
//      my.canArrows = canvasInit('canvasArrows', w, 52, 2)
//      my.canRect = canvasInit('canvasRect', w, 250, 2)
//      go();
//  }
//  function makePhi() {
//      let r1 = document.getElementById("r1");
//      r1.value = (my.phi - 1) * 100;
//      go();
//  }
//  function toggleLand() {
//      my.landQ = !my.landQ;
//      let s = "Landscape";
//      if (!my.landQ)
//          s = "Portrait";
//      document.getElementById("landBtn").innerHTML = s;
//      go();
//  }
//  function onChg() {
//      go()
//  }
//  function go() {
//      let r1 = document.getElementById("r1");
//      let v = r1.value;
//      v = v / 100;
//      let drawScale = 400;
//      let phiQ = false;
//      if (Math.abs(v - (my.phi - 1)) < 0.002) {
//          v = my.phi - 1;
//          phiQ = true;
//          console.log("phiQ", phiQ);
//      }
//      let show = document.getElementById("num");
//      let showScale = show.value;
//      let a = fmt(v * showScale, 4)
//      let b = fmt(showScale - a, 4)
//      let t = showScale.toString();
//      document.getElementById("f1a").innerHTML = a;
//      document.getElementById("f1b").innerHTML = b;
//      let f1 = fmt(v / (1 - v), 4)
//      if (f1 == Number.POSITIVE_INFINITY)
//          f1 = "Undefined";
//      document.getElementById("f1").innerHTML = f1;
//      document.getElementById("f2t").innerHTML = t;
//      document.getElementById("f2a").innerHTML = a;
//      let f2 = fmt(1 / v, 4)
//      if (f2 == Number.POSITIVE_INFINITY)
//          f2 = "Undefined";
//      document.getElementById("f2").innerHTML = f2;
//      let instr = "";
//      if (phiQ) {
//          document.getElementById("f1").style.color = my.goldClr;
//          document.getElementById("f2").style.color = my.goldClr;
//          document.getElementById("instr").style.color = my.goldClr;
//          instr = "They are the same!<br/>The Golden Ratio!";
//      } else {
//          document.getElementById("f1").style.color = my.notClr;
//          document.getElementById("f2").style.color = my.notClr;
//          document.getElementById("instr").style.color = my.notClr;
//          instr = "Try to make<br/>these the same.";
//      }
//      document.getElementById("instr").innerHTML = instr;
//      let g = my.canRect.g
//      g.clearRect(0, 0, g.canvas.width, g.canvas.height)
//      let rectX = 80;
//      let rectY = 4;
//      g.fillStyle = "#eeffee";
//      g.beginPath();
//      g.fill();
//      if (phiQ) {
//          g.strokeStyle = my.goldClr;
//          g.fillStyle = "#f1f1be";
//      } else {
//          g.strokeStyle = "#000000";
//          g.fillStyle = "#bbddff";
//      }
//      g.beginPath();
//      g.font = "bold 11pt Verdana";
//      g.lineWidth = 3;
//      if (my.landQ) {
//          let wd = 240;
//          let ht = wd * v;
//          g.rect(100, rectY, wd, ht);
//          g.stroke();
//          g.fill();
//          setDiv("rectw", t.toString(), rectX + wd / 2, rectY + 5);
//          setDiv("recth", a.toString(), 103, rectY + ht / 2 - 10);
//      } else {
//          let ht = 240;
//          let wd = ht * v;
//          g.rect((my.wd - wd) / 2, rectY, wd, ht);
//          g.stroke();
//          g.fill();
//          setDiv("rectw", t.toString(), (my.wd / 2) - 20, rectY + 5);
//          setDiv("recth", fmt(t / v, 4), (my.wd - wd) / 2 + 3, rectY + 110);
//      }
//      g = my.canArrows.g
//      g.clearRect(0, 0, g.canvas.width, g.canvas.height)
//      let abHt = 30;
//      let tHt = 8;
//      let lt = 20;
//      g.lineWidth = 2;
//      g.strokeStyle = my.aClr;
//      g.fillStyle = my.aClr;
//      g.beginPath();
//      g.moveTo(lt, abHt);
//      g.lineTo(lt + v * drawScale, abHt);
//      g.drawArrow(lt, abHt, 20, 2, 20, 10, Math.PI);
//      g.drawArrow(lt + v * drawScale, abHt, 20, 2, 20, 10, 0);
//      g.stroke();
//      g.fill();
//      g.font = "12pt Verdana";
//      g.fillText(a.toString(), v / 2 * drawScale, abHt + 20);
//      g.lineWidth = 2;
//      g.strokeStyle = my.bClr;
//      g.fillStyle = my.bClr;
//      g.beginPath();
//      g.moveTo(lt + v * drawScale, abHt);
//      g.lineTo(lt + drawScale, abHt);
//      g.drawArrow(lt + v * drawScale, abHt, 20, 2, 20, 10, Math.PI);
//      g.drawArrow(lt + drawScale, abHt, 20, 2, 20, 10, 0);
//      g.stroke();
//      g.fill();
//      g.font = "12pt Verdana";
//      g.fillText(b.toString(), (v + 1) / 2 * drawScale, abHt + 20);
//      g.lineWidth = 2;
//      g.strokeStyle = my.tClr;
//      g.fillStyle = my.tClr;
//      g.beginPath();
//      g.moveTo(lt, tHt);
//      g.lineTo(lt + drawScale, tHt);
//      g.drawArrow(lt, tHt, 20, 2, 20, 10, Math.PI);
//      g.drawArrow(lt + drawScale, tHt, 20, 2, 20, 10, 0);
//      g.stroke();
//      g.fill();
//  }
//  function setDiv(id, txt, x, y) {
//      let div = document.getElementById(id);
//      div.style.left = x + "px";
//      div.style.top = y + "px";
//      div.innerHTML = txt;
//  }
//  CanvasRenderingContext2D.prototype.drawArrow = function(x0, y0, totLen, shaftHt, headLen, headHt, angle, sweep, invertQ) {
//      let g = this;
//      let pts = [[0, 0], [-headLen, -headHt / 2], [-headLen + sweep, -shaftHt / 2], [-totLen, -shaftHt / 2], [-totLen, shaftHt / 2], [-headLen + sweep, shaftHt / 2], [-headLen, headHt / 2], [0, 0]];
//      if (invertQ) {
//          pts.push([0, -headHt / 2], [-totLen, -headHt / 2], [-totLen, headHt / 2], [0, headHt / 2]);
//      }
//      for (let i = 0; i < pts.length; i++) {
//          let cosa = Math.cos(-angle);
//          let sina = Math.sin(-angle);
//          let xPos = pts[i][0] * cosa + pts[i][1] * sina;
//          let yPos = pts[i][0] * sina - pts[i][1] * cosa;
//          if (i == 0) {
//              g.moveTo(x0 + xPos, y0 + yPos);
//          } else {
//              g.lineTo(x0 + xPos, y0 + yPos);
//          }
//      }
//  }
//  ;
//  function fmt(num, digits=15) {
//      if (num == Number.POSITIVE_INFINITY)
//          return "undefined";
//      if (num == Number.NEGATIVE_INFINITY)
//          return "undefined";
//      num = Number(num.toPrecision(digits));
//      if (Math.abs(num) < 1e-15)
//          num = 0;
//      return num;
//  }
//  function docInsert(s) {
//      let div = document.createElement('div')
//      div.innerHTML = s
//      let script = document.currentScript
//      script.parentElement.insertBefore(div, script);
//  }
//  function canvasInit(id, wd, ht, ratio) {
//      let el = document.getElementById(id);
//      el.width = wd * ratio;
//      el.style.width = wd + "px";
//      el.height = ht * ratio;
//      el.style.height = ht + "px";
//      let g = el.getContext("2d");
//      g.setTransform(ratio, 0, 0, ratio, 0, 0);
//      return {
//          el: el,
//          g: g,
//          ratio: ratio
//      }
//  }
//  function wrap({id='', cls='', pos='rel', style='', txt='', lbl=''}) {
//      let s = ''
//      s += '\n'
//      let inpQ = cls.includes('input')
//      if (inpQ) {
//          if (lbl.length > 0) {
//              s += '<div style="display:inline-block;">'
//              s += '<span class="label">' + lbl + ' </span>'
//          }
//          s += '<input value="' + txt + '"  oninput="onChg()" onchange="onChg()"'
//      } else {
//          s += '<div'
//      }
//      if (id.length > 0)
//          s += ' id="' + id + '"'
//      if (cls.length > 0)
//          s += ' class="' + cls + '"'
//      if (pos == 'dib')
//          s += ' style="position:relative;  display:inline-block;' + style + '"'
//      if (pos == 'rel')
//          s += ' style="position:relative; ' + style + '"'
//      if (pos == 'abs')
//          s += ' style="position:absolute; ' + style + '"'
//      if (inpQ) {
//          s += '>'
//          if (lbl.length > 0) {
//              s += '</div>'
//          }
//      } else {
//          s += ' >' + txt + '</div>'
//      }
//      s += '\n'
//      return s
//  }
//  init()

// JavaScript code here
let my = {};
function init() {
  let version = '0.91';
  let w = 440;
  my.wd = w;
  my.aClr = "#0000ff";
  my.bClr = "#FF8C00";
  my.tClr = "#000088";
  my.goldClr = "#FFD700";
  my.notClr = "#000000";
  my.phi = 1.61803398874989484820;
  my.landQ = true;
  let s = "";
  s += '<div class="js">';
  s += wrap({
    id: 'num',
    cls: 'input',
    txt: '100'
  });
  s += '<canvas id="canvasArrows"></canvas>';
  s += '<input type="range" id="r1" value="72" min="0" max="100" step=".01" oninput="go()" onchange="go()" style="display: none;" /> ';
  s += '<div style="height:15px;"></div>';
  s += wrap({
    cls: 'control',
    txt: '<div id="f2t"></div>' + '<div id="f2a"></div>' + '<div style="font: bold 13pt Arial;">=</div>' + '<div id="f2"></div>'
  });
  s += wrap({
    cls: 'control',
    txt: '<div id="f1a"></div>' + '<div id="f1b"></div>' + '<div style="font: bold 13pt Arial;">=</div>' + '<div id="f1"></div>'
  });
  s += wrap({
    pos: 'abs',
    txt: wrap({
      id: 'instr4'
    }) + '<button id="phiBtn" class="btn" onclick="makePhi()"  style="display: none;">&nbsp;=&nbsp;</button>'
  });
  s += '<button id="landBtn" class="btn" onclick="toggleLand()" style="display: none;">Landscape</button>';

  s += wrap({
    txt: '<canvas id="canvasRect"></canvas>' + wrap({
      id: 'rectw',
      cls: 'output',
      pos: 'abs'
    }) + wrap({
      id: 'recth',
      cls: 'output',
      pos: 'abs'
    })
  });
  s += wrap({
    id: 'resize',
    pos: 'abs'
  });
  s += '</div>';
  docInsert(s);
  my.canArrows = canvasInit('canvasArrows', w, 52, 2);
  my.canRect = canvasInit('canvasRect', w, 250, 2);
  go();
}

function makePhi() {
  let r1 = document.getElementById("r1");
  r1.value = (my.phi - 1) * 100;
  go();
}

function toggleLand() {
  my.landQ = !my.landQ;
  let s = "Landscape";
  if (!my.landQ)
    s = "Portrait";
  document.getElementById("landBtn").innerHTML = s;
  go();
}

function onChg() {
  go();
}

function go() {
  let r1 = document.getElementById("r1");
  let v = r1.value;
  v = v / 100;
  let drawScale = 400;
  let phiQ = false;
  if (Math.abs(v - (my.phi - 1)) < 0.002) {
    v = my.phi - 1;
    phiQ = true;
    console.log("phiQ", phiQ);
  }
  let show = document.getElementById("num");
  let showScale = show.value;
  let a = fmt(v * showScale, 4);
  let b = fmt(showScale - a, 4);
  let t = showScale.toString();
  document.getElementById("f1a").innerHTML = a;
  document.getElementById("f1b").innerHTML = b;
  let f1 = fmt(v / (1 - v), 4);
  if (f1 == Number.POSITIVE_INFINITY)
    f1 = "Undefined";
  document.getElementById("f1").innerHTML = f1;
  document.getElementById("f2t").innerHTML = t;
  document.getElementById("f2a").innerHTML = a;
  let f2 = fmt(1 / v, 4);
  if (f2 == Number.POSITIVE_INFINITY)
    f2 = "Undefined";
  document.getElementById("f2").innerHTML = f2;
  let instr = "";
  if (phiQ) {
    document.getElementById("f1").style.color = my.goldClr;
    document.getElementById("f2").style.color = my.goldClr;
    document.getElementById("instr").style.color = my.goldClr;
    instr = "They are the same!<br/>The Golden Ratio!";
  } else {
    document.getElementById("f1").style.color = my.notClr;
    document.getElementById("f2").style.color = my.notClr;
    document.getElementById("instr").style.color = my.notClr;
    instr = "Try to make<br/>these the same.";
  }
  document.getElementById("instr").innerHTML = instr;
  let g = my.canRect.g;
  g.clearRect(0, 0, g.canvas.width, g.canvas.height);
  let rectX = 80;
  let rectY = 4;
  g.fillStyle = "#eeffee";
  g.beginPath();
  g.fill();
  if (phiQ) {
    g.strokeStyle = my.goldClr;
    g.fillStyle = "#f1f1be";
  } else {
    g.strokeStyle = "#000000";
    g.fillStyle = "#bbddff";
  }
  g.beginPath();
  g.font = "bold 11pt Verdana";
  g.lineWidth = 3;
  if (my.landQ) {
    let wd = 240;
    let ht = wd * v;
    g.rect(100, rectY, wd, ht);
    g.stroke();
    g.fill();
    setDiv("rectw", t.toString(), rectX + wd / 2, rectY + 5);
    setDiv("recth", a.toString(), 103, rectY + ht / 2 - 10);
  } else {
    let ht = 240;
    let wd = ht * v;
    g.rect((my.wd - wd) / 2, rectY, wd, ht);
    g.stroke();
    g.fill();
    setDiv("rectw", t.toString(), (my.wd / 2) - 20, rectY + 5);
    setDiv("recth", fmt(t / v, 4), (my.wd - wd) / 2 + 3, rectY + 110);
  }
  g = my.canArrows.g;
  g.clearRect(0, 0, g.canvas.width, g.canvas.height);
  let abHt = 30;
  let tHt = 8;
  let lt = 20;
  g.lineWidth = 2;
  g.strokeStyle = my.aClr;
  g.fillStyle = my.aClr;
  g.beginPath();
  g.moveTo(lt, abHt);
  g.lineTo(lt + v * drawScale, abHt);
  g.drawArrow(lt, abHt, 20, 2, 20, 10, Math.PI);
  g.drawArrow(lt + v * drawScale, abHt, 20, 2, 20, 10, 0);
  g.stroke();
  g.fill();
  g.font = "12pt Verdana";
  g.fillText(a.toString(), v / 2 * drawScale, abHt + 20);
  g.lineWidth = 2;
  g.strokeStyle = my.bClr;
  g.fillStyle = my.bClr;
  g.beginPath();
  g.moveTo(lt + v * drawScale, abHt);
  g.lineTo(lt + drawScale, abHt);
  g.drawArrow(lt + v * drawScale, abHt, 20, 2, 20, 10, Math.PI);
  g.drawArrow(lt + drawScale, abHt, 20, 2, 20, 10, 0);
  g.stroke();
  g.fill();
  g.font = "12pt Verdana";
  g.fillText(b.toString(), (v + 1) / 2 * drawScale, abHt + 20);
  g.lineWidth = 2;
  g.strokeStyle = my.tClr;
  g.fillStyle = my.tClr;
  g.beginPath();
  g.moveTo(lt, tHt);
  g.lineTo(lt + drawScale, tHt);
  g.drawArrow(lt, tHt, 20, 2, 20, 10, Math.PI);
  g.drawArrow(lt + drawScale, tHt, 20, 2, 20, 10, 0);
  g.stroke();
  g.fill();
}

function setDiv(id, txt, x, y) {
  let div = document.getElementById(id);
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.innerHTML = txt;
}

CanvasRenderingContext2D.prototype.drawArrow = function(x0, y0, totLen, shaftHt, headLen, headHt, angle, sweep, invertQ) {
  let g = this;
  let pts = [
    [0, 0],
    [-headLen, -headHt / 2],
    [-headLen + sweep, -shaftHt / 2],
    [-totLen, -shaftHt / 2],
    [-totLen, shaftHt / 2],
    [-headLen + sweep, shaftHt / 2],
    [-headLen, headHt / 2],
    [0, 0]
  ];
  if (invertQ) {
    pts.push([0, -headHt / 2], [-totLen, -headHt / 2], [-totLen, headHt / 2], [0, headHt / 2]);
  }
  for (let i = 0; i < pts.length; i++) {
    let cosa = Math.cos(-angle);
    let sina = Math.sin(-angle);
    let xPos = pts[i][0] * cosa + pts[i][1] * sina;
    let yPos = pts[i][0] * sina - pts[i][1] * cosa;
    if (i == 0) {
      g.moveTo(x0 + xPos, y0 + yPos);
    } else {
      g.lineTo(x0 + xPos, y0 + yPos);
    }
  }
};

function fmt(num, digits = 15) {
  if (num == Number.POSITIVE_INFINITY)
    return "undefined";
  if (num == Number.NEGATIVE_INFINITY)
    return "undefined";
  num = Number(num.toPrecision(digits));
  if (Math.abs(num) < 1e-15)
    num = 0;
  return num;
}

function docInsert(s) {
  let div = document.createElement('div');
  div.innerHTML = s;
  let script = document.currentScript;
  script.parentElement.insertBefore(div, script);
}

function canvasInit(id, wd, ht, ratio) {
  let el = document.getElementById(id);
  el.width = wd * ratio;
  el.style.width = wd + "px";
  el.height = ht * ratio;
  el.style.height = ht + "px";
  let g = el.getContext("2d");
  g.setTransform(ratio, 0, 0, ratio, 0, 0);
  return {
    el: el,
    g: g,
    ratio: ratio
  };
}

function wrap({ id = '', cls = '', pos = 'rel', txt = '', lbl = '' }) {
  let s = '';
  let inpQ = cls.includes('input');
  if (inpQ) {
    if (lbl.length > 0) {
      s += '<div style="display:none;">';
    //   s += '<span class="label">' + lbl + ' </span>';
    }
    s += '<input value="' + txt + '" oninput="onChg()" onchange="onChg() "';
  } else {
    s += '<div';
  }
  if (id.length > 0)
    s += ' id="' + id + '"';
  if (cls.length > 0)
    s += ' class="' + cls + '"';
  if (pos == 'dib')
    s += ' style="position:relative;  display:none ;"';
  if (pos == 'rel')
    s += ' style="position:relative;display:none ;"';
  if (pos == 'abs')
    s += ' style="position:absolute; "';
  if (inpQ) {
    s += '>';
    if (lbl.length > 0) {
      s += '</div>';
    }
  } else {
    s += ' >' + txt + '</div>';
  }
  return s;
}

init();
