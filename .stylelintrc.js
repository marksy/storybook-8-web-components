const { readdirSync, statSync } = require('node:fs');
const { join } = require('node:path');

const allCssFiles = getFilePathsRecursive(
    join(__dirname, 'src'),
    file => file.endsWith('.css')
);

module.exports = {
    extends: ['stylelint-config-prettier'],
    plugins: ['stylelint-value-no-unknown-custom-properties'],
    rules: {
        'csstools/value-no-unknown-custom-properties': [
            true,
            {
                // Allow using any css variable defined in any other css file.
                // Not technically correct, since in theory some css files might not be lazily loaded when others are
                // trying to use not-yet-defined variables, but this is an improvement on the current situation (no lint
                // check for using completely undefined / unknown variables at all).
                importFrom: allCssFiles,
            },
        ],
    },
};

function getFilePathsRecursive(directoryPath, predicate) {
    let results = [];
    const list = readdirSync(directoryPath);
    list.forEach((file) => {
        file = join(directoryPath, file);
        const stat = statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilePathsRecursive(file, predicate));
        } else {
            if (predicate(file)) {
                results.push(file);
            }
        }
    });
    return results;
}
