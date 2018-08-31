module.exports = function(RED) {
	
	// Node constructor
    function YarmTxNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        // Receiving messages listener
        node.on('input', function(msg) {
			this.status({fill:"red",shape:"dot",text:"On Air"});

			setTimeout(function() {
				node.status({});
			},1000);

	        this.on('close', function() {
				// this.warn("Yarm Tx closed");
			});
            
            node.send(msg);
        });
    } 

	// Node constructor
    function YarmRxNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        // Receiving messages listener
        node.on('input', function(msg) {
			this.status({fill:"green",shape:"dot",text:"Receiving"});

			setTimeout(function() {
				node.status({});
			},2000);

	        this.on('close', function() {
				// this.warn("Yarm Rx closed");
			});
            
            node.send(msg);
        });
    }
    RED.nodes.registerType("yarm tx",YarmTxNode);
    RED.nodes.registerType("yarm rx",YarmRxNode);
}