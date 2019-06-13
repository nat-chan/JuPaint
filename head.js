function slider(){
    fence.Pen.scale = document.getElementById('slider').value;
};

function hook(e){
    function callback(x){
        result.src = x.content.data['text/plain'].split("'")[1];
    };
    var src = canvas.toDataURL();
    var funcname = 'generate';
    kernel.execute(`${funcname}('${src}')`, {'iopub': {"output": callback}}, {silent:false});
};

//touchstart touchmove touchend
function loaded(){
    kernel = IPython.notebook.kernel;
    canvas = document.getElementById('fence').contentWindow.Board.dom;
    canvas.addEventListener("mouseup", hook);
    canvas.addEventListener("touchend", hook);

    fence = document.getElementById('fence').contentWindow;
    result = document.getElementById('result');
};
