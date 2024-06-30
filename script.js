function handleSubmit() {
    
    // Pega os inputs
    const qtdHomens = Number(document.querySelector(".homens").value);
    const qtdMulheres = Number(document.querySelector(".mulheres").value);
    const qtdCriancas = Number(document.querySelector(".criancas").value);
    
    // Ingredientes:

    // Homens:
    const carneBovinaHomens = 500;
    const frangoHomens = 200;
    const linguicaHomens = 200;
    const refrigeranteHomens = 300;
    const cervejaHomens = 800;

    // Mulheres:
    const carneBovinaMulheres = 300;
    const frangoMulheres = 200;
    const linguicaMulheres = 200;
    const refrigeranteMulheres = 400;
    const cervejaMulheres = 500;

    // Crianças:
    const carneBovinaCriancas = 200;
    const frangoCriancas = 100;
    const linguicaCriancas = 200;
    const refrigeranteCriancas = 200;
    const cervejaCriancas = 0;
    
    // Total Ingredientes (Arredondados):
    const totalCarne = Math.round((qtdHomens * carneBovinaHomens) + (qtdMulheres * carneBovinaMulheres) + (qtdCriancas * carneBovinaCriancas));
    const totalFrango = Math.round((qtdHomens * frangoHomens) + (qtdMulheres * frangoMulheres) + (qtdCriancas * frangoCriancas));
    const totalLinguca = Math.round((qtdHomens * linguicaHomens) + (qtdMulheres * linguicaMulheres) + (qtdCriancas * linguicaCriancas));
    const totalRefrigerante = Math.round((qtdHomens * refrigeranteHomens) + (qtdMulheres * refrigeranteMulheres) + (qtdCriancas * refrigeranteCriancas));
    const totalCerveja = Math.round((qtdHomens * cervejaHomens) + (qtdMulheres * cervejaMulheres) + (qtdCriancas * cervejaCriancas));

    // Adiciona unidades de medida:
    const totalCarneKg = (totalCarne / 1000).toFixed(2) + ' kg de Carne Bovina';
    const totalFrangoKg = (totalFrango / 1000).toFixed(2) + ' kg de Frango';
    const totalLingucaKg = (totalLinguca / 1000).toFixed(2) + ' kg de Linguiça';
    const totalRefrigeranteL = (totalRefrigerante / 1000).toFixed(2) + ' L de Refrigerante';
    const totalCervejaL = (totalCerveja / 1000).toFixed(2) + ' L de Cerveja';

    // Resultado:
    const listaDeIngredientes = document.getElementById('itensUl');
    listaDeIngredientes.innerHTML = `
        <li>${totalCarneKg}</li>
        <li>${totalFrangoKg}</li>
        <li>${totalLingucaKg}</li>
        <li>${totalRefrigeranteL}</li>
        <li>${totalCervejaL}</li>
    `;

    return false;
}
