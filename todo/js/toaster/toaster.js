export default function Toaster({id = "toaster-container", shouldInit = true} = {}) {
    // Public API
    var app = {}

    // + Private variables
    var presets = {
        containerId: id
    }

    var state = {
        toastList: []
    }

    function init() {}

    Object.assign(app, {init});

    function createToastElement() {
        var li = document.createElement('li');

        {

        }
        
        return li;
    }

    function toast(str, callback) {}
    
    Object.assign(app, {toast});


    if (shouldInit) init();

    return app;
}

// var toaster = new Toaster();
