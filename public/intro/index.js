var images = require("images");

images("./src/index-bg2.jpg")                     //加载图像文件
    .size(2048) 
    .save("output.jpg", {               //保存图片到文件,图片质量为50
        quality : 50
	});