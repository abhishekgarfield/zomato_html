            function myfunc(e,option,arrow_pos)
            {
                var el=document.getElementById(option);
                console.log("triggered");
                if(el.className=="option")
                {
                    el.className+=" sho";
                }
                else
                {
                    el.className="option";
                }
            };
            /*
            function myfunct()
            {
                var el=document.getElementById("option_2");
                if(el.style.display==="none")
                {
                    el.style.display="block";
                }
                else
                {
                    el.style.display="none";
                }
            };
            function myfunctio()
            {
                var el=document.getElementById("option_3");
                if(el.style.display==="none")
                {
                    el.style.display="block";
                }
                else
                {
                    el.style.display="none";
                }
            };
            function myphone(x)
            {
                var el=document.getElementById("nav_phon_cont");
                var th =document.getElementById("phon_nav");
                
                if(el.style.display ==="none")
                {
                    el.style.display="block";
                    th.style.backgroundColor="white"
                    th.style.width="100%";
                    x.className="fa fa-remove";
                    th.style.position="fixed";
                    el.style.top="38px";
                }
                else
                {
                    el.style.display="none"; 
                    th.style.backgroundColor="transparent";
                    x.className="fa fa-bars";
                    th.style.position="relative";
                }
            };
            */
            function show(e,labelname)
            {
             var label_output=document.getElementsByClassName("label_output");
             for(i=0;i<label_output.length;i++)
             {

                label_output[i].style.display ="none";
             }
             document.getElementById(labelname).style.display="block";
             var label=document.getElementsByClassName("label");
             for (i=0;i<label.length;i++)
             {
                    label[i].className=label[i].className.replace(" active","");
             }
             e.currentTarget.className += " active";
            }
            document.getElementById("default").click();
            var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  
}
var slider = document.getElementById("myRange1");
var output = document.getElementById("demo1");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  
}

function showfilter(e)
{
    var el=document.getElementById("show_filters");
    console.log("fired");
    if(el.className=="show_filters")
    {
        el.className +=" sho";
    }
    else{
        el.className="show_filters";
    }

}
function shownav(e)
{
    var nav=document.getElementById("nav_bar");
    var el=document.getElementById("phonenav");
    if(nav.className=="nav_bar")
    {
        nav.className +=" responsive";
        el.className ="fa fa-remove";
    }
    else{
        nav.className="nav_bar";
        el.className ="fa fa-bars";

    }

}
            
