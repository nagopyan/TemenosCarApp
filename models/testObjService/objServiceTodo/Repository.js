define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function objServiceTodoRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	objServiceTodoRepository.prototype = Object.create(BaseRepository.prototype);
	objServiceTodoRepository.prototype.constructor = objServiceTodoRepository;

	//For Operation 'getIndex' with service id 'getAllPosts1686'
	objServiceTodoRepository.prototype.getIndex = function(params,onCompletion){
		return objServiceTodoRepository.prototype.customVerb('getIndex',params, onCompletion);
	};
	
	
	return objServiceTodoRepository;
})