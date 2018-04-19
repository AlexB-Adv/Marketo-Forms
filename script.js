<script type="text/javascript">

var tags = {
	webOwner 		: "webOwner",
	solutionInterest: "solutionInterest",
	sectorInterest 	: "sectorInterest",
	productInterest : "productInterest"
};


function getKeywords() {
	return new Promise(function(succeed, fail) {
		var meta = document.querySelector('meta[name="keywords"]').getAttribute("content").split(", ");
		console.log("meta", meta);
		if ( meta != null ) {
			succeed(meta);
		} else {
			fail(new Error("keywords not found"));
		}
	});
}


function getAField(field) {
	return new Promise(function(succeed, fail) {
		var aField = document.querySelector('input[value="'+ field +'"]');
		console.log("field:", aField);
		if ( aField != null ) {
			succeed(aField);
		} else {
			fail(new Error("keywords not found"));
		}		
	});
}


function mapKeywordsToTags(keywords) {
	return new Promise(function(succeed, fail) {
		if ( keywords != null ) {
			
			if ( keywords[0] ) {
				tags.webOwner = keywords[0];
			}
			if ( keywords[1] ) {
				tags.solutionInterest = keywords[1];
			}
			if ( keywords[2] ) {
				tags.sectorInterest = keywords[2];
			}
			if ( keywords[3] ) {
				tags.productInterest = keywords[3];
			}
			succeed();
		} else {
			fail(new Error("keywords not found"));
		}		
	});
}

$(document).ready(function() {
		getKeywords()
		.catch(function(error) {
			console.log(error);
		})
		.then(function(keywords) {
			console.log("keywords: ", keywords);
			mapKeywordsToTags(keywords);
		})
		.catch(function(error) {
			console.log(error);
		})
		.then(function() {			
			getAField("webOwner").then(function(result) {
				result.value = tags.webOwner;
			});
			getAField("solutionInterest").then(function(result) {
				result.value = tags.solutionInterest;
			});
			getAField("sectorInterest").then(function(result) {
				result.value = tags.sectorInterest;
			});
			getAField("productInterest").then(function(result) {
				result.value = tags.productInterest;
			});
		});	
	}
);

</script>