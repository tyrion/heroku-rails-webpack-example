# See: http://www.tomdooner.com/2014/05/26/webpack.html
# lib/tasks/assets.rake
# The webpack task must run before assets:environment task.
# Otherwise Sprockets cannot find the files that webpack produces.
Rake::Task['assets:precompile']
  .clear_prerequisites
  .enhance(['assets:compile_environment'])

namespace :assets do
  # In this task, set prerequisites for the assets:precompile task
  task :compile_environment => :webpack do
    Rake::Task['assets:environment'].invoke
  end

  desc 'Compile assets with webpack'
  task :webpack do
    sh '$(npm bin)/webpack --config config/webpack.config.js'
  end

  task :clobber do
    rm_rf "#{Rails.application.config.root}/app/assets/javascripts/application.js"
  end
end
