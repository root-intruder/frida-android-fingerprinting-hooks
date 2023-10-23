Java.perform(function x() {

    Java.deoptimizeBootImage()

    var packageName;
    var packages;
    recv(function (o) {
        packageName = o.package;
        console.log("configured for package " + packageName)
        packages = o.packages;
        console.log("packages for libs " + packages)
    });

    function classToString(x) {
        var str = null;
        if (x) {
            try {
                if (Array.isArray(x)) {
                    var hash = Java.use('java.util.Arrays').hashCode(x);
                    str = '[Ljava.lang.Object;@' + hash.toString(16);
                } else {
                    var className = '' + x.$className;
                    var classNameJava = Java.use(className);
                    var castObj = Java.cast(x, classNameJava);
                    var hash = castObj.hashCode();
                    str = className + '@' + hash.toString(16);
                }
            } catch (e) {
                console.log("Object was " + x);
                if (e.message.includes("Cast from ") || e.message === 'expected a pointer' || e.message === 'java.lang.NullPointerException: Attempt to get length of null array' || e.message.startsWith("java.lang.ClassNotFoundException: Didn\'t find class")) {
                    console.log(e.message);
                } else {
                    throw e;
                }
            }
        }
        return str
    }

    function classToHash(x) {
        var str = null;
        if (x != null) {
            try {
                if (Array.isArray(x)) {
                    var hash = Java.use('java.util.Arrays').hashCode(x);
                    str = hash.toString(16);
                } else {
                    var className = '' + x.$className;
                    var classNameJava = Java.use(className);
                    var castObj = Java.cast(x, classNameJava);
                    var hash = castObj.hashCode();
                    str = hash.toString(16);
                }
            } catch (e) {
                console.log("Object to hash was " + x);
                if (e.message.includes("Cast from ") || e.message === 'expected a pointer' || e.message === 'java.lang.NullPointerException: Attempt to get length of null array' || e.message.startsWith("java.lang.ClassNotFoundException: Didn\'t find class")) {
                    console.log(e.message);
                } else {
                    throw e;
                }
            }
        }
        return str;
    }

    function base64encode(text, noLimit){
        var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var i = 0;
        var cur, prev, byteNum, result=[];
        if (text == null) {
            return null;
        }
        function isNotZero(x) {
            for (var i = 0; i < x.length; i++) {
                if (x[i] !== 0)
                    return true;
            }
            return false
        }
        if (!isNotZero(text)) {
            return "0";
        }
        while(i < text.length && (noLimit || result.length < 50)){
            cur = text[i]<0 ? 256+text[i] : text[i];
            byteNum = i % 3;
            switch(byteNum){
                case 0: //first byte
                    result.push(digits.charAt(cur >> 2));
                    break;
                case 1: //second byte
                    result.push(digits.charAt((prev & 3) << 4 | (cur >> 4)));
                    break;
                case 2: //third byte
                    result.push(digits.charAt((prev & 0x0f) << 2 | (cur >> 6)));
                    result.push(digits.charAt(cur & 0x3f));
                    break;
            }
            prev = cur;
            i++;
        }
        if (byteNum == 0){
            result.push(digits.charAt((prev & 3) << 4));
            result.push("==");
        } else if (byteNum == 1){
            result.push(digits.charAt((prev & 0x0f) << 2));
            result.push("=");
        }
        if(i < text.length && !noLimit) {
            result.push("...");
        }
        return result.join("");
    }

    Java.use("android.media.MediaPlayer").setAudioStreamType.overload("int").implementation = function (arg0) {
        var thisObjPreExec = classToHash(this);
        this.setAudioStreamType(3)
        var sendObj = {type: "soundSuppression", function: "android.media.MediaPlayer.setAudioStreamType", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int"], args:[arg0], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return;
    }

    Java.use("android.media.AudioAttributes$Builder").setContentType.overload("int").implementation = function (arg0) {
        var thisObjPreExec = classToHash(this);
        var ret = this.setContentType(2)
        var sendObj = {type: "soundSuppression", function: "android.media.AudioAttributes$Builder.setContentType", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int"], args:[arg0], returnType: "android.media.AudioAttributes$Builder", returnedObj: classToString(ret), stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.media.AudioManager").getStreamMaxVolume.overload("int").implementation = function (arg0) {
        var thisObjPreExec = classToHash(this);
        var ret = this.getStreamMaxVolume(arg0);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.getStreamMaxVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int"], args:[arg0], returnType: "int", returnedObj: ret, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return 0;
    }

    Java.use("android.media.AudioManager").getStreamMinVolume.overload("int").implementation = function (arg0) {
        var thisObjPreExec = classToHash(this);
        var ret = this.getStreamMaxVolume(arg0);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.getStreamMinVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int"], args:[arg0], returnType: "int", returnedObj: ret, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return 0;
    }

    Java.use("android.media.AudioManager").adjustStreamVolume.overload("int", "int", "int").implementation = function (arg0, arg1, arg2) {
        var thisObjPreExec = classToHash(this);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.adjustStreamVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int", "int", "int"], args:[arg0, arg1, arg2], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }
    Java.use("android.media.AudioManager").adjustSuggestedStreamVolume.overload("int", "int", "int").implementation = function (arg0, arg1, arg2) {
        var thisObjPreExec = classToHash(this);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.adjustSuggestedStreamVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int", "int", "int"], args:[arg0, arg1, arg2], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }
    Java.use("android.media.AudioManager").adjustVolume.overload("int", "int").implementation = function (arg0, arg1) {
        var thisObjPreExec = classToHash(this);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.adjustVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int", "int"], args:[arg0, arg1], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }
    Java.use("android.media.AudioManager").playSoundEffect.overload("int", "int").implementation = function (arg0, arg1) {
        var thisObjPreExec = classToHash(this);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.playSoundEffect", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int", "int"], args:[arg0, arg1], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }
    Java.use("android.media.AudioManager").playSoundEffect.overload("int").implementation = function (arg0) {
        var thisObjPreExec = classToHash(this);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.playSoundEffect", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int"], args:[arg0], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }
    Java.use("android.media.AudioManager").setStreamVolume.overload("int", "int", "int").implementation = function (arg0, arg1, arg2) {
        var thisObjPreExec = classToHash(this);
        var sendObj = {type: "soundSuppression", function: "android.media.AudioManager.setStreamVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["int", "int", "int"], args:[arg0, arg1, arg2], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }
    Java.use("android.media.MediaPlayer").playerSetVolume.overload("boolean", "float", "float").implementation = function (arg0, arg1, arg2) {
        var thisObjPreExec = classToHash(this);
        this.playerSetVolume(true, 0.0, 0.0);
        var sendObj = {type: "soundSuppression", function: "android.media.MediaPlayer.playerSetVolume", thisObjPre: thisObjPreExec, thisObjPost: classToHash(this), argTypes: ["boolean", "float", "float"], args:[arg0, arg1, arg2], returnType: "void", returnedObj: null, stacktrace: packageFromStacktrace()};
        send(JSON.stringify(sendObj));
        return ;
    }


    function classExists(clazz) {
        try {
            Java.use(clazz)
            return true;
        } catch (e) {
            console.warn("Hooks for the optional API class " + clazz + " could not be created, since the class seems non existing.")
        }
        return false;
    }


    function packageFromStacktrace() {
        var stacktrace = Java.use("java.lang.Exception").$new().getStackTrace();
        var shortStack = [];
        for (const stackElem of stacktrace) {
            shortStack.push(stackElem.toString());
        }
        return shortStack;
    }


    Java.use("android.hardware.SensorManager").getSensors.overload().implementation = function () {
        var ret = this.getSensors();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.SensorManager.getSensors", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.hardware.SensorManager").getSensorList.overload("int").implementation = function (arg0) {
        var ret = this.getSensorList(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.SensorManager.getSensorList", argTypes: ["int"], args:[arg0], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.app.ApplicationPackageManager").getInstalledApplicationsAsUser.overload("int", "int").implementation = function (arg0, arg1) {
        var ret = this.getInstalledApplicationsAsUser(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.app.ApplicationPackageManager.getInstalledApplicationsAsUser", argTypes: ["int", "int"], args:[arg0, arg1], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.app.ActivityManager").getMemoryInfo.overload("android.app.ActivityManager$MemoryInfo").implementation = function (arg0) {
        var ret = this.getMemoryInfo(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.app.ActivityManager.getMemoryInfo", argTypes: ["android.app.ActivityManager$MemoryInfo"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.app.ActivityManager").isUserAMonkey.overload().implementation = function () {
        var ret = this.isUserAMonkey();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.app.ActivityManager.isUserAMonkey", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getTotalBytes.overload().implementation = function () {
        var ret = this.getTotalBytes();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getTotalBytes", returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getBlockSize.overload().implementation = function () {
        var ret = this.getBlockSize();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getBlockSize", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getBlockSizeLong.overload().implementation = function () {
        var ret = this.getBlockSizeLong();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getBlockSizeLong", returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getAvailableBlocks.overload().implementation = function () {
        var ret = this.getAvailableBlocks();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getAvailableBlocks", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getAvailableBlocksLong.overload().implementation = function () {
        var ret = this.getAvailableBlocksLong();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getAvailableBlocksLong", returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getBlockCount.overload().implementation = function () {
        var ret = this.getBlockCount();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getBlockCount", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getBlockCountLong.overload().implementation = function () {
        var ret = this.getBlockCountLong();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getBlockCountLong", returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getFreeBlocks.overload().implementation = function () {
        var ret = this.getFreeBlocks();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getFreeBlocks", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getFreeBlocksLong.overload().implementation = function () {
        var ret = this.getFreeBlocksLong();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getFreeBlocksLong", returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.StatFs").getFreeBytes.overload().implementation = function () {
        var ret = this.getFreeBytes();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.StatFs.getFreeBytes", returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.InputDevice").getName.overload().implementation = function () {
        var ret = this.getName();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.InputDevice.getName", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.InputDevice").getVendorId.overload().implementation = function () {
        var ret = this.getVendorId();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.InputDevice.getVendorId", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.content.pm.ConfigurationInfo").getGlEsVersion.overload().implementation = function () {
        var ret = this.getGlEsVersion();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.content.pm.ConfigurationInfo.getGlEsVersion", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.hardware.fingerprint.FingerprintManager").isHardwareDetected.overload().implementation = function () {
        var ret = this.isHardwareDetected();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.fingerprint.FingerprintManager.isHardwareDetected", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.hardware.fingerprint.FingerprintManager").hasEnrolledFingerprints.overload("int").implementation = function (arg0) {
        var ret = this.hasEnrolledFingerprints(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.fingerprint.FingerprintManager.hasEnrolledFingerprints", argTypes: ["int"], args:[arg0], returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.app.admin.DevicePolicyManager").getStorageEncryptionStatus.overload().implementation = function () {
        var ret = this.getStorageEncryptionStatus();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.app.admin.DevicePolicyManager.getStorageEncryptionStatus", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.security.Security").getProviders.overload().implementation = function () {
        var ret = this.getProviders();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.security.Security.getProviders", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.app.KeyguardManager").isKeyguardSecure.overload().implementation = function () {
        var ret = this.isKeyguardSecure();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.app.KeyguardManager.isKeyguardSecure", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.media.RingtoneManager").getRingtoneUri.overload("int").implementation = function (arg0) {
        var ret = this.getRingtoneUri(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.media.RingtoneManager.getRingtoneUri", argTypes: ["int"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.media.RingtoneManager").getRingtone.overload("int").implementation = function (arg0) {
        var ret = this.getRingtone(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.media.RingtoneManager.getRingtone", argTypes: ["int"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.content.res.AssetManager").getLocales.overload().implementation = function () {
        var ret = this.getLocales();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.content.res.AssetManager.getLocales", returnType: "java.lang.String[]", returnedObj: classToString(ret), stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.content.res.Configuration").getLocales.overload().implementation = function () {
        var ret = this.getLocales();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.content.res.Configuration.getLocales", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Locale").getLanguage.overload().implementation = function () {
        var ret = this.getLanguage();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Locale.getLanguage", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Locale").getCountry.overload().implementation = function () {
        var ret = this.getCountry();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Locale.getCountry", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Locale").toString.overload().implementation = function () {
        var ret = this.toString();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Locale.toString", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.inputmethod.InputMethodSubtype").getLanguageTag.overload().implementation = function () {
        var ret = this.getLanguageTag();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.inputmethod.InputMethodSubtype.getLanguageTag", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.inputmethod.InputMethodSubtype").getLocale.overload().implementation = function () {
        var ret = this.getLocale();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.inputmethod.InputMethodSubtype.getLocale", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.TimeZone").getDisplayName.overload("boolean", "int", "java.util.Locale").implementation = function (arg0, arg1, arg2) {
        var ret = this.getDisplayName(arg0, arg1, arg2);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.TimeZone.getDisplayName", argTypes: ["boolean", "int", "java.util.Locale"], args:[arg0, arg1, classToString(arg2)], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.TimeZone").getID.overload().implementation = function () {
        var ret = this.getID();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.TimeZone.getID", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.SystemProperties").get.overload("java.lang.String").implementation = function (arg0) {
        var ret = this.get(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.SystemProperties.get", argTypes: ["java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.SystemProperties").get.overload("java.lang.String", "java.lang.String").implementation = function (arg0, arg1) {
        var ret = this.get(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.SystemProperties.get", argTypes: ["java.lang.String", "java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1 ? arg1.slice(0, 300) : arg1], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.SystemProperties").getInt.overload("java.lang.String", "int").implementation = function (arg0, arg1) {
        var ret = this.getInt(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.SystemProperties.getInt", argTypes: ["java.lang.String", "int"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1], returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.SystemProperties").getLong.overload("java.lang.String", "long").implementation = function (arg0, arg1) {
        var ret = this.getLong(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.SystemProperties.getLong", argTypes: ["java.lang.String", "long"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1], returnType: "long", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.SystemProperties").getBoolean.overload("java.lang.String", "boolean").implementation = function (arg0, arg1) {
        var ret = this.getBoolean(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.SystemProperties.getBoolean", argTypes: ["java.lang.String", "boolean"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1], returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Properties").getProperty.overload("java.lang.String").implementation = function (arg0) {
        var ret = this.getProperty(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Properties.getProperty", argTypes: ["java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Properties").getProperty.overload("java.lang.String", "java.lang.String").implementation = function (arg0, arg1) {
        var ret = this.getProperty(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Properties.getProperty", argTypes: ["java.lang.String", "java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1 ? arg1.slice(0, 300) : arg1], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Properties").list.overload("java.io.PrintStream").implementation = function (arg0) {
        var ret = this.list(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Properties.list", argTypes: ["java.io.PrintStream"], args:[classToString(arg0)], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.util.Properties").list.overload("java.io.PrintWriter").implementation = function (arg0) {
        var ret = this.list(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.util.Properties.list", argTypes: ["java.io.PrintWriter"], args:[classToString(arg0)], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.lang.System").getProperties.overload().implementation = function () {
        var ret = this.getProperties();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.lang.System.getProperties", returnType: "java.util.Properties", returnedObj: classToString(ret), stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.lang.System").getProperty.overload("java.lang.String").implementation = function (arg0) {
        var ret = this.getProperty(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.lang.System.getProperty", argTypes: ["java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.lang.System").getProperty.overload("java.lang.String", "java.lang.String").implementation = function (arg0, arg1) {
        var ret = this.getProperty(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.lang.System.getProperty", argTypes: ["java.lang.String", "java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1 ? arg1.slice(0, 300) : arg1], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.lang.Runtime").availableProcessors.overload().implementation = function () {
        var ret = this.availableProcessors();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.lang.Runtime.availableProcessors", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.lang.Runtime").exec.overload("[Ljava.lang.String;", "[Ljava.lang.String;", "java.io.File").implementation = function (arg0, arg1, arg2) {
        var ret = this.exec(arg0, arg1, arg2);
        var details;
        if (arg0 != null) {
            var result = [];
            arg0.forEach(function (item, index) {
                result.push(item);
            });
            details = {...details, cmdarray: JSON.stringify(result)};
        }

        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.lang.Runtime.exec", argTypes: ["java.lang.String[]", "java.lang.String[]", "java.io.File"], args:[null, null, null], stacktrace: inPackageName, details: details};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.media.MediaCodecList").getCodecInfos.overload().implementation = function () {
        var ret = this.getCodecInfos();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.media.MediaCodecList.getCodecInfos", returnType: "android.media.MediaCodecInfo[]", returnedObj: classToString(ret), stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.hardware.Camera").getCameraInfo.overload("int", "android.hardware.Camera$CameraInfo").implementation = function (arg0, arg1) {
        var ret = this.getCameraInfo(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.Camera.getCameraInfo", argTypes: ["int", "android.hardware.Camera$CameraInfo"], args:[null, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.hardware.camera2.CameraManager").getCameraCharacteristics.overload("java.lang.String").implementation = function (arg0) {
        var ret = this.getCameraCharacteristics(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.camera2.CameraManager.getCameraCharacteristics", argTypes: ["java.lang.String"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.hardware.camera2.CameraCharacteristics").getKeysNeedingPermission.overload().implementation = function () {
        var ret = this.getKeysNeedingPermission();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.hardware.camera2.CameraCharacteristics.getKeysNeedingPermission", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.content.Intent").getIntExtra.overload("java.lang.String", "int").implementation = function (arg0, arg1) {
        var ret = this.getIntExtra(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.content.Intent.getIntExtra", argTypes: ["java.lang.String", "int"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1], returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("com.android.internal.os.PowerProfile").getBatteryCapacity.overload().implementation = function () {
        var ret = this.getBatteryCapacity();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "com.android.internal.os.PowerProfile.getBatteryCapacity", returnType: "double", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.media.MediaDrm").getPropertyByteArray.overload("java.lang.String").implementation = function (arg0) {
        var ret = this.getPropertyByteArray(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.media.MediaDrm.getPropertyByteArray", argTypes: ["java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.provider.Settings$System").getStringForUser.overload("android.content.ContentResolver", "java.lang.String", "int").implementation = function (arg0, arg1, arg2) {
        var ret = this.getStringForUser(arg0, arg1, arg2);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.provider.Settings$System.getStringForUser", argTypes: ["android.content.ContentResolver", "java.lang.String", "int"], args:[null, arg1 ? arg1.slice(0, 300) : arg1, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.provider.Settings$Secure").getStringForUser.overload("android.content.ContentResolver", "java.lang.String", "int").implementation = function (arg0, arg1, arg2) {
        var ret = this.getStringForUser(arg0, arg1, arg2);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.provider.Settings$Secure.getStringForUser", argTypes: ["android.content.ContentResolver", "java.lang.String", "int"], args:[null, arg1 ? arg1.slice(0, 300) : arg1, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.provider.Settings$Global").getStringForUser.overload("android.content.ContentResolver", "java.lang.String", "int").implementation = function (arg0, arg1, arg2) {
        var ret = this.getStringForUser(arg0, arg1, arg2);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.provider.Settings$Global.getStringForUser", argTypes: ["android.content.ContentResolver", "java.lang.String", "int"], args:[null, arg1 ? arg1.slice(0, 300) : arg1, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getCurrentSizeRange.overload("android.graphics.Point", "android.graphics.Point").implementation = function (arg0, arg1) {
        var ret = this.getCurrentSizeRange(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getCurrentSizeRange", argTypes: ["android.graphics.Point", "android.graphics.Point"], args:[null, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getHeight.overload().implementation = function () {
        var ret = this.getHeight();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getHeight", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getMetrics.overload("android.util.DisplayMetrics").implementation = function (arg0) {
        var ret = this.getMetrics(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getMetrics", argTypes: ["android.util.DisplayMetrics"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getRealMetrics.overload("android.util.DisplayMetrics").implementation = function (arg0) {
        var ret = this.getRealMetrics(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getRealMetrics", argTypes: ["android.util.DisplayMetrics"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getRealSize.overload("android.graphics.Point").implementation = function (arg0) {
        var ret = this.getRealSize(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getRealSize", argTypes: ["android.graphics.Point"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getRectSize.overload("android.graphics.Rect").implementation = function (arg0) {
        var ret = this.getRectSize(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getRectSize", argTypes: ["android.graphics.Rect"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.Display").getWidth.overload().implementation = function () {
        var ret = this.getWidth();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.Display.getWidth", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.WindowMetrics").getBounds.overload().implementation = function () {
        var ret = this.getBounds();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.WindowMetrics.getBounds", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.view.WindowMetrics").getWindowInsets.overload().implementation = function () {
        var ret = this.getWindowInsets();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.view.WindowMetrics.getWindowInsets", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.content.res.Resources").getDisplayMetrics.overload().implementation = function () {
        var ret = this.getDisplayMetrics();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.content.res.Resources.getDisplayMetrics", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    try {
        Java.use("com.google.android.gms.ads.identifier.AdvertisingIdClient").getAdvertisingIdInfo.overload("android.content.Context").implementation = function (arg0) {
            var ret = this.getAdvertisingIdInfo(arg0);
            var inPackageName = packageFromStacktrace();
            var sendObj = {type: "fingerprint", function: "com.google.android.gms.ads.identifier.AdvertisingIdClient.getAdvertisingIdInfo", argTypes: ["android.content.Context"], args:[null], stacktrace: inPackageName};
            send(JSON.stringify(sendObj));
            return ret;
        }
    } catch (e) {
        console.warn("Hooks for the optional API method com.google.android.gms.ads.identifier.AdvertisingIdClient.getAdvertisingIdInfo(android.content.Context) could not be created, class not hookable");
    }

    Java.use("android.net.wifi.WifiInfo").getBSSID.overload().implementation = function () {
        var ret = this.getBSSID();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiInfo.getBSSID", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiInfo").getIpAddress.overload().implementation = function () {
        var ret = this.getIpAddress();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiInfo.getIpAddress", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiInfo").getSSID.overload().implementation = function () {
        var ret = this.getSSID();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiInfo.getSSID", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiInfo").getMacAddress.overload().implementation = function () {
        var ret = this.getMacAddress();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiInfo.getMacAddress", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiInfo").getNetworkId.overload().implementation = function () {
        var ret = this.getNetworkId();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiInfo.getNetworkId", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager$NetworkCallback").onLinkPropertiesChanged.overload("android.net.Network", "android.net.LinkProperties").implementation = function (arg0, arg1) {
        var ret = this.onLinkPropertiesChanged(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager$NetworkCallback.onLinkPropertiesChanged", argTypes: ["android.net.Network", "android.net.LinkProperties"], args:[null, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager").getLinkProperties.overload("android.net.Network").implementation = function (arg0) {
        var ret = this.getLinkProperties(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager.getLinkProperties", argTypes: ["android.net.Network"], args:[null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager").isActiveNetworkMetered.overload().implementation = function () {
        var ret = this.isActiveNetworkMetered();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager.isActiveNetworkMetered", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager").getActiveNetworkInfo.overload().implementation = function () {
        var ret = this.getActiveNetworkInfo();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager.getActiveNetworkInfo", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager").getAllNetworkInfo.overload().implementation = function () {
        var ret = this.getAllNetworkInfo();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager.getAllNetworkInfo", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager").getNetworkInfo.overload("int").implementation = function (arg0) {
        var ret = this.getNetworkInfo(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager.getNetworkInfo", argTypes: ["int"], args:[arg0], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.ConnectivityManager").getDefaultProxy.overload().implementation = function () {
        var ret = this.getDefaultProxy();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.ConnectivityManager.getDefaultProxy", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.net.NetworkInterface").getHardwareAddress.overload().implementation = function () {
        var ret = this.getHardwareAddress();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.net.NetworkInterface.getHardwareAddress", returnType: "byte[]", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.net.NetworkInterface").getInetAddresses.overload().implementation = function () {
        var ret = this.getInetAddresses();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.net.NetworkInterface.getInetAddresses", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("java.net.NetworkInterface").getInterfaceAddresses.overload().implementation = function () {
        var ret = this.getInterfaceAddresses();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "java.net.NetworkInterface.getInterfaceAddresses", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").getConfiguredNetworks.overload().implementation = function () {
        var ret = this.getConfiguredNetworks();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.getConfiguredNetworks", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").getConnectionInfo.overload().implementation = function () {
        var ret = this.getConnectionInfo();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.getConnectionInfo", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").is5GHzBandSupported.overload().implementation = function () {
        var ret = this.is5GHzBandSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.is5GHzBandSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").isDeviceToApRttSupported.overload().implementation = function () {
        var ret = this.isDeviceToApRttSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.isDeviceToApRttSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").isEnhancedPowerReportingSupported.overload().implementation = function () {
        var ret = this.isEnhancedPowerReportingSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.isEnhancedPowerReportingSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").isP2pSupported.overload().implementation = function () {
        var ret = this.isP2pSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.isP2pSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").isPreferredNetworkOffloadSupported.overload().implementation = function () {
        var ret = this.isPreferredNetworkOffloadSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.isPreferredNetworkOffloadSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").isScanAlwaysAvailable.overload().implementation = function () {
        var ret = this.isScanAlwaysAvailable();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.isScanAlwaysAvailable", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.net.wifi.WifiManager").isTdlsSupported.overload().implementation = function () {
        var ret = this.isTdlsSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.net.wifi.WifiManager.isTdlsSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getDeviceId.overload().implementation = function () {
        var ret = this.getDeviceId();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getDeviceId", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getDeviceId.overload("int").implementation = function (arg0) {
        var ret = this.getDeviceId(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getDeviceId", argTypes: ["int"], args:[arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getImei.overload("int").implementation = function (arg0) {
        var ret = this.getImei(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getImei", argTypes: ["int"], args:[arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getImei.overload().implementation = function () {
        var ret = this.getImei();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getImei", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getLine1Number.overload().implementation = function () {
        var ret = this.getLine1Number();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getLine1Number", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getMeid.overload().implementation = function () {
        var ret = this.getMeid();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getMeid", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getMeid.overload("int").implementation = function (arg0) {
        var ret = this.getMeid(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getMeid", argTypes: ["int"], args:[arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getNetworkOperator.overload().implementation = function () {
        var ret = this.getNetworkOperator();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getNetworkOperator", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getNetworkOperatorName.overload().implementation = function () {
        var ret = this.getNetworkOperatorName();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getNetworkOperatorName", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getSimOperator.overload().implementation = function () {
        var ret = this.getSimOperator();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getSimOperator", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getSimSerialNumber.overload().implementation = function () {
        var ret = this.getSimSerialNumber();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getSimSerialNumber", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getNetworkSpecifier.overload().implementation = function () {
        var ret = this.getNetworkSpecifier();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getNetworkSpecifier", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getDataNetworkType.overload().implementation = function () {
        var ret = this.getDataNetworkType();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getDataNetworkType", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getCellLocation.overload().implementation = function () {
        var ret = this.getCellLocation();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getCellLocation", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getDataNetworkType.overload().implementation = function () {
        var ret = this.getDataNetworkType();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getDataNetworkType", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getMmsUAProfUrl.overload().implementation = function () {
        var ret = this.getMmsUAProfUrl();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getMmsUAProfUrl", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getMmsUserAgent.overload().implementation = function () {
        var ret = this.getMmsUserAgent();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getMmsUserAgent", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getNai.overload().implementation = function () {
        var ret = this.getNai();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getNai", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getNetworkCountryIso.overload().implementation = function () {
        var ret = this.getNetworkCountryIso();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getNetworkCountryIso", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getNetworkType.overload().implementation = function () {
        var ret = this.getNetworkType();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getNetworkType", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getPhoneCount.overload().implementation = function () {
        var ret = this.getPhoneCount();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getPhoneCount", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getActiveModemCount.overload().implementation = function () {
        var ret = this.getActiveModemCount();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getActiveModemCount", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getPhoneType.overload().implementation = function () {
        var ret = this.getPhoneType();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getPhoneType", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getSimState.overload().implementation = function () {
        var ret = this.getSimState();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getSimState", returnType: "int", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getSubscriberId.overload().implementation = function () {
        var ret = this.getSubscriberId();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getSubscriberId", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getVoiceMailAlphaTag.overload().implementation = function () {
        var ret = this.getVoiceMailAlphaTag();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getVoiceMailAlphaTag", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").getVoiceMailNumber.overload().implementation = function () {
        var ret = this.getVoiceMailNumber();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.getVoiceMailNumber", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").hasIccCard.overload().implementation = function () {
        var ret = this.hasIccCard();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.hasIccCard", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").isHearingAidCompatibilitySupported.overload().implementation = function () {
        var ret = this.isHearingAidCompatibilitySupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.isHearingAidCompatibilitySupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").isNetworkRoaming.overload().implementation = function () {
        var ret = this.isNetworkRoaming();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.isNetworkRoaming", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").isSmsCapable.overload().implementation = function () {
        var ret = this.isSmsCapable();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.isSmsCapable", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").isTtyModeSupported.overload().implementation = function () {
        var ret = this.isTtyModeSupported();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.isTtyModeSupported", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").isVoiceCapable.overload().implementation = function () {
        var ret = this.isVoiceCapable();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.isVoiceCapable", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.telephony.TelephonyManager").isWorldPhone.overload().implementation = function () {
        var ret = this.isWorldPhone();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.telephony.TelephonyManager.isWorldPhone", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.accounts.AccountManager").getAccounts.overload().implementation = function () {
        var ret = this.getAccounts();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.accounts.AccountManager.getAccounts", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.accounts.AccountManager").getAccountsAndVisibilityForPackage.overload("java.lang.String", "java.lang.String").implementation = function (arg0, arg1) {
        var ret = this.getAccountsAndVisibilityForPackage(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.accounts.AccountManager.getAccountsAndVisibilityForPackage", argTypes: ["java.lang.String", "java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1 ? arg1.slice(0, 300) : arg1], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.accounts.AccountManager").getAccountsByType.overload("java.lang.String").implementation = function (arg0) {
        var ret = this.getAccountsByType(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.accounts.AccountManager.getAccountsByType", argTypes: ["java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.accounts.AccountManager").getAccountsByTypeAndFeatures.overload("java.lang.String", "[Ljava.lang.String;", "android.accounts.AccountManagerCallback", "android.os.Handler").implementation = function (arg0, arg1, arg2, arg3) {
        var ret = this.getAccountsByTypeAndFeatures(arg0, arg1, arg2, arg3);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.accounts.AccountManager.getAccountsByTypeAndFeatures", argTypes: ["java.lang.String", "java.lang.String[]", "android.accounts.AccountManagerCallback", "android.os.Handler"], args:[null, null, null, null], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.accounts.AccountManager").getAccountsByTypeForPackage.overload("java.lang.String", "java.lang.String").implementation = function (arg0, arg1) {
        var ret = this.getAccountsByTypeForPackage(arg0, arg1);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.accounts.AccountManager.getAccountsByTypeForPackage", argTypes: ["java.lang.String", "java.lang.String"], args:[arg0 ? arg0.slice(0, 300) : arg0, arg1 ? arg1.slice(0, 300) : arg1], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.bluetooth.BluetoothAdapter").getAddress.overload().implementation = function () {
        var ret = this.getAddress();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.bluetooth.BluetoothAdapter.getAddress", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.bluetooth.BluetoothAdapter").getBondedDevices.overload().implementation = function () {
        var ret = this.getBondedDevices();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.bluetooth.BluetoothAdapter.getBondedDevices", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.bluetooth.BluetoothAdapter").getName.overload().implementation = function () {
        var ret = this.getName();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.bluetooth.BluetoothAdapter.getName", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.Build").getRadioVersion.overload().implementation = function () {
        var ret = this.getRadioVersion();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.Build.getRadioVersion", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.Build").getSerial.overload().implementation = function () {
        var ret = this.getSerial();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.Build.getSerial", returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").getUsers.overload("boolean", "boolean", "boolean").implementation = function (arg0, arg1, arg2) {
        var ret = this.getUsers(arg0, arg1, arg2);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.getUsers", argTypes: ["boolean", "boolean", "boolean"], args:[arg0, arg1, arg2], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").getUserAccount.overload("int").implementation = function (arg0) {
        var ret = this.getUserAccount(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.getUserAccount", argTypes: ["int"], args:[arg0], returnType: "java.lang.String", returnedObj: ret ? ret.slice(0, 300) : ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").getPrimaryUser.overload().implementation = function () {
        var ret = this.getPrimaryUser();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.getPrimaryUser", stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").getProfiles.overload("int").implementation = function (arg0) {
        var ret = this.getProfiles(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.getProfiles", argTypes: ["int"], args:[arg0], stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").isDemoUser.overload().implementation = function () {
        var ret = this.isDemoUser();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.isDemoUser", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").isQuietModeEnabled.overload("android.os.UserHandle").implementation = function (arg0) {
        var ret = this.isQuietModeEnabled(arg0);
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.isQuietModeEnabled", argTypes: ["android.os.UserHandle"], args:[null], returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").isSystemUser.overload().implementation = function () {
        var ret = this.isSystemUser();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.isSystemUser", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }

    Java.use("android.os.UserManager").isUserAGoat.overload().implementation = function () {
        var ret = this.isUserAGoat();
        var inPackageName = packageFromStacktrace();
        var sendObj = {type: "fingerprint", function: "android.os.UserManager.isUserAGoat", returnType: "boolean", returnedObj: ret, stacktrace: inPackageName};
        send(JSON.stringify(sendObj));
        return ret;
    }


});
