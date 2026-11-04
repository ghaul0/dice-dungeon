(function(){if(location.search.indexOf('ad=1')<0)return;
var d=document.createElement('div');d.style.cssText='position:fixed;left:0;top:0;right:0;z-index:99999;background:rgba(0,0,0,.8);color:#0f0;font:12px monospace;white-space:pre-wrap;pointer-events:none;max-height:45vh;overflow:hidden';
var lines=[];function L(s){lines.push(s);if(lines.length>14)lines.shift();d.textContent=lines.join('\n');}
document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(d);});
var n={dest:0,src:0,wk:0,sp:0};var oc=AudioNode.prototype.connect;
AudioNode.prototype.connect=function(t){if(t instanceof AudioDestinationNode)n.dest++;return oc.apply(this,arguments);};
var os=AudioBufferSourceNode.prototype.start;AudioBufferSourceNode.prototype.start=function(){n.src++;return os.apply(this,arguments);};
var oe=console.error;console.error=function(){L('ERR '+[].join.call(arguments,' ').slice(0,160));return oe.apply(console,arguments);};
window.addEventListener('error',function(e){L('JSERR '+e.message);});
window.addEventListener('unhandledrejection',function(e){L('REJ '+e.reason);});
setInterval(function(){var a=window.__ac||[];L(new Date().toTimeString().slice(0,8)+' ctx:'+a.map(function(c){return c.state+'@'+c.sampleRate+' t'+c.currentTime.toFixed(1)}).join(',')+' dest:'+n.dest+' starts:'+n.src+' wl:'+(typeof AudioWorkletNode));},1500);
})();
