//
//1)Importar Archivo.
//
mongoimport -d students -c grades < /home/ivang/grades.json

//
//2)Cuantos registros arrojo el comando count.
//
db.grades.count();
//800

//
//3)Calificaciones del estudiante con id=4.
//
db.grades.find({student_id:4},{student_id:1,score:1,_id:0}).count()
//4

//
//4)¿Cuantos registros hay de tipo exam?
//
db.grades.find({type:'exam'},{student_id:1,type:1,_id:0}).count()
//200

//
//5)¿Cuantos registros hay de tipo homework?
//
db.grades.find({type:'homework'},{student_id:1,type:1,_id:0}).count()
//400

//
//6)¿Cuantos registros hay de tipo quiz?
//
db.grades.find({type:'quiz'},{student_id:1,type:1,_id:0}).count()
//200

//
//7)Elimina todas las calificaciones del estudiante con el id numero 3 
//
db.grades.remove({ student_id:3 });
//WriteResult({ "nRemoved" : 4 })

//
//8)¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
//
db.grades.find({score:75.29561445722392},{_id:0,student_id:1,score:1})
//{ "student_id" : 9, "score" : 75.29561445722392 }

//
//9)Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
//
db.grades.update(
...     { _id : ObjectId('50906d7fa3c412bb040eb591')},
...     {
...         $set:{score:100}
...     }
... );
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

//
//10)A que estudiante pertenece esta calificación.
//
db.grades.find({ _id : ObjectId('50906d7fa3c412bb040eb591')},{_id:1,student_id:1,score:1})
//{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "score" : 100 }



