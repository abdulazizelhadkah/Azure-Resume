window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})
const functionAPI = '';
const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(Response=>{
        return Response.json()
    }).then(Response=>{
        console.log("website called Function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error); 
    });
    return count;
}