exports.getPublications = function (request, response) {
    response
        .status(200)
        .sendFile(
            '/home/alfilalex/Documentos/devopy/proyectos/cabinet/public/photos.html'
        );
};

exports.postPublications = function (request, response) {
    response.status(200).json({
        status: 'succesful',
        data: {
            data: null,
        },
    });
};
