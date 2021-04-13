module.exports={

    /**
     * debug mode
     */
    debugMode:true,

    /**
     * default port number
     */
    port:12345,
    
    /**
     * default response header
     */
    responseHeader:{
        "Content-Type":"text/html ;charset=UTF-8",
    },

    /**
     * assets mime type
     */
    mimeType:{
        "jpg":"image/jpg",
        "png":"image/png",
        "gif":"image/gif",
        "css":"text/css",
    },

    /**
     * database connection
     */
    database:require(__dirname+"/database.js"),

    /**
     * routing
     */
    routing:require(__dirname+"/routing.js"),

};