document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", async function () {
      try {
          let response = await fetch("expression.txt"); 
          if (!response.ok) throw new Error("Erreur lors du chargement du fichier");

          let text = await response.text(); 

          let paragraph = document.createElement("p"); 
          paragraph.textContent = text; 
          document.body.appendChild(paragraph); 
      } catch (error) {
          console.error("Erreur:", error);
      }
  });
});
