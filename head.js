function exec(){
    fence.Pen.colors['fg'] = "#F00"
};

function hook(e){
    function callback(x){
        image2.src = x.content.data['text/plain'];
    };
    var src = canvas.toDataURL();

    var funcname = 'generate';
    kernel.execute(`${funcname}('${src}')`, {'iopub': {"output": callback}}, {silent:false});
};

function python(funcname, src){
    function callback(x){
        dst = x.content.data['text/plain'];
    };
    kernel.execute(`${funcname}('${src}')`, {'iopub': {"output": callback}}, {silent:false});
    return dst;
};

//touchstart touchmove touchend
function loaded(){
    kernel = IPython.notebook.kernel;
    canvas = document.getElementById('fence').contentWindow.Board.dom;
    canvas.addEventListener("mouseup", hook);
    canvas.addEventListener("touchend", hook);

    fence = document.getElementById('fence').contentWindow;

    canvas2 = document.getElementById ('result');
    ctx2 = canvas2.getContext ('2d');
    image2 = new Image();
    image2.onload = function(){
        ctx2.drawImage(image2, 0,0,400,400)
    }
};
