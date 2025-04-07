let existencias_meds = {
    Existencias_med1: 0,
    Existencias_med2: 0
};

let pacientes = 0;
let pacientes_med1 = 0;
let pacientes_med2 = 0;

document.getElementById("iniciarPrograma").addEventListener("click", () => {
    const med1 = parseInt(document.getElementById("existenciasMed1").value);
    const med2 = parseInt(document.getElementById("existenciasMed2").value);

    if (isNaN(med1) || isNaN(med2)) {
        alert("Por favor, ingrese las existencias de ambos medicamentos.");
        return;
    }

    existencias_meds.Existencias_med1 = med1;
    existencias_meds.Existencias_med2 = med2;

    document.getElementById("formPaciente").style.display = "block";
    document.getElementById("iniciarPrograma").style.display = "none";
});

document.getElementById("evaluarPaciente").addEventListener("click", () => {
    const Pre_sistolica = parseInt(document.getElementById("preSistolica").value);
    const Pre_diastolica = parseInt(document.getElementById("preDiastolica").value);

    if (isNaN(Pre_sistolica) || isNaN(Pre_diastolica)) {
        alert("Por favor, ingrese valores válidos para la presión.");
        return;
    }

    pacientes += 1;
    let mensaje = "";

    if (Pre_sistolica < 69 || Pre_diastolica < 48) {
        mensaje = "El paciente padece de hipotensión. Se entregan 6 dosis de medicamento 2.";
        pacientes_med2 += 1;
        existencias_meds.Existencias_med2 -= 6;
    } else if (Pre_sistolica >= 69 && Pre_sistolica <= 97 || Pre_diastolica >= 48 && Pre_diastolica <= 65) {
        mensaje = "El paciente presenta presión óptima. No se entrega medicamento.";
    } else if (Pre_sistolica >= 98 && Pre_sistolica <= 142 || Pre_diastolica >= 66 && Pre_diastolica <= 91) {
        mensaje = "El paciente presenta presión común. No se entrega medicamento.";
    } else if (Pre_sistolica >= 143 && Pre_sistolica <= 176 || Pre_diastolica >= 92 && Pre_diastolica <= 123) {
        mensaje = "El paciente presenta Pre HTA. Se entregan 6 dosis de medicamento 1.";
        pacientes_med1 += 1;
        existencias_meds.Existencias_med1 -= 6;
    } else if (Pre_sistolica >= 177 && Pre_sistolica <= 197 || Pre_diastolica >= 124 && Pre_diastolica <= 141) {
        mensaje = "El paciente presenta HTAG1. Se entregan 10 dosis de medicamento 1.";
        pacientes_med1 += 1;
        existencias_meds.Existencias_med1 -= 10;
    } else if (Pre_sistolica >= 198 && Pre_sistolica <= 245 || Pre_diastolica >= 142 && Pre_diastolica <= 168) {
        mensaje = "El paciente presenta HTAG2. Se entregan 18 dosis de medicamento 1.";
        pacientes_med1 += 1;
        existencias_meds.Existencias_med1 -= 18;
    } else if (Pre_sistolica >= 246 && Pre_diastolica >= 169) {
        mensaje = "El paciente presenta HTAG3. Se entregan 35 dosis de medicamento 1.";
        pacientes_med1 += 1;
        existencias_meds.Existencias_med1 -= 35;
    } else {
        mensaje = "El paciente no se encuentra en ninguna categoría. No se entrega medicamento.";
    }

    document.getElementById("mensajeResultado").innerText = mensaje;
    document.getElementById("resultado").style.display = "block";
    document.getElementById("formPaciente").style.display = "none";
});

document.getElementById("atenderOtro").addEventListener("click", () => {
    document.getElementById("formPaciente").style.display = "block";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("preSistolica").value = "";
    document.getElementById("preDiastolica").value = "";
});

document.getElementById("finalizar").addEventListener("click", () => {
    alert("Total de pacientes atendidos: " + pacientes);
    alert("Total de pacientes atendidos con medicamento 1: " + pacientes_med1);
    alert("Total de pacientes atendidos con medicamento 2: " + pacientes_med2);
    alert("Porcentaje de pacientes con medicamento 1: " + ((pacientes_med1 / pacientes) * 100).toFixed(2) + "%");
    alert("Porcentaje de pacientes con medicamento 2: " + ((pacientes_med2 / pacientes) * 100).toFixed(2) + "%");
    location.reload(); // Reinicia el programa
});

