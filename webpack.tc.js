const glob = require('glob')
const {VueLoaderPlugin} = require("vue-loader")
const path=require('path')
const list = {}
async function makeList(dirPath,list){
    //遍历所有文件
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log(files);
for (let file of files){
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
}

    
}
makeList("components/lib",list)

module.exports={
    entry: list,
    mode:"development",
    output: {
        filename:'[name].umd.js', //card.umd.js
        path:path.resolve(__dirname, 'dist'),
        library:"mui",
        libraryTarget:"umd"
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
            {
                test:/\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}