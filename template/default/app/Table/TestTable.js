const { Table } = require("albion");

module.exports = class TestTable extends Table{

    constructor(ro,option){
        super(ro,option);

        this.setTable("document_jp");
        
    }

};