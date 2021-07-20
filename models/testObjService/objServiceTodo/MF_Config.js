define([],function(){
	var mappings = {
		"todosIndex" : "todosIndex",
	};
	Object.freeze(mappings);
	
	var typings = {
		"todosIndex" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"todosIndex",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "testObjService",
		tableName : "objServiceTodo"
	};
	Object.freeze(config);
	
	return config;
})
