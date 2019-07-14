const glob = require('glob');
const path = require('path');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const assetSources = [
    'src/assets/**/*.{jpg,jpeg,png}',
    'public/assets/**/*.{jpg,jpeg,png}'
];

function convertImageToWebp(props) {
    return imagemin([props.src], props.dest, {
        plugins: [imageminWebp({ quality: 50 })]
    });
}

function convertImageToJpgOrPng(props) {
    return imagemin([props.src], props.dest, {
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8]
            }),
            imageminJpegtran()
        ]
    });
}

function convertImageToSupportedFormats(src) {
    const dest = path.parse(src).dir.replace(/(src\/|public\/)/gi, 'build/');

    convertImageToWebp({
        src,
        dest
    });

    convertImageToJpgOrPng({
        src,
        dest
    });
}

assetSources.forEach(assetSource => {
    glob(assetSource, (err, files) => {
        if (err) {
            return console.error(err);
        }

        files.forEach(file => convertImageToSupportedFormats(file));
    });
});
