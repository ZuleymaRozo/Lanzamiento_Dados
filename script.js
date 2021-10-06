# Lanzamiento_Dados
function calcular()
      {
        var tirar; f=[0,0,0,0,0,0,0]
        n=parseInt(document.datos.n.value)
        

      for(i=0 ; i<n; i++)

            {  tirar=Math.round(6*Math.random(1)+0.5)  ;  f[tirar]=f[tirar]+1 }

         for(i=1 ; i<7; i++)

            {  barra="";b=Math.round(100*f[i]/n);

            for(j=0 ; j<b; j++)  {  barra=barra+" " }

               document.datos[3*i-1].value=f[i]  ; 

               document.datos[3*i].value=f[i]/n ;

                document.datos[3*i+1].value=barra        

              }
  
var oilCanvas= document.getElementById("oilChart");

var oilData = {
  labels:["Uno","Dos","Tres","Cuatro","Cinco","Seis"],
  datasets:[
  {
    data:[f[1],f[2],f[3],f[4],f[5],f[6]],
    backgroundColor:[
    'black',
    'gray'
    ]
    }]
    };
   
 var pieChart = new Chart(oilCanvas,{
  type: 'bar',
  data: oilData
});

}
 
