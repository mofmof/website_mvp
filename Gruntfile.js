module.exports = function(grunt) {

  	grunt.initConfig({

  		// task: {
  		// 	target: {
  		// 		src: ...,
  		//		dest: ... 
  		// 	}
  		// }

  		// task: {
	  	// 	target: {
	  	// 		files: {
	  	//			'......' : ['.....','.......']
	  	//									
	  	// 		}
  		// 	}
  		// }
  		pkg: grunt.file.readJSON('package.json'),

		less: {
			options: {
				compress: false
			},
			build: {
				src: 'less/style.less',
				dest: 'css/style.css'
				// dest: 'css/style.css'
			}
		},
		csslint: {
			check: {
				src: '<%= less.build.dest %>'
			}
		},
		cssmin: {
			minimize: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyymmdd") %> */'
				},
				files: {
					'css/style.min.css': '<%= less.build.dest %>'
				}
			}
		},
		watch: {
			// options: {
			// 	livereload: true
			// },
			files:'less/*.less',
			tasks: ['less', 'cssmin']
		},
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: 'localhost'
				}
			}
		},
		uncss: {
		  dist: {
		    files: {
		      'dist/css/tidy.css': ['app/index.html', 'app/about.html']
		    }
		  }
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : 'assets/css/*.css'
                },
                options: {
                    watchTask: true // < VERY important
                },
                ghostMode: {
				    clicks: true,
				    location: true,
				    forms: true,
				    scroll: false
				}
            }
        },
		cmq: {
	    your_target: {
	      // Target-specific file lists and/or options go here.
	    }
	  }
	});

  	//plugin
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-browser-sync');
	// grunt.loadNpmTasks('grunt-contrib-jshint');

	//tasks
	// grunt.registerTask('default' , ['less','csslint', 'cssmin']);
	grunt.registerTask('default' , ['less', 'cssmin', 'connect', 'watch','browserSync']);

};