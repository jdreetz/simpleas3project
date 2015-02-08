module.exports = function(grunt){	
	require('jit-grunt')(grunt);
	var config = grunt.file.readJSON('package.json'),
		debug = grunt.option('debug') || true,
		host_page = grunt.option('host') || 'http://localhost:9000',
		sdk = process.env.FLEX_SDK || grunt.option('sdk') || config.FLEX_SDK;

	grunt.initConfig({			
		flex_sdk: sdk,
		as3:{
			mxmlc:{
				main:{
					args:[
						"-debug=" + debug,
						"-static-link-runtime-shared-libraries=true",
						"-output dist/main.swf",
						"-- src/Main.as"
					]
				}
			}
		},
		serve:{
			options:{
				serve:{
					path:'dist'
				},
				port: 9000
			}
		},
		shell:{
			debug:{
				command: sdk.replace(/\/?$/, '/') + 'bin/fdb ' + host_page
			}
		},
		watch:{
			files:['**/*'],
			tasks:['default']
		}
	});
	shellConfig = grunt.config.shell;
	grunt.registerTask('debug',['shell:debug']);
	grunt.registerTask('default',['as3']);
};
