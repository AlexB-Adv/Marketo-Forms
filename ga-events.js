if (typeof $$epiforms !== 'undefined') {
        $$epiforms(document).ready(function myfunction() {
            console.log('listen to event');
            $$epiforms(".EPiServerForms").on("formsNavigationNextStep formsNavigationPrevStep formsSetupCompleted formsReset formsStartSubmitting formsSubmitted formsSubmittedError formsNavigateToStep formsStepValidating", function (event, param1, param2) {
                console.log($(this).get(0), event);
                ga('create', 'UA-26590643-7', 'auto');
                ga('set', 'transport', 'beacon');
                ga('send', 'event', {
				    eventCategory: event.workingFormInfo.Name,
				    eventAction: event.type,
				    eventLabel: event.target.baseURI,
				    transport: 'beacon'
				  });
            });
        });
    }