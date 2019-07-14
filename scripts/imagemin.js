const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['src/assets/**/*.{jpg,png}'], {
        destination: 'public/assets',
        plugins: [
            imageminWebp(),
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log(files);
})();
