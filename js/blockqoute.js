/*
*   Desgin By Mayank All Right Reserved
*   Website1 = "College"
*   Script :  js/blockquote.js
*/
try
{
    var blockqoute_data = [
        {
            qoute : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nisi ut neque sunt aliquam et quo corporis quae architecto! Facilis adipisci numquam repudiandae ullam cum quod pariatur, nemo corporis voluptatibus.',
            sender : 'Anthonyadverd Staff',
            rate : 5 
        },
        {
            qoute : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nisi ut neque sunt aliquam et quo corporis quae architecto! Facilis adipisci , nemo corporis voluptatibus.',
            sender : 'Petter Parker',
            rate : 3
        },
        {
            qoute : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nisi ut neque sunt aliquam et quo corporis quae architecto! Facilis adipisci , nemo corporis voluptatibus.',
            sender : 'Vade Wilson',
            rate : 2 
        }
    ];

    let student = document.getElementById('student');

    var index = 0;

    function starRating(star)
    {
        var back_star = '';

        for (let i = 0; i < 5; i++)
            if(i >= star)
                back_star += '&star;';
            else
                back_star += '&starf;';

        return back_star;
    }
    function block_qoutes(index)
    {
        return (
            "<blockquote>"+
                "<p>"+blockqoute_data[index].qoute+"</p>"+
                "<br>"+
                "<b>"+blockqoute_data[index].sender+"</b>"+
                "<div class='rate'>"+starRating(blockqoute_data[index].rate)+"</div>"+
            "</blockquote>"
        );
    }
    
    for(let i = 0; i < blockqoute_data.length; i++)
    {
        student.insertAdjacentHTML("afterend",block_qoutes(i))
    }
}
catch (error)
{
    alert(error);    
}