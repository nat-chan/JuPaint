#!/usr/bin/env python
import sys
sys.path.append("./SPADE")

#from options.test_options import TestOptions
#from models.pix2pix_model import Pix2PixModel
#from util.visualizer import Visualizer
import util.util
import util.coco
import util.visualizer

N=182

tag ="""\
<input type="button" value="%s" style="background-color:%s;" onclick="fence.Pen.colors['fg']='%s';"/>\
"""

c = util.util.Colorize(N)
for i in range(N):
    label = util.coco.id2label(i)
    r,g,b = map(int, c.cmap[i])
    h = "#%06x" % (r<<16|g<<8|b)
    print(tag % (label,h,h))

#opt = TestOptions().parse()
#model = Pix2PixModel(opt)
#model.eval()

