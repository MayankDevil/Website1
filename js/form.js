/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "College"
*   Script :  js/teacher_data.js
*/
try
{
    let form = document.getElementById('login_form');

    let btn1 = document.getElementsByClassName('btn1');

    /*
        LOGIN FORM 
    */
    function login_form()
    {
        return (
            "<h1> Login Form </h1>"+
            "<div>  </div>"+
            "<div><input type='text' class='fld1' placeholder='Enter Staff ID'></div>"+
            "<div><input type='text' class='fld1' placeholder='Enter Username'></div>"+
            "<div><input type='tel' class='fld1' placeholder='Enter Contact Number'></div>"+
            "<div><input type='password' class='fld1' placeholder='Enter Password'></div>"+
            "<div id='grp_btn'><input type='submit' value='Sing In' class='btn1'>"+
            "<input type='submit' value='Login' class='btn1'></div>"
        );
    }
    /*
        SINGIN FORM
    */
    function signIn_form()
    {
        return (
            "<h1> Login Form </h1>"+
            "<div>  </div>"+
            "<div><input type='text' class='fld1' placeholder='Enter Username/ID'></div>"+
            "<div><input type='password' class='fld1' placeholder='Enter Password'></div>"+
            "<div id='grp_btn'><input type='submit' value='Sing In' class='btn1'>"+
            "<input type='submit' value='Login' class='btn1'></div>"
        );
    }

    form.innerHTML = signIn_form();
    /*
        BUTTON 1 
    */
    btn1[1].onclick = function()
    {
        form.innerHTML = login_form();

        btn1[0].onclick = function()
        {
            form.innerHTML = signIn_form();
        }
    }
}
catch(error)
{
    alert(error);
}