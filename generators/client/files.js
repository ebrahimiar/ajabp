const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

module.exports = {
    writeFiles
};

function writeFiles() {
    this.copy('_dummy.txt', 'dummy.txt');
    this.copy('_dummy.txt', 'dummy.txt');
    this.javaDir = `${jhipsterConstants.CLIENT_MAIN_SRC_DIR}`;
    this.template('ajaFooter.html', `${this.javaDir}/app/layouts/footer/footer.component.html`);
    this.template('manifest.webapp', `${this.javaDir}/manifest.webapp`);
    this.template('home.component.html', `${this.javaDir}/app/home/home.component.html`);
    this.copy('military.png', `${this.javaDir}/content/images/military.png`);
    this.template('home.scss', `${this.javaDir}/app/home/home.scss`);
}
