// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;
module.exports = function(content, url) {
	try {
		var blob;
		try {
			blob = new Blob([content], {type: 'application/javascript'});
		} catch (e) { // Backwards-compatibility
			var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
			blob = new BlobBuilder();
			blob.append(content);
			blob = blob.getBlob();
		}
		return new Worker(URL.createObjectURL(blob));
	} catch(e) {
		return new Worker(url);
	}
}