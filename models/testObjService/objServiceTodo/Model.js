define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "objServiceTodo", "objectService" : "testObjService"};
	
	var setterFunctions = {
		todosIndex : function(val, state){
			context["field"]  = "todosIndex";
			context["metadata"] = (objectMetadata ? objectMetadata["todosIndex"] : null);
			state['todosIndex'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function objServiceTodo(defaultValues){
		var privateState = {};
			context["field"]  = "todosIndex";
			context["metadata"] = (objectMetadata ? objectMetadata["todosIndex"] : null);
			privateState.todosIndex = defaultValues?(defaultValues["todosIndex"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["todosIndex"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"todosIndex" : {
					get : function(){
						context["field"]  = "todosIndex";
			        	context["metadata"] = (objectMetadata ? objectMetadata["todosIndex"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.todosIndex, context);},
					set : function(val){
						setterFunctions['todosIndex'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.todosIndex = value?(value["todosIndex"]?value["todosIndex"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(objServiceTodo);
	
	//Create new class level validator object
	BaseModel.Validator.call(objServiceTodo);
	
	var registerValidatorBackup = objServiceTodo.registerValidator;
	
	objServiceTodo.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( objServiceTodo.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'getIndex' with service id 'getAllPosts1686'
	objServiceTodo.getIndex = function(params, onCompletion){
		return objServiceTodo.customVerb('getIndex', params, onCompletion);
	};
	
	var relations = [
	];
	
	objServiceTodo.relations = relations;
	
	objServiceTodo.prototype.isValid = function(){
		return objServiceTodo.isValid(this);
	};
	
	objServiceTodo.prototype.objModelName = "objServiceTodo";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	objServiceTodo.registerProcessors = function(options, successCallback, failureCallback) {
	
		if(!options) {
			options = {};
		}
			
		if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
			preProcessorCallback = options["preProcessor"];
		}
		
		if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])){
			postProcessorCallback = options["postProcessor"];
		}
		
		function metaDataSuccess(res) {
			objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
			successCallback();
		}
		
		function metaDataFailure(err) {
			failureCallback(err);
		}
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("testObjService", "objServiceTodo", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	objServiceTodo.clone = function(objectToClone) {
		var clonedObj = new objServiceTodo();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return objServiceTodo;
});