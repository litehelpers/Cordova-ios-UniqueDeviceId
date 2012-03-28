/**
	Cordova UniqueDeviceId Plugin
	MIT Licensed
**/

if (typeof Cordova !== "undefined") {
    /**
     * Constructor
     */
    function UniqueDeviceId() {
        this._callback = null;
    }

    /**
     * getUniqueDeviceId - use this method when you need a unique identifier in one app
     */
    UniqueDeviceId.prototype.getUniqueDeviceId = function(cb) {
        this._callback = cb;
        Cordova.exec("UniqueDeviceId.getUniqueDeviceId");
    }

    /**
     * uniqueGlobalDeviceIdentifier - use this method when you need a unique global identifier to track a device
     */
    UniqueDeviceId.prototype.getUniqueGlobalDeviceId = function(cb) {
        this._callback = cb;
        Cordova.exec("UniqueDeviceId.getUniqueGlobalDeviceId");
    }

    UniqueDeviceId.prototype._return_callback = function(val) {
        if (this._callback)
            this._callback(val);
    }

    Cordova.addConstructor(function() {
        if(!window.plugins)
        {
            window.plugins = {};
        }
        window.plugins.uniqueDeviceId = new UniqueDeviceId();
    });
};
