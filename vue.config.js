// const path = require('path')
// module.default ={
// 	configureWebpack:{
// 		resolve:{
// 			alias:{
// 				'assets':'./src/assets',
// 				'common':'./src/common',
// 				'components':'./src/components',
// 				'network':'./src/network',
// 				'views':'./src/views',
// 			}
// 		}
// 	}
// }
// const path = require('path');//引入path模块
// function resolve(dir){
//     return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }
// module.exports={
//     chainWebpack:(config)=>{
//         config.resolve.alias
//             // .set('@',resolve('./src'))
//             .set('components',resolve('./src/components'))
//             .set('views',resolve('./src/views'))
//             .set('assets',resolve('./src/assets'))
// 			.set('network',resolve('./src/network'))
//         //set第一个参数：设置的别名，第二个参数：设置的路径

//     },
	 // devServer: {
	 //        proxy: {
	 //            '/api': {
	 //                // 此处的写法，我访问的是http://localhost:8080/api/dataHome.json设置代理后，axios请求不需要把域名带上，只需要把路径前面加上 /api 即可。
	 //                target: 'https://image.baidu.com/search',
	 //                // 允许跨域
	 //                changeOrigin: true,
	 //                ws: true,
	 //                pathRewrite: {
	 //                    '^/api': ''
	 //                }
	 //            }
	 //        }
	 //    }
// }
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
				//https://image.baidu.com/search/index?tn=baiduimage&word=迪丽热巴
                target: 'https://s5.mogucdn.com',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
