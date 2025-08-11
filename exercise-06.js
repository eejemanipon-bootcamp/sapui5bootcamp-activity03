function displayMostSkilled() {

/*Declare record data*/   
    const record = [{
        "Name":"Gibo",
        "Age":16,
        "SkillSet" : [{
            "Skill":"SAP UI5"
            },{
            "Skill":"SAP HANA"
        }]
        }, {
        "Name":"Patrick",
        "Age":22,
        "SkillSet" : [{
            "Skill":"SAP UI5"
            }, {
            "Skill":"SAP HANA"
            }, {
            "Skill":"SAP ABAP"
        }]
        }, {
        "Name":"MJ",
        "Age":24,
        "SkillSet" : [{
            "Skill":"SAP HANA"
        }]
    }];

    var mostSkilled = record[0]; //Set first record as most skilled one

/*Loop through the data to determine record with more skills*/
    for( let x = 1; x < record.length; x++ ){
        if( record[x].SkillSet.length > mostSkilled.SkillSet.length ){
            mostSkilled = record[x];
        }
    }

/*Display output*/
    console.log(`Name: ${mostSkilled.Name}`);
    console.log(`Age: ${mostSkilled.Age}`);

}