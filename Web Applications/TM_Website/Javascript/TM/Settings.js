//TM Settings
TM.tmVersion = "TM 3.2 Beta RC1";
TM.ArticleTitle = "TeamMentor 3.2";

TM.tmWebServices     = '/Aspx_Pages/TM_WebServices.asmx/';
TM.NotAuthorizedPage = '/Html_Pages/Gui/Panels/AD_Non_Authorized_User.html';

//TM.Gui.GauguesID                                = null;     // set to GaugesID to enabled it
TM.Gui.showLibraryStructureToAnonymous          = true;
TM.Gui.LoadLibraryData      					= true
TM.Gui.editMode			   						= false;

TM.Debug.addTimeStampToLoadedPages 			  	= true;
TM.Debug.reuseLibraryMappingsObject 		  	= true;
TM.Debug.load_HomePage 						  	= true;

TM.Debug.showExperimentalFeatures				= false;
TM.Debug.allow_start_checkUserLoop              = true;    // use to prevent the auto check of user settings 


TM.Debug.show_DebugDiv						  	= false;	// show small box with links to open trace view
TM.Debug.show_TraceView							= false; 	// show call trace popup window
TM.Debug.callTrace_LoadEnvironment 			  	= false;	// open traceview popup and setup call trace hooks
TM.Debug.callTrace_LoadEnvironment_Before_Gui 	= false;
TM.Debug.callTrace_ShowExecutionTime		  	= false;
TM.Debug.callTrace_LogToConsole				  	= false;
TM.Debug.callTrace_ShowParamsInConsoleLog	  	= false;

TM.Debug.logEventsRaised					  	= true;
TM.Debug.logLoadedPages						  	= false;

//only put real passwords here in QA environments
TM.QUnit.defaultPassord_Admin                   = "!!tmbeta";
TM.QUnit.defaultPassord_Editor                  = "!!tmbeta";
TM.QUnit.defaultPassord_Reader                  = "!!tmbeta";

//Individual trace options
TM.WebServices.Helper.trace						= false;
TM.Gui.AppliedFilters.trace						= false;
TM.WebServices.trace							= false;