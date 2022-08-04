            function myfunc()
            {
                var el=document.getElementById("option_1");
                if(el.style.display==="none")
                {
                    el.style.display="block";
                }
                else
                {
                    el.style.display="none";
                }
            };
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
            function show(e,labelname)
            {
             var label_output=document.getElementsByClassName("label_output");
             for(i=0;i<label_output.length;i++)
             {

                label_output[i].style.display ="none";
             }
             document.getElementById(labelname).style.display="block";
            
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
    if(el.className=="show_filters hid")
    {
        el.className="show_filters sho";
    }
    else{
        el.className="show_filters hid";
    }

}
            
