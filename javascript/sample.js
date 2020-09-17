mybutton=document.getElementById("mybtn");

window.onscroll=function() {scrollfunction()};

function scrollfunction()
{
	if (document.documentElement.scrollTop > 20) 
	{
		mybutton.style.display ="block";
	}
	else
	{
           mybutton.style.display ="none";
	}
}

function topfunction()
{
	document.documentElement.scrollTop = 0;
}