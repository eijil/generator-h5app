'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const path = require('path');
const mkdirp = require('mkdirp');


module.exports = class extends Generator {

    initializing() {
        this.pkg = require('../package.json');
    }

    prompting() {

        this.log(yosay('yeoman-generator h5app.'));

        var prompt = [{
            type: 'input',
            name: 'projectName',
            message: 'you projectName ?',
            default: this.appname
        }];

        return this.prompt(prompt).then(answers => {
            this.projectName = answers.projectName;
        });
    }

    writing() {
        this._writingFiles();
        this._writingGulpfile();
        this._writingBower();
        this._writingPackageJSON();
    }
    _writingFiles(){
      this.fs.copyTpl(
          this.templatePath('src'),
          this.destinationPath('src'),
          this
      );
    }
    _writingGulpfile() {
        this.fs.copyTpl(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js'), {
                date: (new Date).toISOString().split('T')[0],
                name: this.pkg.name,
                version: this.pkg.version
            }
        );
    }
    _writingBower(){
      this.fs.copyTpl(
          this.templatePath('bower_components'),
          this.destinationPath('bower_components'),
          this
      );
    }
    _writingPackageJSON(){
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this
      );
    }

    end() {
        this.log(chalk.yellow.green('install success! run npm install to install dependencies'));
    }
};
