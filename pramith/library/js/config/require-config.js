var globalExcludes=["jquery","vendor/angular-min"],require={baseUrl:"library/js",waitSeconds:90,paths:{jquery:"vendor/jquery"},shim:{"vendor/angular-min":{exports:"angular"}},modules:[{name:"mediators/app"}],map:{"*":{jquery:"modules/noconflict"},"modules/noconflict":{jquery:"jquery"}}};