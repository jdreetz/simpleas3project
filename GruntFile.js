module.exports = function(grunt){	
	require('jit-grunt')(grunt);
	var config = grunt.file.readJSON('package.json'),
		debug = grunt.option('debug') || true,
		host_page = grunt.option('host') || 'http://localhost:9000',
		sdk = process.env.FLEX_HOME || grunt.option('sdk') || config.FLEX_SDK;


	if(!grunt.file.exists(sdk)){
		grunt.fail.fatal('Flex SDK not available. Please provide a path to the FLEX SDK using one of the following options: \n \tEnvironment Variable \'FLEX_HOME\' set to Flex SDK home directory \n \tpackage.json \'FLEX_SDK\' set to Flex SDK home directory \n \t\'sdk\'= Flex SDK home directory option passed to grunt	');
	}

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
