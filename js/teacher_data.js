/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "College"
*   Script :  js/teacher_data.js
*/
try
{
    var teacher_data = [
        ['Mathmatic Teacher','Haya','Khan','F',9211420420,600,'PHD in MATHMAICS','teacher'],
        ['Science Teacher','Rhadha','delo','F',9211420420,400,'PHD in MATHMAICS','teacher'],
        ['English Teacher','Pretty','Kor','M',9211420420,300,'PHD in MATHMAICS','teacher']
    ];

    var data_index = 0;
        
    let teacher_detail = document.getElementById("teacher_detail");

    let teacher_picture = document.getElementById("teacher_picture");
    
    /*
        Gedner function take sex and out gender ------------------------------------------------
    */
    function gender(sex)
    {
        if(sex == 'F')
            return 'Female';
        if(sex == 'M')
            return 'Male';
        else
            return 'Shemale';
    }
    /*
        display function that content data list format -----------------------------------------
    */
    function display()
    { 
        teacher_detail.innerHTML = 
        "<li>"+teacher_data[data_index][0]+"</li>"+
        "<li> Name : "+teacher_data[data_index][1]+" "+teacher_data[data_index][2]+"</li>"+
        "<li> Gender : "+gender(teacher_data[data_index][3])+"</li>"+
        "<li> Contact : "+teacher_data[data_index][4]+"</li>"+
        "<li> Salary : &#36; "+teacher_data[data_index][5]+"</li>"+
        "<li> Qulificated : "+teacher_data[data_index][6]+"</li>";      
    }
    /*
        AFTER_BUTTON function on click to back data --------------------------------------------
    */
    document.querySelector('button[name=afr_btn]').onclick = () => { (data_index <= 0)? data_index = teacher_data.length : data_index--; display(); }
    /*
        BEFORE_BUTTON function on click to next data -------------------------------------------
    */
    document.querySelector("button[name='bfr_btn']").onclick = () => { (data_index >= teacher_data.length)? data_index = 0 : data_index++; display(); } 
    /*
        DISPLAY call to default first data -----------------------------------------------------
    */
    display();
}
catch(error)
{
    alert(" ERROR : Teacher Data JS file "+error);    
}

