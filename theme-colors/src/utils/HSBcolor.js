// HSB自定义颜色装换工具
//hsb/hsv转HSL
export function hsv2HSL(h, s, v) {
    // both hsv and hsl values are in [0, 1]
    var l = (2 - s) * v / 2;

    if (l != 0) {
        if (l == 1) {
            s = 0
        } else if (l < 0.5) {
            s = s * v / (l * 2)
        } else {
            s = s * v / (2 - l * 2)
        }
    }

    return [h, s, l]
}


// hsb[hsv]转rgb
export function hsbToRgb(h, s, v) {
    // var h = arr[0], s = arr[1], v = arr[2];
    s = s / 100;
    v = v / 100;
    var r = 0, g = 0, b = 0;
    var i = parseInt((h / 60) % 6);
    var f = h / 60 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i) {
        case 0:
            r = v; g = t; b = p;
            break;
        case 1:
            r = q; g = v; b = p;
            break;
        case 2:
            r = p; g = v; b = t;
            break;
        case 3:
            r = p; g = q; b = v;
            break;
        case 4:
            r = t; g = p; b = v;
            break;
        case 5:
            r = v; g = p; b = q;
            break;
        default:
            break;
    }
   r = parseInt(r * 255.0)+2
   g = parseInt(g * 255.0)+1
  b = parseInt(b * 255.0)

//r = Math.ceil(r * 255.0)+2
  // g = Math.ceil(g * 255.0)+1
  // b =  Math.ceil(b * 255.0)

	//r = Math.ceil(r * 255.0)
    //g = Math.floor(g * 255.0)
   // b =  Math.floor(b * 255.0)
    // return [r, g, b];
    return `rgb(${r},${g},${b})`
}

export function rgbToHsb(arr) {
    var h = 0, s = 0, v = 0;
    var r = arr[0], g = arr[1], b = arr[2];
    arr.sort(function (a, b) {
        return a - b;
    })
    var max = arr[2]
    var min = arr[0];
    v = max / 255;
    if (max === 0) {
        s = 0;
    } else {
        s = 1 - (min / max);
    }
    if (max === min) {
        h = 0;//事实上，max===min的时候，h无论为多少都无所谓
    } else if (max === r && g >= b) {
        h = 60 * ((g - b) / (max - min)) + 0;
    } else if (max === r && g < b) {
        h = 60 * ((g - b) / (max - min)) + 360
    } else if (max === g) {
        h = 60 * ((b - r) / (max - min)) + 120
    } else if (max === b) {
        h = 60 * ((r - g) / (max - min)) + 240
    }
    h = parseInt(h);
    s = parseInt(s * 100);
    v = parseInt(v * 100);
    return [h, s, v]
}
//rgb 转rgba
export function rgbToRgba(rgb, a = 1) {
    var aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
    return `rgba(${aColor[0]}, ${aColor[1]}, ${aColor[2]}, ${a})`
}
// rgb转16进制
export function rgbToColor(rgb){
    var aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i=0; i<aColor.length; i++) {
        var hex = Math.round(Number(aColor[i])).toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;    
        }
        strHex += hex;
    }
    return strHex
}
