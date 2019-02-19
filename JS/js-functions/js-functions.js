<h1 id="resultsDiv"></h1>
<h1 id="resultsDiv2"></h1>

<script>

    /* Declare the function 'myFunc' */
    function myFunc(theObject) {
        theObject.brand = "Dodge";
    }

    /*
     * Declare variable 'mycar';
     * create and initialize a new Object;
     * assign reference to it to 'mycar'
     */
    var mycar = {
        brand: "Dodge",
        model: "Caliber",
        year: 2010
    };

    /* Logs 'Dodge' */
    document.getElementById('resultsDiv').innerHTML = mycar.brand;


    /* Pass object reference to the function */
    myFunc(mycar);

    /*
     * Logs 'Chrysler' as the value of the 'brand' property
     * of the object, as changed to by the function.
     */
    document.getElementById('resultsDiv2').innerHTML = mycar.brand;
    
</script>