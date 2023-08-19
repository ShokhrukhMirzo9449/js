function findGrade(grade){
    
    if(grade > 90 && grade <=100){
        console.log(`A+ ${grade} grade`);
    }
    else if(grade > 80 && grade <=90 ){
        console.log(`A ${grade} grade`);
    }
    else if(grade > 70 && grade <=80 ){
        console.log(`B ${grade} grade`);
    }
    else if(grade > 60 && grade <=70 ){
        console.log(`C ${grade} grade`);
    }
    else if(grade > 50 && grade <=60 ){
        console.log(`D ${grade} grade`);
    }
    else if(grade > 40 && grade <=50 ){
        console.log(`E ${grade} grade`);
    }
    else if(grade >= 0 && grade <=40 ){
        console.log(`Student has failed`);
    }
    else
    {
        console.log("Invalid marks");
    }
};
findGrade(80);